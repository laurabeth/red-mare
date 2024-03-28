import { PaletteOptions, Shadows, ThemeOptions } from "@mui/material/styles";

export const themeOptions: (mode: "light" | "dark") => ThemeOptions = (
  mode
) => ({
  components: {
    MuiButton: {
      styleOverrides: {
        textPrimary: ({ theme }) => theme.palette.info.main,
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#2E3B44",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        color: "secondary",
        variant: "standard",
      },
    },
  },
  mode,
  palette: mode == "light" ? lightPalette : darkPalette,
  shadows: Array(25).fill("none") as Shadows,
  typography: {
    h1: {
      color: "#B1492F",
    },
    h2: {
      color: "#273E47",
    },
  },
});

const darkPalette: PaletteOptions = {};
const lightPalette: PaletteOptions = {
  background: {
    default: "#f9f7ec",
  },
  error: {
    // burgundy
    dark: "#6D001B",
    light: "#B6002E",
    main: "#721121",
  },
  info: {
    // vanilla
    dark: "#ECD477",
    light: "#F5E8B6",
    main: "#E1D89F",
  },
  primary: {
    // charcoal
    dark: "#2E3B44",
    light: "#4C616F",
    main: "#273E47",
  },
  secondary: {
    // rust
    dark: "#9F380C",
    light: "#E25011",
    main: "#B1492F",
  },
  success: {
    // dark slate gray
    dark: "#294444",
    light: "#447272",
    main: "#384D48",
  },
  warning: {
    // pumpkin
    dark: "#F06000",
    light: "#FF893A",
    main: "#F0803C",
  },
};
