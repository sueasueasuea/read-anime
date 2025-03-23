import React from "react";
import styles from "./Header.module.css";
import ColorSchemeToggle from "../colorSchemeToggle/ColorSchemeToggle";

import LogoWithName from "../logoWithName/LogoWithName";

const Header = () => {
  return (
    <div className={`${styles.header}`}>
      <div className={`${styles.content}`}>
        <LogoWithName />
        <ColorSchemeToggle />
      </div>
    </div>
  );
};

export default Header;
