import React, { useRef, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center gap-3 pt-20 sm:">
      <Header></Header>
      <Form></Form>
    </div>
  );
}

export default App;
