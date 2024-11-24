import BulletHeader from "../../components/Elements/BulletHeader";
import SlidingParagraph from "../../components/Elements/SlidingParagraph";
import CenterPageContent from "../../components/Layout/CenterPageContent";
import PageBanner from "../../components/Special/PageBanner";
import highImg from "../../assets/lazyLoad/bookshelves-high.jpg";
import lowImg from "../../assets/lazyLoad/bookshelves-low.jpg";
import { useTranslation } from "react-i18next";
import PageLayout from "../../components/Layout/PageLayout";

const Hakkimizda = () => {
  const { t } = useTranslation();
  return (
    <PageLayout
      heading={t("navbar.hakkimizda")}
      highImg={highImg}
      lowImg={lowImg}
      navigation={[
        t("navbar.anasayfa"),
        t("navbar.kurumsal"),
        t("navbar.hakkimizda"),
      ]}
    >
      {t("content.kurumsal.hakkimizda")}
    </PageLayout>
  );
};
export default Hakkimizda;
