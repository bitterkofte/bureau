import PageLayout from "../../components/Layout/PageLayout";
import highImg from "../../assets/lazyLoad/bookshelves-high.jpg";
import lowImg from "../../assets/lazyLoad/bookshelves-low.jpg";

const KVKK = () => {
  return (
    <PageLayout
      heading={"KVKK ve GDPR Hukuki Danışmanlık"}
      highImg={highImg}
      lowImg={lowImg}
      navigation={["Anasayfa", "Hizmetler", "KVKK ve GDPR Hukuki Danışmanlık"]}
    >
      Petek § Leblebici Hukuk ve Danışmanlık olarak, müvekkillerimizin KVKK
      (Kişisel Verilerin Korunması Kanunu) ve GDPR (General Data Protection
      Regulation) kapsamında hukuki gereksinimlerini karşılamak amacıyla
      danışmanlık hizmetleri sunmaktayız. Uzman avukatlarımız, kişisel verilerin
      korunması ve yönetilmesi konusunda müvekkillerimize rehberlik ederek, uyum
      süreçlerini en etkin şekilde yönetmelerine yardımcı olur. Veri ihlalleri
      ve hukuki riskleri minimize etmek için gerekli hukuki tedbirleri alarak,
      müvekkillerimizin veri güvenliğini ve hukuki uyumunu sağlamaktayız.
    </PageLayout>
  );
};
export default KVKK;
