import React from "react";
import { useState } from "react";
import { digits, oprators } from "./calculatorDigits";
export default function Calculator() {
  const [isClicked, setIsClicked] = useState(false);
  const [values, setValues] = useState({
    num1: 0,
    num2: 0,
    total: null,
  });
  const [operate, setOperate] = useState(null);
  const handleValues = (e) => {
    e.preventDefault();
    const { value } = e.target;
    isClicked === false
      ? setValues({ ...values, num1: values.num1 + value })
      : setValues({ ...values, num2: values.num2 + value });
  };
  const handleResult = (e) => {
    e.preventDefault();
    console.log(values.num1, values.num2);
    let tempRes = 0;
    if (operate === "+") {
      tempRes = parseInt(values.num1) + parseInt(values.num2);
    } else if (operate === "-") {
      tempRes = parseInt(values.num1) - parseInt(values.num2);
    } else if (operate === "/") {
      tempRes = parseInt(values.num1) / parseInt(values.num2);
    } else if (operate === "*") {
      tempRes = parseInt(values.num1) * parseInt(values.num2);
    } else {
      tempRes = 0;
    }
    setValues({ ...values, total: tempRes });
  };
  const handleOperation = (e) => {
    e.preventDefault();
    setIsClicked(true);
    setOperate(e.target.value);
  };
  const handleCancel = () => {
    setValues({ num1: 0, num2: 0, total: null });
  };
  return (
    <div>
      <div className="container">
        <form action="" name="calc" className="calculator">
          {!values.total ? (
            <input
              type="number"
              className="value"
              name="txt"
              value={isClicked === false ? values.num1 : values.num2}
              readOnly
            />
          ) : (
            <input
              type="number"
              className="value"
              name="txt"
              value={values.total}
              readOnly
            />
          )}

          <button className="num clear" onClick={handleCancel}>
            <i>C</i>
          </button>
          {digits.map((digit, index) => (
            <button
              key={index}
              className="num"
              onClick={handleValues}
              value={digit}
            >
              <i>{digit}</i>
            </button>
          ))}
          {oprators.map((oprator, index) => (
            <button
              key={index}
              className="num"
              onClick={handleOperation}
              value={oprator}
            >
              <i>{oprator}</i>
            </button>
          ))}
          <button className="num equal clear" onClick={handleResult}>
            <i>=</i>
          </button>
        </form>
      </div>
    </div>
  );
}
