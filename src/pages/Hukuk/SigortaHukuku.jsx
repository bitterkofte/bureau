import PageLayout from "../../components/Layout/PageLayout";
import highImg from "../../assets/lazyLoad/bookshelves-high.jpg";
import lowImg from "../../assets/lazyLoad/bookshelves-low.jpg";

const SigortaHukuku = () => {
  return (
    <PageLayout
      heading={"Sigorta Hukuku"}
      highImg={highImg}
      lowImg={lowImg}
      navigation={["Anasayfa", "Hukuk", "Sigorta Hukuku"]}
    >
      Sigorta Hukuku alanında müvekkillerimize kapsamlı hizmetler sunuyoruz.
      Sigorta sektörünün öncü firmalarından QUICK SİGORTA A.Ş. ve CORPUS SİGORTA
      A.Ş.'nin vekilliğini yapmaktayız ve danışmanlık hizmeti vermekteyiz.
      Deneyimli ekibimiz ile sigorta hukuku alanındaki sorunlarınıza etkili ve
      hızlı çözümler üretiyoruz.
    </PageLayout>
  );
};
export default SigortaHukuku;
