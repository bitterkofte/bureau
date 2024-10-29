import BulletHeader from "../../components/Elements/BulletHeader";
import SlidingParagraph from "../../components/Elements/SlidingParagraph";
import CenterPageContent from "../../components/Layout/CenterPageContent";
import PageBanner from "../../components/Special/PageBanner";
import highImg from "../../assets/lazyLoad/bookshelves-high.jpg";
import lowImg from "../../assets/lazyLoad/bookshelves-low.jpg";

const Hakkimizda = () => {
  return (
    <div>
      <PageBanner
        heading={"Hakkımızda"}
        highImg={highImg}
        lowImg={lowImg}
        navigation={["Anasayfa", "Kurumsal", "Hakkımızda"]}
      />
      <CenterPageContent>
        <SlidingParagraph>
          <BulletHeader id={""}>Hakkımızda</BulletHeader>
          Petek § Leblebici Hukuk ve Danışmanlık, 2023 yılında İstanbul’da
          kurulmuş olup, dinamik ve gelişen ekibimizle müvekkillerimize kapsamlı
          ve nitelikli hukuki danışmanlık ve avukatlık hizmetleri sunmaktayız.
          Ofisimiz, hukukun her alanında en iyi hizmeti sunabilmek adına güncel
          hukuki gelişmeleri ve değişen mevzuatı yakından takip ederken,
          müvekkillerimize hızlı ve etkili çözümler sunma amacı taşımaktadır.
        </SlidingParagraph>
      </CenterPageContent>
    </div>
  );
};
export default Hakkimizda;
