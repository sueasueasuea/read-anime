import localFont from "next/font/local";

export const mali = localFont({
  src: [
    {
      path: "./Mali-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Mali-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Mali-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});
