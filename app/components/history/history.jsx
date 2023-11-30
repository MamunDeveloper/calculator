import React from "react";
import styles from "./history.module.css"

function History({history}) {
  return (
    <>
      <h2 className={styles.heading}>History</h2>
      <div className={styles.historys}>
        {history.map((value, index) => (
          <p key={index + 1}>{value}</p>
        ))}
      </div>
    </>
  );
}

export default History;
