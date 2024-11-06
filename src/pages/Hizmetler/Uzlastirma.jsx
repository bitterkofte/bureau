import PageLayout from "../../components/Layout/PageLayout";
import highImg from "../../assets/lazyLoad/bookshelves-high.jpg";
import lowImg from "../../assets/lazyLoad/bookshelves-low.jpg";

const Uzlastirma = () => {
  return (
    <PageLayout
      heading={"Uzlaştırma ve Arabuluculuk Hizmetleri"}
      highImg={highImg}
      lowImg={lowImg}
      navigation={[
        "Anasayfa",
        "Hizmetler",
        "Uzlaştırma ve Arabuluculuk Hizmetleri",
      ]}
    >
      Petek § Leblebici Hukuk ve Danışmanlık olarak, müvekkillerimize alternatif
      çözüm yolları sunarak, uzun ve maliyetli yargı süreçlerinden kaçınmalarına
      yardımcı oluyoruz. Deneyimli avukatlarımız, taraflar arasında uzlaşı
      sağlamak ve ihtilafları etkin bir şekilde çözmek için arabuluculuk ve
      uzlaştırma hizmetleri sunar. Uzmanlarımız, müvekkillerimize çatışmaların
      çözümünde tarafsız ve etkili bir rol oynayarak, uzlaşma odaklı ve adil
      sonuçlar elde etmelerini sağlar. Uzlaştırma ve arabuluculuk
      hizmetlerimizle, müvekkillerimizin hem zaman hem de maliyet açısından
      avantaj sağlamalarını hedefliyoruz.
    </PageLayout>
  );
};
export default Uzlastirma;
