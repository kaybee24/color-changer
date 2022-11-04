import React, { useState } from "react";
import Input from "./components/Input";
import Square from "./components/Square";

function App() {
  const [colorValue, setColorValue] = useState('')

  return (
    <div className="wrapper">
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
      />
      <Square colorValue={colorValue} />
    </div>
  );
}

export default App;
