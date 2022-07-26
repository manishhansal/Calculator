import { useRef } from "react";
import "./Calculator.css";
export const Calculator = ({ handleClick }) => {
  return (
    <>
      <h1>Calculator</h1>
      <button onClick={(e) => handleClick(e.target.name)}>/</button>
      <button onClick={(e) => handleClick(e.target.name)}>*</button>
      <button onClick={(e) => handleClick(e.target.name)}>-</button>
      <br />
      <button onClick={(e) => handleClick(e.target.name)}>7</button>
      <button onClick={(e) => handleClick(e.target.name)}>8</button>
      <button onClick={(e) => handleClick(e.target.name)}>6</button>
      <br />
      <button onClick={(e) => handleClick(e.target.name)}>4</button>
      <button onClick={(e) => handleClick(e.target.name)}>5</button>
      <button onClick={(e) => handleClick(e.target.name)}>6</button>
      <br />
      <button onClick={(e) => handleClick(e.target.name)}>1</button>
      <button onClick={(e) => handleClick(e.target.name)}>2</button>
      <button onClick={(e) => handleClick(e.target.name)}>3</button>
      <br />
      <button onClick={(e) => handleClick(e.target.name)}>0</button>
      <button onClick={(e) => handleClick(e.target.name)}>=</button>
      <button onClick={(e) => handleClick(e.target.name)}>+</button>
      <br />
      <button onClick={(e) => handleClick(e.target.name)}>Clear</button>
    </>
  );
};
