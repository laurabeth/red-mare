import { FC } from "react";
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import { SiteHeader } from "./components/SiteHeader/SiteHeader";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";
import { ColorModeContextProvider } from "./contexts/ColorMode/ColorModeContext";

export const Layout: FC = () => {
  return (
    <ColorModeContextProvider>
      <ThemeProvider>
        <CssBaseline />
        <SiteHeader />
        <Outlet />
      </ThemeProvider>
    </ColorModeContextProvider>
  );
};
