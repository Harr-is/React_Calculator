import React, { useState } from "react";
import { evaluate } from "mathjs";
import "../App.css";
import Head from "./Head";

const Calculator = () => {
  const [Ans, setAns] = useState("0");
  const [LFT, setLFT] = useState("");
  let Answer = " ";

  function Checker(LFT) {
    return LFT.includes("(");
  }
  function Input(value) {
    if (Ans !== "0" && LFT === "") {
      console.log("In First");
      setLFT(Ans.toString());
    }

    if (value === "<x") {
      setLFT((prevLFT) => prevLFT.slice(0, -1));
      return;
    }

    let temp = value;

    if (temp === "AC") {
      setAns("0");
      setLFT("");
      Answer = "";
      return;
    }

    if (temp === "()") {
      if (LFT === "" || !Checker(LFT)) {
        temp = "(";
      } else {
        console.log("In (");
        temp = ")";
      }
    }

    if (LFT === "") {
      console.log("In Empty One");
      setLFT((prevLFT) => prevLFT + temp);
      console.log("Value of LFT in empty: " + LFT);
      //setLFT(temp);
    } else {
      console.log("Here in not empty one");
      setLFT((prevLFT) => prevLFT + temp);
      console.log("Value of LFT in not empty: " + LFT);
    }

    if (
      temp === "+" ||
      temp === "-" ||
      temp === "*" ||
      temp === "/" ||
      temp === "="
    ) {
      var operator = temp;
    }

    if (operator === "=") {
      setLFT((prevLFT) => prevLFT.slice(0, -1));
      Answer = Answer.concat(LFT);
      setLFT("");
      try {
        setAns(evaluate(Answer));
      } catch (error) {
        setAns("Error");
      }
    }
  }

  return (
    <>
      <div className="calculator_container">
        <div className="calculator">
          <div className="screens">{Ans}</div>
          <div className="screens" id="Updating">
            {LFT}
          </div>
          <div className="input-container">
            <div className="inputs">
              <input
                className="buttons"
                id="clear"
                type="button"
                onClick={() => {
                  Input("AC");
                }}
                value={"AC"}
              />
              <input
                className="buttons"
                type="button"
                onClick={() => {
                  Input("(-");
                }}
                value={"+/-"}
              />
              <input
                className="buttons"
                type="button"
                onClick={() => {
                  Input("()");
                }}
                value={"()"}
              />
              <input
                className="buttons"
                type="button"
                onClick={() => {
                  Input("/");
                }}
                value={"/"}
              />
            </div>
            <div className="inputs">
              <input
                className="buttons"
                type="button"
                onClick={() => {
                  Input("7");
                }}
                value={"7"}
              />
              <input
                className="buttons"
                type="button"
                onClick={() => {
                  Input("8");
                }}
                value={"8"}
              />
              <input
                className="buttons"
                type="button"
                onClick={() => {
                  Input("9");
                }}
                value={"9"}
              />
              <input
                className="buttons"
                id="operator"
                type="button"
                onClick={() => {
                  Input("*");
                }}
                value={"x"}
              />
            </div>
            <div className="inputs">
              <input
                className="buttons"
                type="button"
                onClick={() => {
                  Input("4");
                }}
                value={"4"}
              />
              <input
                className="buttons"
                type="button"
                onClick={() => {
                  Input("5");
                }}
                value={"5"}
              />
              <input
                className="buttons"
                type="button"
                onClick={() => {
                  Input("6");
                }}
                value={"6"}
              />
              <input
                className="buttons"
                id="operator"
                type="button"
                onClick={() => {
                  Input("-");
                }}
                value={"-"}
              />
            </div>
            <div className="inputs">
              <input
                className="buttons"
                type="button"
                onClick={() => {
                  Input("1");
                }}
                value={"1"}
              />
              <input
                className="buttons"
                type="button"
                onClick={() => {
                  Input("2");
                }}
                value={"2"}
              />
              <input
                className="buttons"
                type="button"
                onClick={() => {
                  Input("3");
                }}
                value={"3"}
              />
              <input
                className="buttons"
                id="operator"
                type="button"
                onClick={() => {
                  Input("+");
                }}
                value={"+"}
              />
            </div>
            <div className="inputs">
              <input
                className="buttons"
                type="button"
                onClick={() => {
                  Input("0");
                }}
                value={"0"}
              />
              <input
                className="buttons"
                type="button"
                onClick={() => {
                  Input(".");
                }}
                value={"."}
              />
              <input
                className="buttons"
                id="Equal"
                type="button"
                onClick={() => {
                  Input("=");
                }}
                value={"="}
              />

              <input
                className="buttons"
                type="button"
                onClick={() => {
                  Input("<x");
                }}
                value={"<x"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
