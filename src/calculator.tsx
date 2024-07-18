import { useState } from "react";
import * as math from "mathjs";
import Btn from "./Btn";
import CalculatorInput from "./CalculatorInput";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    setInput(input + e.currentTarget.value);
  };

  const calculate = () => {
    try {
      const result = math.evaluate(input);
      setInput(result);
    } catch {
      setInput("Error");
    }
  };

  const clearInput = () => {
    setInput("");
  };

  const data = [
    { keypad: "1", handler: handleInput },
    { keypad: "2", handler: handleInput },
    { keypad: "3", handler: handleInput },
    { keypad: "+", handler: handleInput },
    { keypad: "4", handler: handleInput },
    { keypad: "5", handler: handleInput },
    { keypad: "6", handler: handleInput },
    { keypad: "-", handler: handleInput },
    { keypad: "7", handler: handleInput },
    { keypad: "8", handler: handleInput },
    { keypad: "9", handler: handleInput },
    { keypad: "*", handler: handleInput },
    { keypad: "C", handler: clearInput },
    { keypad: "0", handler: handleInput },
    { keypad: "=", handler: calculate },
    { keypad: "/", handler: handleInput },
  ];

  return (
    <>
      <div className="calculator">
        <CalculatorInput input={input} />
        <div className="keypad">
          {data.map((item) => {
            return <Btn handleInput={item.handler} keypad={item.keypad} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Calculator;
