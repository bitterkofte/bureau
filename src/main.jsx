// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Hakkimizda from "./pages/Kurumsal/Hakkimizda.jsx";
import NedenPetekLeblebici from "./pages/Kurumsal/NedenPetekLeblebici.jsx";
import SigortaHukuku from "./pages/Hukuk/SigortaHukuku.jsx";
import HukukiDanismanlik from "./pages/Hukuk/HukukiDanismanlik.jsx";
import Iletisim from "./pages/Iletisim.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/hakkimizda",
        element: <Hakkimizda />,
      },
      {
        path: "/neden-petek-ve-leblebici",
        element: <NedenPetekLeblebici />,
      },
      {
        path: "/sigorta-hukuku",
        element: <SigortaHukuku />,
      },
      {
        path: "/hukuki-danismanlik",
        element: <HukukiDanismanlik />,
      },
      {
        path: "/iletisim",
        element: <Iletisim />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  // <App />
  <RouterProvider router={router} />
  // </StrictMode>,
);
