import PageLayout from "../../components/Layout/PageLayout";
import highImg from "../../assets/lazyLoad/bookshelves-high.jpg";
import lowImg from "../../assets/lazyLoad/bookshelves-low.jpg";

const HukukiDanismanlik = () => {
  return (
    <PageLayout
      heading={"Hukuki Danışmanlık"}
      highImg={highImg}
      lowImg={lowImg}
      navigation={["Anasayfa", "Hukuk", "Hukuki Danışmanlık"]}
    >
      Petek § Leblebici Hukuk ve Danışmanlık olarak, müvekkillerimize en yüksek
      kalitede hukuki danışmanlık hizmetleri sunmaktayız. Uzman avukatlarımız,
      müvekkillerimizin ihtiyaçlarına özel çözümler üreterek, her türlü hukuki
      sorunlarında yanlarında olmaktadır. Şirketler, bireyler ve diğer kurumlar
      için özelleştirilmiş hukuki stratejiler geliştirerek, hukuki süreçlerin
      her aşamasında profesyonel destek sağlıyoruz. Hukuki danışmanlık
      hizmetlerimizle, müvekkillerimizin hukuki risklerini minimize ederek, en
      uygun ve etkili çözümleri sunmaktayız.
    </PageLayout>
  );
};
export default HukukiDanismanlik;
