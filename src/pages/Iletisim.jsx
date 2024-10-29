import PageLayout from "../components/Layout/PageLayout";
import highImg from "../assets/lazyLoad/bookshelves-high.jpg";
import lowImg from "../assets/lazyLoad/bookshelves-low.jpg";

const Iletisim = () => {
  return (
    <PageLayout
      heading={"İletişim"}
      highImg={highImg}
      lowImg={lowImg}
      navigation={["Anasayfa", "İletişim"]}
    >
      <p>
        Açık Adres: Eğitim Mahallesi Ahsen Çıkmazı Sokak Sadıkoğlu İş Merkezi 1
        No:10 Kat:1 Daire:21 Kadıköy/İST
      </p>
      <p>Telefon Numarası: +90 507 264 40 80</p>
      <p>E-posta adresi: av.emreleblebici@gmail.com</p>
    </PageLayout>
  );
};
export default Iletisim;
