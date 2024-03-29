import ReactDOM from "react-dom/client";

import { GraphQlProvider } from "./components/GraphQlProvider/GraphQlProvider";
import { RouterProvider } from "./components/RouterProvider/RouterProvider";

import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GraphQlProvider>
    <RouterProvider />
  </GraphQlProvider>
);
