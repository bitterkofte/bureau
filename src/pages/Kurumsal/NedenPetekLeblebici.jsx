import PageLayout from "../../components/Layout/PageLayout";
import highImg from "../../assets/lazyLoad/bookshelves-high.jpg";
import lowImg from "../../assets/lazyLoad/bookshelves-low.jpg";
import { useTranslation } from "react-i18next";
import resources from "../../i18n";
// import { parseTextToHtml } from "../../functions/parseTextIntoHtml";

const NedenPetekLeblebici = () => {
  const { t } = useTranslation();
  return (
    <PageLayout
      heading={t("navbar.nedenPL")}
      highImg={highImg}
      lowImg={lowImg}
      navigation={[
        t("navbar.anasayfa"),
        t("navbar.kurumsal"),
        t("navbar.nedenPL"),
      ]}
    >
      <ul className="list-disc flex flex-col gap-4">
        <li>
          <strong>{t("content.kurumsal.nedenPL.head1")}</strong>:{"  "}
          {t("content.kurumsal.nedenPL.desc1")}
        </li>
        <li>
          <strong>{t("content.kurumsal.nedenPL.head2")}</strong>:{"  "}
          {t("content.kurumsal.nedenPL.desc2")}
        </li>
        <li>
          <strong>{t("content.kurumsal.nedenPL.head3")}</strong>:{"  "}
          {t("content.kurumsal.nedenPL.desc3")}
        </li>
        <li>
          <strong>{t("content.kurumsal.nedenPL.head4")}</strong>:{"  "}
          {t("content.kurumsal.nedenPL.desc4")}
        </li>
      </ul>
    </PageLayout>
  );
};
export default NedenPetekLeblebici;
