import localFont from "next/font/local";

export const agrandir = localFont({
  variable: "--font-agrandir",
  display: "swap",
  src: [
    {
      path: "./fonts/agrandir/Agrandir-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/agrandir/Agrandir-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const graphik = localFont({
  variable: "--font-graphik",
  display: "swap",
  src: [
    {
      path: "./fonts/graphik/GraphikRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/graphik/GraphikMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/graphik/GraphikSemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/graphik/GraphikBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});
