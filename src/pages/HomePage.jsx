import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import B0 from "../assets/banners/0.png";
import B1 from "../assets/banners/1.png";
import B2 from "../assets/banners/2.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BulletHeader from "../components/Elements/BulletHeader";
import useInView from "../hooks/useInView";
import Team from "../components/Special/Team";
import HPSection from "../components/Special/HPSection";

const HomePage = () => {
  const introRef = useInView();
  const introRef2 = useInView();
  return (
    <div className="pt-20">
      <Swiper
        className="select-none"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <img src={B0} className="h-80" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={B1} className="h-80" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={B2} className="h-80" />
        </SwiperSlide>
      </Swiper>
      <div className="px-10 lg:px-36 py-8">
        <HPSection title={"Avukat Kimdir?"} id={"avukat-kimdir"}>
          Avukatlar, hukuk sisteminde adaletin sağlanması için çalışan
          profesyonellerdir. Hukuki konularda müvekkillerine danışmanlık yapar,
          onları temsil eder ve hukuki süreçlerde haklarını savunurlar.
          Avukatlar, çeşitli hukuk dallarında uzmanlaşarak, bireylerin ve
          kurumların hukuki ihtiyaçlarına yönelik çözüm önerileri sunarlar.
          Hukukun üstünlüğünü ve adaleti sağlamak adına önemli bir rol
          üstlenirler.
        </HPSection>

        <HPSection title={"Hakkımızda"} id={"hakkimizda"}>
          Petek § Leblebici Hukuk ve Danışmanlık, 2023 yılında İstanbul’da
          kurulmuş olup, dinamik ve gelişen ekibimizle müvekkillerimize kapsamlı
          ve nitelikli hukuki danışmanlık ve avukatlık hizmetleri sunmaktayız.
          Ofisimiz, hukukun her alanında en iyi hizmeti sunabilmek adına güncel
          hukuki gelişmeleri ve değişen mevzuatı yakından takip ederken,
          müvekkillerimize hızlı ve etkili çözümler sunma amacı taşımaktadır.
        </HPSection>

        <HPSection title={"Ekibimiz"} id={"ekibimiz"}>
          <Team />
          Petek § Leblebici Hukuk ve Danışmanlık, 2023 yılında İstanbul’da
          kurulmuş olup, dinamik ve gelişen ekibimizle müvekkillerimize kapsamlı
          ve nitelikli hukuki danışmanlık ve avukatlık hizmetleri sunmaktayız.
          Ofisimiz, hukukun her alanında en iyi hizmeti sunabilmek adına güncel
          hukuki gelişmeleri ve değişen mevzuatı yakından takip ederken,
          müvekkillerimize hızlı ve etkili çözümler sunma amacı taşımaktadır.
        </HPSection>

        <HPSection title={"Çalışma Alanlarımız"} id={"calisma-alanlarimiz"}>
          Petek § Leblebici Hukuk ve Danışmanlık, 2023 yılında İstanbul’da
          kurulmuş olup, dinamik ve gelişen ekibimizle müvekkillerimize kapsamlı
          ve nitelikli hukuki danışmanlık ve avukatlık hizmetleri sunmaktayız.
          Ofisimiz, hukukun her alanında en iyi hizmeti sunabilmek adına güncel
          hukuki gelişmeleri ve değişen mevzuatı yakından takip ederken,
          müvekkillerimize hızlı ve etkili çözümler sunma amacı taşımaktadır.
        </HPSection>
        {/* <EnrollMailList /> */}
      </div>
    </div>
  );
};
export default HomePage;
