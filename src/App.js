import { useState } from "react";
import { Calculator } from "./Component/Calculator";
import { Result } from "./Component/Result";
import "./styles.css";

export default function App() {
  const [result, setResult] = useState("");

  const handleClick = (button) => {
    if (button === "=") {
      calculate();
    } else if (button === "clear") {
      setResult(() => "");
    }
  };

  const calculate = () => {
    let check = "";
    if (result.includes("--")) {
      check = result.replace("--", "+");
    } else {
      check = result;
    }

    try {
      setResult(() => {
        (eval(check) || "") + "";
      });
    } catch (error) {
      console.log(error);
    }
  };
  console.log(result);
  return (
    <div className="App">
      <Result result={result} />
      <Calculator handleClick={handleClick} />
    </div>
  );
}
