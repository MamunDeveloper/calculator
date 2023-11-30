"use client";
import styles from "./page.module.css";
import Calculator from "./components/calculator/calculator";
import { useState } from "react";

export default function Home() {
  const [mode, setMode] = useState("light_mode");

  const toggleMode = () => {
    mode === "light_mode" ? setMode("dark_mode") : setMode("light_mode");
  };

  return (
    <main className={styles.main}>
      <Calculator mode={mode} toggleMode={toggleMode}></Calculator>
    </main>
  );
}
