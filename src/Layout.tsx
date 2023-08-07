import { FC } from "react";
import { Outlet } from "react-router-dom";

import { SiteHeader } from "./components/SiteHeader/SiteHeader";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";

export const Layout: FC = () => {
  return (
    <ThemeProvider>
      <SiteHeader />
      <Outlet />
    </ThemeProvider>
  );
};
