import React from "react";
import styles from "./Header.module.css";

import Image from "next/image";
import ReadOne from "../../../public/ReadOne.png";
import ColorSchemeToggle from "../colorSchemeToggle/ColorSchemeToggle";
import { Text } from "@mantine/core";

const Header = () => {
  return (
    <div className={`${styles.header}`}>
      <div className={`${styles.content}`}>
        <Image
          src={ReadOne}
          className={`${styles.logo}`}
          alt="logo"
          width={32}
          height={32}
        />
        <Text fz={"h1"}>Read One</Text>
        <ColorSchemeToggle />
      </div>
    </div>
  );
};

export default Header;
