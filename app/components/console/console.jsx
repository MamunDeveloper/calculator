import React, { useState } from "react";
import styles from "./console.module.css";

function Console({ mode, consoleValue, result }) {
  const consoleClassName = `${styles.console} ${styles[mode]}`;
  const inpClassName = `${styles.inp} ${styles[mode]}`;

  return (
    <div className={consoleClassName}>
      <input
        className={inpClassName}
        value={consoleValue}
        onChange={() => console.log("Value changed")}
        type="text"
        name=""
        id=""
      />

      <p className={styles.result}>{result}</p>
    </div>
  );
}

export default Console;
