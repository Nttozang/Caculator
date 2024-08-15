"use client";
import React from "react";
import "./globals.css";
import { useState } from "react";

type Operation = "+" | "-" | "*" | "/" | "%";

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState<string>(""); //เก็บค่าปัจจุบัน
  const [prevValue, setPrevValue] = useState<string>(""); //เก็บค่าก่อนหน้า
  const [operation, setOperation] = useState<Operation | null>(null); //เก็บตัวดำเนินการทางคณิต

  const handleClick = (value: string) => {
    setDisplayValue((prev) => prev + value);
  };

  const decimalClick = (dot: string) => {
    setDisplayValue(displayValue + dot);
  };

  const clearClick = () => {
    setDisplayValue("");
    setOperation(null);
    setPrevValue("");
  };

  const handleOperationClick = (op: Operation) => {
    setPrevValue(displayValue);
    setDisplayValue("");
    setOperation(op);
  };

  const addClick = () => handleOperationClick("+");
  const subtractClick = () => handleOperationClick("-");
  const multiplyClick = () => handleOperationClick("*");
  const divideClick = () => handleOperationClick("/");
  const percentClick = () => handleOperationClick("%");

  const resultClick = () => {
    const num1 = parseFloat(prevValue);
    const num2 = parseFloat(displayValue);

    let result: number | string;
    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          setDisplayValue("Cannot divide by zero");
          return;
        }
        result = num1 / num2;
        break;
      case "%":
        result = num1 % num2;
        break;
      default:
        setDisplayValue("Invalid Operation");
        return;
    }
    console.log(result);
    setDisplayValue(result.toFixed(1));
  };

  return (
    <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 py-5">
      <div
        className="w-full mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden"
        style={{ maxWidth: "300px" }}
      >
        <div className="w-full h-40 bg-gradient-to-b from-gray-800 to-gray-700 flex items-end text-right">
          <div className="w-full py-5 px-6 text-6xl text-white font-thin">
            {displayValue}
          </div>
        </div>
        <div className="w-full bg-gradient-to-b from-indigo-400 to-indigo-500">
          <div className="flex w-full">
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light"
                onClick={clearClick}
              >
                C
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                onClick={handleClick}
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light"
              >
                +/-
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                onClick={percentClick}
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light"
              >
                %
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                onClick={divideClick}
                className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-2xl font-light"
              >
                ÷
              </button>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                onClick={() => handleClick("7")}
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                7
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                onClick={() => handleClick("8")}
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                8
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                onClick={() => handleClick("9")}
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                9
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                onClick={multiplyClick}
                className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light"
              >
                ⨉
              </button>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                onClick={() => handleClick("4")}
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                4
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                onClick={() => handleClick("5")}
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                5
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                onClick={() => handleClick("6")}
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                6
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                onClick={subtractClick}
                className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light"
              >
                -
              </button>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                onClick={() => handleClick("1")}
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                1
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                onClick={() => handleClick("2")}
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                2
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                onClick={() => handleClick("3")}
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                3
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                onClick={addClick}
                className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/4 border-r border-indigo-400">
              <button
                onClick={() => handleClick("0")}
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                0
              </button>
            </div>
            <div className="w-1/4 border-r border-indigo-400">
              <button
                onClick={() => decimalClick(".")}
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                .
              </button>
            </div>
            <div className="w-2/4 border-r border-indigo-400">
              <button
                onClick={resultClick}
                className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-30 hover:bg-opacity-40 text-white text-xl font-light"
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
