import { PaletteOptions } from "@mui/material";

export const lightPalette: PaletteOptions = {
  mode: "light",
  primary: { main: "#0077b6" },
  secondary: { main: "#333" },
  background: {
    default: "#f9f9f9",
    paper: "#ffffff",
  },
  text: {
    primary: "#111",
    secondary: "#555",
  },
  divider: "#ddd",
};

export const darkPalette: PaletteOptions = {
  mode: "dark",
  primary: { main: "#0077b6" },
  secondary: { main: "#3e9" },
  background: {
    default: "#161616",
    paper: "#1C1C1C",
  },
  text: {
    primary: "#fff",
    secondary: "#bbb",
  },
  divider: "#3e3f3f",
};
