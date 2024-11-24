import Logo1 from "../../assets/logo3.svg";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import useInView from "../../hooks/useInView";
import MyLink from "../Elements/MyLink";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const introRef = useInView();
  const { t } = useTranslation();

  return (
    // formal: bg-slate-400 dark:bg-slate-700
    <footer className="w-full bg-lp-brown dark:bg-lp-brown-darker bg-[url('/src/assets/backgrounds/lp-bureau-bg-m.svg')] lg:bg-[url('/src/assets/backgrounds/lp-bureau-bg-5.svg')] bg-cover text-slate-200">
      <div
        className="px-16 lg:px-24 py-16 flex flex-col items-center lg:flex-row lg:items-start gap-10 xl:gap-24 text-intro"
        ref={introRef}
      >
        {/* PIN 1st GRP */}
        <div className="w-60 flex flex-col gap-3">
          <img
            className="min-w-52 w-full h-auto bg-white p-3 rounded-xl select-none"
            src={Logo1}
            alt="logo"
          />
          <p className="text-center font-bold tracking-wider">
            {t("buro").toUpperCase()}
          </p>
          <div className="flex justify-between items-center">
            <a
              href=""
              className="p-3 bg-lp-brown rounded-lg hover:bg-lp-brown-dark transition-[background-color] duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href=""
              className="p-3 bg-lp-brown rounded-lg hover:bg-lp-brown-dark transition-[background-color] duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href=""
              className="p-3 bg-lp-brown rounded-lg hover:bg-lp-brown-dark transition-[background-color] duration-300"
            >
              <FaXTwitter />
            </a>
            <a
              href=""
              className="p-3 bg-lp-brown rounded-lg hover:bg-lp-brown-dark transition-[background-color] duration-300"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* PIN 2nd GRP */}
        <div className="flex flex-col lg:flex-row justify-between grow gap-10 lg:gap-16">
          {/* SECTION 2nd Col */}
          <div className="max-w-48 flex flex-col gap-2 lg:gap-4 2xl:gap-2">
            <h3 className="text-xl font-bold">{t("navbar.kurumsal")}</h3>
            <MyLink to={"/"}>{t("navbar.anasayfa")}</MyLink>
            <MyLink to={"/hakkimizda"}>{t("navbar.hakkimizda")}</MyLink>
            <MyLink to={"/neden-petek-ve-leblebici"}>
              {t("navbar.nedenPL")}
            </MyLink>
            <MyLink to={"/sikca-sorulan-sorular"}>{t("navbar.sss")}</MyLink>
          </div>

          {/* SECTION 3rd Col */}
          <div className="max-w-48 flex flex-col gap-2 lg:gap-4 2xl:gap-2">
            <h3 className="text-xl font-bold">{t("navbar.hukuk")}</h3>
            <MyLink to={"/sigorta-hukuku"}>{t("navbar.sigortaH")}</MyLink>
            <MyLink to={"/hukuki-danismanlik"}>{t("navbar.hukukiD")}</MyLink>
          </div>

          {/* SECTION 4th Col */}
          <div className="max-w-48 flex flex-col gap-2 lg:gap-4 2xl:gap-2">
            <h3 className="text-xl font-bold">{t("navbar.hizmetler")}</h3>
            <MyLink to={"/onleyici-hukuk-hizmetleri"}>
              {t("navbar.onleyiciHH")}
            </MyLink>
            <MyLink to={"/uzlastirma-ve-arabuluculuk-hizmetleri"}>
              {t("navbar.uzlastirmaAH")}
            </MyLink>
            <MyLink to={"/kvkk-ve-gdpr-hukuki-danismanlik"}>
              {t("navbar.kGHD")}
            </MyLink>
          </div>

          {/* SECTION 5th Col */}
          <div className="max-w-56 flex flex-col gap-2 lg:gap-4 2xl:gap-2">
            <h3 className="text-xl font-bold">{t("navbar.iletisimB")}</h3>
            <a
              href="https://maps.app.goo.gl/FtXCg8qBD8bpc5NE6"
              target="_blank"
              className="text-neutral-300 hover:text-neutral-50"
            >
              Eğitim Mahallesi Ahsen Çıkmazı Sokak Sadıkoğlu İş Merkezi 1 No:10
              Kat:1 Daire:21 Kadıköy/İST
            </a>
            <a
              href="tel:+905072644080"
              className="text-neutral-300 hover:text-neutral-50 lg:text-xs xl:text-base"
            >
              +90 507 264 40 80
            </a>
            <a
              href="mailto:info@petekleblebicihukuk.com"
              className="text-neutral-300 hover:text-neutral-50 lg:text-xs xl:text-base"
            >
              info@petekleblebicihukuk.com
            </a>
          </div>
        </div>
      </div>
      <div className="h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
      <div className="p-4 flex justify-center items-center">
        <p>&#169; 2024 {t("content.anasayfa.haklar")}</p>
      </div>
    </footer>
  );
};
export default Footer;
