import { PaletteOptions } from "@mui/material";

export const lightPalette: PaletteOptions = {
  mode: "light",
  primary: { main: "#3e3e63" },
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
    default: "#121212",
    paper: "#1e1e1e",
  },
  text: {
    primary: "#fff",
    secondary: "#bbb",
  },
  divider: "#444",
};
