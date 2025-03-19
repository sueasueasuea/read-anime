"use client";

import { createTheme, MantineColorsTuple } from "@mantine/core";
import { mali } from "./public/fonts/Mali/Mali";
const myColor: MantineColorsTuple = [
  "#f5f9e9",
  "#eaefdd",
  "#d5dcbe",
  "#bec89b",
  "#aab77e",
  "#9ead6b",
  "#97a860",
  "#83934f",
  "#738244",
  "#627135",
];
export const theme = createTheme({
  colors: {
    myColor,
  },
  fontFamily: mali.style.fontFamily,
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  autoContrast: true,
  primaryColor: "myColor",
  primaryShade: 6
});
