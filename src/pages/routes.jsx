import Layout from "../components/Layout/Layout";
import KVKK from "./Hizmetler/KVKK";
import Onleyici from "./Hizmetler/Onleyici";
import Uzlastirma from "./Hizmetler/Uzlastirma";
import HomePage from "./HomePage";
import HukukiDanismanlik from "./Hukuk/HukukiDanismanlik";
import SigortaHukuku from "./Hukuk/SigortaHukuku";
import Iletisim from "./Iletisim";
import Hakkimizda from "./Kurumsal/Hakkimizda";
import NedenPetekLeblebici from "./Kurumsal/NedenPetekLeblebici";
import NotFoundPage from "./NotFoundPage";

export const routes = [
  {
    path: "/",
    element: <Layout />,
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
      {
        path: "/onleyici-hukuk-hizmetleri",
        element: <Onleyici />,
      },
      {
        path: "/uzlastirma-ve-arabuluculuk-hizmetleri",
        element: <Uzlastirma />,
      },
      {
        path: "/kvkk-ve-gdpr-hukuki-danismanlik",
        element: <KVKK />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
