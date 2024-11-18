import { useTranslation } from "react-i18next";
import MyLink from "../Elements/MyLink";

const MobileMenu = () => {
  const { t } = useTranslation();
  return (
    <div className="fixed top-0 left-0 px-20 pt-20 w-full h-screen flex flex-col gap-3  animate-mobileMenuDown animate-mobileMenuUp bg-lp-brown-d2 text-white">
      {/* SECTION 1st Col */}
      <div className="max-w-52">
        <h3 className="text-lg font-bold">{t("navbar.kurumsal")}</h3>
        <div className="ml-3 flex flex-col gap-2">
          <MyLink to={"/"}>{t("navbar.anasayfa")}</MyLink>
          <MyLink to={"/hakkimizda"}>{t("navbar.hakkimizda")}</MyLink>
          <MyLink to={"/neden-petek-ve-leblebici"}>
            {t("navbar.nedenPL")}
          </MyLink>
          <MyLink to={"/sikca-sorulan-sorular"}>{t("navbar.sss")}</MyLink>
        </div>
      </div>

      {/* SECTION 2nd Col */}
      <div className="max-w-52 content-start">
        <h3 className="text-lg font-bold">{t("navbar.hukuk")}</h3>
        <div className="ml-3 flex flex-col gap-2">
          <MyLink to={"/sigorta-hukuku"}>{t("navbar.sigortaH")}</MyLink>
          <MyLink to={"/hukuki-danismanlik"}>{t("navbar.hukukiD")}</MyLink>
        </div>
      </div>

      {/* SECTION 3rd Col */}
      <div className="max-w-52">
        <h3 className="text-lg font-bold">{t("navbar.hizmetler")}</h3>
        <div className="ml-3 flex flex-col gap-2">
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
      </div>

      {/* SECTION 4th Col */}
      <div className="max-w-52 text-white font-bold">
        <MyLink to={"/iletisim"}>{t("navbar.iletisim")}</MyLink>
      </div>
    </div>
  );
};
export default MobileMenu;
