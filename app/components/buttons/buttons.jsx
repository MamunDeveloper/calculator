import React from "react";
import styles from "./buttons.module.css";

function Buttons({
  mode,
  updateConsole,
  deleteNumber,
  clearConsole,
  calculate,
}) {
  const containerClassName = `${styles.container} ${styles[mode]}`;
  const buttonsClass = `${styles.buttons}`;
  const numberButtonsClass = `${styles.buttons} ${styles.number_button} `;

  return (
    <div className={containerClassName}>
      <button className={buttonsClass} onClick={clearConsole}>
        C
      </button>
      <button className={buttonsClass} onClick={deleteNumber}>
        DE
      </button>
      <button className={buttonsClass} onClick={() => updateConsole("%")}>
        %
      </button>
      <button className={buttonsClass} onClick={() => updateConsole("/")}>
        /
      </button>

      <button className={numberButtonsClass} onClick={() => updateConsole("7")}>
        7
      </button>
      <button className={numberButtonsClass} onClick={() => updateConsole("8")}>
        8
      </button>
      <button className={numberButtonsClass} onClick={() => updateConsole("9")}>
        9
      </button>
      <button className={buttonsClass} onClick={() => updateConsole("*")}>
        x
      </button>

      <button className={numberButtonsClass} onClick={() => updateConsole("4")}>
        4
      </button>
      <button className={numberButtonsClass} onClick={() => updateConsole("5")}>
        5
      </button>
      <button className={numberButtonsClass} onClick={() => updateConsole("6")}>
        6
      </button>
      <button className={buttonsClass} onClick={() => updateConsole("-")}>
        -
      </button>

      <button className={numberButtonsClass} onClick={() => updateConsole("1")}>
        1
      </button>
      <button className={numberButtonsClass} onClick={() => updateConsole("2")}>
        2
      </button>
      <button className={numberButtonsClass} onClick={() => updateConsole("3")}>
        3
      </button>
      <button className={buttonsClass} onClick={() => updateConsole("+")}>
        +
      </button>

      <button className={numberButtonsClass} onClick={() => updateConsole("0")}>
        0
      </button>
      <button className={buttonsClass} onClick={() => updateConsole(".")}>
        .
      </button>

      <button className={buttonsClass} onClick={() => updateConsole("00")}>
        00
      </button>

      <button className={buttonsClass} onClick={calculate}>
        =
      </button>
    </div>
  );
}

export default Buttons;
