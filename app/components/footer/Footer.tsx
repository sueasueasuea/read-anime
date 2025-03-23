import React from "react";
import styles from "./Footer.module.css";
import LogoWithName from "../logoWithName/LogoWithName";
import { Divider } from '@mantine/core';

const Footer = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.content}`}>
        <LogoWithName />
        <Divider my="sm" c={"red"} />
        <p>© 2025 Read One. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
