import PageLayout from "../../components/Layout/PageLayout";
import highImg from "../../assets/lazyLoad/bookshelves-high.jpg";
import lowImg from "../../assets/lazyLoad/bookshelves-low.jpg";
import { useTranslation } from "react-i18next";

const Onleyici = () => {
  const { t } = useTranslation();

  return (
    <PageLayout
      heading={t("navbar.onleyiciHH")}
      highImg={highImg}
      lowImg={lowImg}
      navigation={[
        t("navbar.anasayfa"),
        t("navbar.hizmetler"),
        t("navbar.onleyiciHH"),
      ]}
    >
      {t("content.hizmetler.onleyiciHH")}
    </PageLayout>
  );
};
export default Onleyici;
