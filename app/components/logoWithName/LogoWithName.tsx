import React from "react";
import styles from "./LogoWithName.module.css";
import Image from "next/image";
import { Text } from "@mantine/core";
import ReadOne from "../../../public/ReadOne.png";

const LogoWithName = () => {
  return (
    <div className={`${styles.logoContainer}`}>
      <Image
        src={ReadOne}
        className={`${styles.logo}`}
        alt="logo"
        width={32}
        height={32}
      />
      <Text fz={"h3"}>Read One</Text>
    </div>
  );
};

export default LogoWithName;
