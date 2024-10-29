import PageLayout from "../../components/Layout/PageLayout";
import highImg from "../../assets/lazyLoad/bookshelves-high.jpg";
import lowImg from "../../assets/lazyLoad/bookshelves-low.jpg";

const NedenPetekLeblebici = () => {
  return (
    <PageLayout
      heading={"Neden Petek & Leblebici?"}
      highImg={highImg}
      lowImg={lowImg}
      navigation={["Anasayfa", "Kurumsal", "Neden Petek & Leblebici?"]}
    >
      <ul className="list-disc flex flex-col gap-4">
        <li>
          <strong>Uzman Kadro</strong>: Sigorta, gayrimenkul ve bilişim hukuku
          gibi özel alanlarda uzmanlaşmış, deneyimli avukatlardan oluşan
          ekibimizle, müvekkillerimize en yüksek kalitede hizmet sunuyoruz.
        </li>
        <li>
          <strong>Kişiye Özel Çözümler</strong>: Her müvekkilin ihtiyaçlarına
          özel, kişiselleştirilmiş hukuki çözümler sunarak, etkili ve tatmin
          edici sonuçlar elde ediyoruz.
        </li>
        <li>
          <strong>Şeffaf ve Etkili İletişim</strong>: Sürecin her aşamasında
          açık ve sürekli iletişim anlayışımızla, müvekkillerimizi her konuda
          bilgilendiriyoruz ve sürecin şeffaf olmasını sağlıyoruz.
        </li>
        <li>
          <strong>Stratejik Yaklaşım</strong>: Hukuki sorunları proaktif bir
          şekilde ele alarak, stratejik ve uzun vadeli çözümler üretiyoruz.
        </li>
      </ul>
    </PageLayout>
  );
};
export default NedenPetekLeblebici;
