import React, { useState } from "react";
import Input from "./components/Input";
import Square from "./components/Square";

function App() {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isLightText, setIsLightText] = useState(true)

  return (
    <div className="wrapper">
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isLightText={isLightText}
        setIsLightText={setIsLightText}
      />
      <Square
        colorValue={colorValue}
        hexValue={hexValue}
        isLightText={isLightText}
      />
    </div>
  );
}

export default App;
