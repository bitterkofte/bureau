// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./pages/routes.jsx";
import "./index.css";
import "./i18n.js";

const router = createBrowserRouter(routes, { basename: "/" });

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  // <App />
  <RouterProvider router={router} basename="/" />
  // </StrictMode>,
);
