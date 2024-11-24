import PageLayout from "../../components/Layout/PageLayout";
import highImg from "../../assets/lazyLoad/bookshelves-high.jpg";
import lowImg from "../../assets/lazyLoad/bookshelves-low.jpg";
import { useTranslation } from "react-i18next";

const SigortaHukuku = () => {
  const { t } = useTranslation();
  return (
    <PageLayout
      heading={t("navbar.sigortaH")}
      highImg={highImg}
      lowImg={lowImg}
      navigation={[
        t("navbar.anasayfa"),
        t("navbar.hizmetler"),
        t("navbar.sigortaH"),
      ]}
    >
      {t("content.hukuk.sigortaH")}
    </PageLayout>
  );
};
export default SigortaHukuku;
