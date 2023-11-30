import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import styles from "./calculator.module.css";
import Console from "../console/console";
import Buttons from "../buttons/buttons";
import History from "../history/history";

function Calculator({ mode, toggleMode }) {
  const calculatorClassName = `${styles.calculator} ${styles[mode]}`;

  const [consoleValue, setConsoleValues] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const updateConsole = (value) => {
    setConsoleValues(consoleValue + value);
  };
  const deleteNumber = () => {
    setConsoleValues(consoleValue.slice(0, -1));
  };
  const clearConsole = () => {
    setConsoleValues("");
    setResult("");
  };

  const calculate = () => {
    const result = eval(consoleValue);
    setResult(result);

    const newHistory = [...history, result];
    setHistory(newHistory);
  };

  return (
    <div className={calculatorClassName}>
      <div className={styles.main_box}>
        <Navbar mode={mode} toggleMode={toggleMode}></Navbar>
        <Console
          mode={mode}
          consoleValue={consoleValue}
          result={result}
        ></Console>
        <Buttons
          mode={mode}
          updateConsole={updateConsole}
          deleteNumber={deleteNumber}
          clearConsole={clearConsole}
          calculate={calculate}
        ></Buttons>
      </div>

      <div className={styles.histroy_box}>
        <History history={history}></History>
      </div>
    </div>
  );
}

export default Calculator;
