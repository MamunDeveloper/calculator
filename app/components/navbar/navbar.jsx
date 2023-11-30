"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import styles from "./navbar.module.css";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

function Navbar({ mode, toggleMode }) {
  const navbarClassName = `${styles.navbar} ${styles[mode]}`;

  const handleMode = () => {
    toggleMode();
  };

  return (
    <div className={navbarClassName}>
      <FontAwesomeIcon
        icon={mode === "light_mode" ? faMoon : faSun}
        className={styles.mode_icon}
        onClick={handleMode}
      ></FontAwesomeIcon>
      <p>{mode === "light_mode" ? "dark mood" : "light mood"}</p>
    </div>
  );
}

export default Navbar;
