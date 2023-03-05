import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <nav className={styles.header}>
      <h3>English Learning Games</h3>
      <div className={styles.menu}>
        <h3>Students</h3>
        <h3>Teachers</h3>
        <h3>About</h3>
        <h3>Contact</h3>
      </div>
    </nav>
  );
}
