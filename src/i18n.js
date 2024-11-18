import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  tr: {
    translation: {
      anasayfa: "Anasayfa",
      navbar: {
        anasayfa: "Anasayfa",
        kurumsal: "Kurumsal",
        hakkimizda: "Hakkımızda",
        nedenPL: "Neden Petek & Leblebici",
        sss: "Sıkça Sorulan Sorular",
        hukuk: "Hukuk",
        sigortaH: "Sigorta Hukuku",
        hukukiD: "Hukuki Danışmanlık",
        hizmetler: "Hizmetler",
        onleyiciHH: "Önleyici Hukuk Hizmetleri",
        uzlastirmaAH: "Uzlaştırma ve Arabuluculuk Hizmetleri",
        kGHD: "KVKK ve GDPR Hukuki Danışmanlık",
        iletisim: "İletişim",
      },
    },
  },
  en: {
    translation: {
      anasayfa: "Homepage",
      navbar: {
        anasayfa: "Homepage",
        kurumsal: "Corporate",
        hakkimizda: "About Us",
        nedenPL: "Why Petek & Leblebici",
        sss: "Frequently Asked Questions",
        hukuk: "Law",
        sigortaH: "Insurance Law",
        hukukiD: "Legal Consultancy",
        hizmetler: "Services",
        onleyiciHH: "Preventive Legal Services",
        uzlastirmaAH: "Mediation and Arbitration Services",
        kGHD: "KVKK and GDPR Legal Consultancy",
        iletisim: "Contact",
      },
    },
  },
};

i18n.use(initReactI18next).init({ lng: "tr", resources });

export default i18n;
