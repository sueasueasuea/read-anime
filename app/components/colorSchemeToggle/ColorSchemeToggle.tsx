"use client";

import { ActionIcon, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import styles from "./ColorSchemeToggle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import cx from 'clsx'

const ColorSchemeToggle = () => {
  const {  setColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <ActionIcon
      variant="default"
      size="lg"
      aria-label="Toggle color scheme"
      onClick={()=>setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
    >
      {computedColorScheme === "dark" ? (
        <FontAwesomeIcon icon={faSun} className={cx(`${styles.light}`,`${styles.icon}`)}/>
      ) : (
        <FontAwesomeIcon icon={faMoon} className={cx(`${styles.dark}`,`${styles.icon}`)}/>
      )}
    </ActionIcon>
  );
};
export default ColorSchemeToggle;
