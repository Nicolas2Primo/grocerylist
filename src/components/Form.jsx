import { useRef, useState } from "react";

const Form = () => {
  const type = ["Fruta", "Verdura", "Carne", "Higiene", "Guloseimas", "Outro"];
  const data = {
    name: null,
    type: null,
    preco: null,
  };

  const [selectedItem, setselectedItem] = useState("");
  const [list, setList] = useState([data]);
  const [selectedButton, setselectedButton] = useState("");
  const name = useRef();
  const preco = useRef();

  const handleOnPress = (type) => {
    if (type === selectedItem) {
      setselectedItem("");
    } else {
      setselectedItem(type);
    }
  };

  const handleClick = () => {
    if (
      name.current.value == "" ||
      preco.current.value == "" ||
      selectedItem == ""
    ) {
      alert("Preencha os campos");
    } else {
      setList((prev) => [
        ...prev.filter((x) => x.name != null),
        {
          name: name.current.value,
          type: selectedItem,
          preco: preco.current.value,
        },
      ]);

      console.log(list);
    }
  };

  const deleteItem = (id) => {
    setList((prev) => prev.filter((item, index) => index !== id));
  };

  return (
    <div className="flex flex-col gap-4 items-center ">
      <input
        ref={name}
        type="text"
        className="bg-white border-none focus:ring-transparent focus:placeholder-transparent placeholder-gray-600 rounded-xl text-sm text-center py-3 hover:drop-shadow-lg"
        placeholder="Nome do Item"
      />
      <div className="flex flex-wrap gap-5 justify-center text-sm font-bold px-2">
        {type.map((type, index) => (
          <button
            isselected={(selectedItem === type).toString()}
            onClick={() => {
              handleOnPress(type);
              setselectedButton(type);
            }}
            key={index}
            className={`bg-white px-4 py-3 rounded-xl hover:scale-110 ${
              selectedButton === type ? "bg-[#ff7a88]" : "bg-white"
            } hover:drop-shadow-lg`}
          >
            {type}
          </button>
        ))}
      </div>
      <input
        ref={preco}
        type="number"
        className="border-none focus:ring-transparent focus:placeholder-transparent placeholder-gray-600 rounded-xl text-sm text-center py-3 hover:drop-shadow-lg"
        placeholder="Preço em reais"
      />
      <button
        onClick={handleClick}
        className="bg-[#ff7a88] rounded-lg px-4 py-2 font-bold text-sm text-white hover:drop-shadow-lg"
      >
        Adicionar item
      </button>
      <div className="grid grid-cols-2 gap-10 text-center pb-12 sm:flex sm:w-fit ">
        {type.map((type, index) => (
          <div key={index} className="text-2xl font-bold">
            <h1>{type}</h1>
            <div>
              {list.map((item, id) => {
                if (item.type === type) {
                  return (
                    <div
                      key={id}
                      className="flex gap-2 justify-center text-sm font-normal"
                    >
                      <span>{item.name}</span>
                      <span className="text text-green-500 font-bold">
                        R${item.preco}
                      </span>
                      <button onClick={() => deleteItem(id)}>
                        <img src="src\assets\Close.svg" alt="" />
                      </button>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
