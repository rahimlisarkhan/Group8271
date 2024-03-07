import React, { useState } from "react";

// const arr = ["123", "+", "24", "/", "344"];

function Calc({ title }) {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");

  // const [selectOperator, setSelectOperator] = useState(false);
  const [operator, setOperator] = useState("");

  const [result, setResult] = useState("");

  console.log("firstNumber", firstNumber);
  console.log("secondNumber", secondNumber);

  // document.body.style.background = "red";

  // const handleChange = (e) => {
  //   const value = e.target.value;

  //   if (selectOperator == false) {
  //     setFirstNumber(value);
  //   } else {
  //     setSecondNumber(value);
  //   }
  // };

  const handleNumber = (value) => {
    if (operator == "") {
      setFirstNumber(function (evelkiAyazinValue) {
        return evelkiAyazinValue + value;
      });
    } else {
      setSecondNumber((prev) => prev + value);
    }
  };

  const handleOperator = (o) => {
    // setSelectOperator(true);
    setOperator(o);
  };

  const handleClear = () => {
    setResult("");
    setFirstNumber("");
    setSecondNumber("");
    setOperator("");
    setSelectOperator(false);
  };

  const handleResult = () => {
    if (operator == "+") {
      const total = parseInt(firstNumber) + parseInt(secondNumber);
      setResult(total);
    } else if (operator == "-") {
      const total = firstNumber - secondNumber;
      setResult(total);
    } else if (operator == "*") {
      const total = firstNumber * secondNumber;
      setResult(total);
    } else if (operator == "/") {
      const total = firstNumber / secondNumber;
      setResult(total);
    }
  };

  return (
    <div>
      <h1>{title}</h1>
      <div>
        <h4>{firstNumber}</h4>
        <h4>{operator}</h4>
        <h4>{secondNumber}</h4>
        <h2> ={result}</h2>
      </div>

      {/* <input onChange={handleChange} /> */}
      <div>
        <button onClick={() => handleNumber("0")}>0</button>
        <button onClick={() => handleNumber("1")}>1</button>
        <button onClick={() => handleNumber("2")}>2</button>
        <button onClick={() => handleNumber("3")}>3</button>
        <br />
        <button onClick={() => handleNumber("4")}>4</button>
        <button onClick={() => handleNumber("5")}>5</button>
        <button onClick={() => handleNumber("6")}>6</button>
        <button onClick={() => handleNumber("7")}>7</button>
        <br />
        <button onClick={() => handleNumber("8")}>8</button>
        <button onClick={() => handleNumber("9")}>9</button>
        <button onClick={handleResult}>=</button>
        <button onClick={handleClear}>C</button>
        <hr />
        <button onClick={() => handleOperator("+")}>+</button>
        <button onClick={() => handleOperator("-")}>-</button>
        <button onClick={() => handleOperator("*")}>*</button>
        <button onClick={() => handleOperator("/")}>/</button>
      </div>
    </div>
  );
}

export default Calc;
