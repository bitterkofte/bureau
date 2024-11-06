import PageLayout from "../../components/Layout/PageLayout";
import highImg from "../../assets/lazyLoad/bookshelves-high.jpg";
import lowImg from "../../assets/lazyLoad/bookshelves-low.jpg";

const Onleyici = () => {
  return (
    <PageLayout
      heading={"Önleyici Hukuk Hizmetleri"}
      highImg={highImg}
      lowImg={lowImg}
      navigation={["Anasayfa", "Hizmetler", "Önleyici Hukuk Hizmetleri"]}
    >
      Petek § Leblebici Hukuk ve Danışmanlık olarak, müvekkillerimizin hukuki
      risklerini en aza indirmek ve olası uyuşmazlıkları önlemek amacıyla
      önleyici hukuk hizmetleri sunmaktayız. Uzman avukatlarımız,
      müvekkillerimizin iş süreçlerini ve faaliyetlerini analiz ederek, hukuki
      açıdan risk teşkil edebilecek alanları belirler ve gerekli önlemleri alır.
      Bu sayede, müvekkillerimizin karşılaşabileceği hukuki sorunları önceden
      tespit ederek, proaktif çözümler geliştiririz. Önleyici hukuk
      hizmetlerimizle, müvekkillerimizin uzun vadeli başarısını ve hukuki
      güvenliğini sağlamak için çalışıyoruz.
    </PageLayout>
  );
};
export default Onleyici;
