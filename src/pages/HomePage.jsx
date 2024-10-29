import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { servicesList } from "../data/services";
import Team from "../components/Special/Team";
import HPSection from "../components/Special/HPSection";
import CenterPageContent from "../components/Layout/CenterPageContent";
import HPSlider from "../components/Special/HPSlider";
import SectionSeperator from "../components/Elements/SectionSeperator";

const HomePage = () => {
  return (
    <div className="">
      <HPSlider />
      <CenterPageContent>
        <HPSection title={"Avukat Kimdir?"} id={"avukat-kimdir"}>
          Avukatlar, hukuk sisteminde adaletin sağlanması için çalışan
          profesyonellerdir. Hukuki konularda müvekkillerine danışmanlık yapar,
          onları temsil eder ve hukuki süreçlerde haklarını savunurlar.
          Avukatlar, çeşitli hukuk dallarında uzmanlaşarak, bireylerin ve
          kurumların hukuki ihtiyaçlarına yönelik çözüm önerileri sunarlar.
          Hukukun üstünlüğünü ve adaleti sağlamak adına önemli bir rol
          üstlenirler.
        </HPSection>

        <SectionSeperator />

        <HPSection title={"Hakkımızda"} id={"hakkimizda"}>
          Petek § Leblebici Hukuk ve Danışmanlık, 2023 yılında İstanbul’da
          kurulmuş olup, dinamik ve gelişen ekibimizle müvekkillerimize kapsamlı
          ve nitelikli hukuki danışmanlık ve avukatlık hizmetleri sunmaktayız.
          Ofisimiz, hukukun her alanında en iyi hizmeti sunabilmek adına güncel
          hukuki gelişmeleri ve değişen mevzuatı yakından takip ederken,
          müvekkillerimize hızlı ve etkili çözümler sunma amacı taşımaktadır.
        </HPSection>

        <SectionSeperator />

        <HPSection title={"Çalışma Arkadaşları"} id={"calisma-arkadaslari"}>
          <Team />
          Petek § Leblebici Hukuk ve Danışmanlık bünyesinde, her biri alanında
          uzman stajyer avukatlar, katip elemanları, teknik ekip ve çözüm
          ortakları bulunmaktadır. Ekibimiz, müvekkillerimize sunulan
          hizmetlerin kalitesini artırmak ve hukuki süreçlerde maksimum
          verimlilik sağlamak için titizlikle çalışmaktadır. Stajyer
          avukatlarımız sürekli eğitim ve gelişim içindeyken, katip ve teknik
          personelimiz işlerin sorunsuz yürütülmesini sağlamakta; çözüm
          ortaklarımız ise uzmanlık gerektiren özel durumlarda destek ve
          danışmanlık sunmaktadır.
        </HPSection>

        <SectionSeperator />

        <HPSection title={"Çalışma Alanlarımız"} id={"calisma-alanlarimiz"}>
          Petek § Leblebici Hukuk ve Danışmanlık, 2023 yılında İstanbul’da
          kurulmuş olup, dinamik ve gelişen ekibimizle müvekkillerimize kapsamlı
          ve nitelikli hukuki danışmanlık ve avukatlık hizmetleri sunmaktayız.
          Ofisimiz, hukukun her alanında en iyi hizmeti sunabilmek adına güncel
          hukuki gelişmeleri ve değişen mevzuatı yakından takip ederken,
          müvekkillerimize hızlı ve etkili çözümler sunma amacı taşımaktadır.
        </HPSection>

        <SectionSeperator />

        <HPSection title={"Hizmetlerimiz"} id={"hizmetlerimiz"}>
          <Swiper
            id="hizmetler"
            style={{
              "--swiper-pagination-color": "#008b88",
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "14px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
            }}
            slidesPerView={5}
            spaceBetween={49}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            rewind={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="pb-20 pt-10 -mt-10 px-12 select-none"
          >
            {servicesList.map((m) => (
              <SwiperSlide
                color="red"
                className="min-w-40 w-40 h-60 p-3 flex flex-col justify-center items-center rounded-xl hover:drop-shadow-2xl hover:border-[3px] hover:scale-105 border-[2px] hover:cursor-grab active:cursor-grabbing border-lp-brown dark:border-neutral-200 dark:bg-lp-brown-lighter transition-all"
                key={m.name}
              >
                <div className="text-5xl p-7">{m.icon}</div>
                <p className="text-center font-semibold">{m.name}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </HPSection>
        {/* <EnrollMailList /> */}
      </CenterPageContent>
    </div>
  );
};
export default HomePage;
