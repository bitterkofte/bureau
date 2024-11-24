import PageLayout from "../../components/Layout/PageLayout";
import highImg from "../../assets/lazyLoad/bookshelves-high.jpg";
import lowImg from "../../assets/lazyLoad/bookshelves-low.jpg";
import { useTranslation } from "react-i18next";

const KVKK = () => {
  const { t } = useTranslation();

  return (
    <PageLayout
      heading={t("navbar.kGHD")}
      highImg={highImg}
      lowImg={lowImg}
      navigation={[
        t("navbar.anasayfa"),
        t("navbar.hizmetler"),
        t("navbar.kGHD"),
      ]}
    >
      {t("content.hizmetler.kGHD")}
    </PageLayout>
  );
};
export default KVKK;
