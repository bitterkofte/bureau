import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { servicesList } from "../data/services";
import Team from "../components/Special/Team";
import HPSection from "../components/Special/HPSection";
import CenterPageContent from "../components/Layout/CenterPageContent";
import HPSlider from "../components/Special/HPSlider";
import SectionSeperator from "../components/Elements/SectionSeperator";
import PageBanner from "../components/Special/PageBanner";
import highImg from "../assets/lazyLoad/bookshelves-high.jpg";
import lowImg from "../assets/lazyLoad/bookshelves-low.jpg";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="">
      {/* <HPSlider /> */}
      <PageBanner
        heading={t("navbar.anasayfa")}
        highImg={highImg}
        lowImg={lowImg}
        navigation={[t("navbar.anasayfa")]}
      />
      <CenterPageContent>
        <HPSection title={t("navbar.hakkimizda")} id={"hakkimizda"}>
          {t("content.kurumsal.hakkimizda")}
        </HPSection>

        <SectionSeperator />

        <HPSection
          title={t("navbar.hizmetlerimiz")}
          id={"hizmetlerimiz"}
          className="overflow-hidden"
        >
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
            className="!pb-20 !pt-10 !-mt-10 !px-12 select-none !hidden lg:!block "
          >
            {servicesList.map((m) => (
              <SwiperSlide
                color="red"
                className="!h-60 !p-3 flex flex-col justify-center items-center rounded-xl hover:drop-shadow-2xl hover:border-[3px] hover:scale-105 border-[2px] hover:cursor-grab active:cursor-grabbing border-lp-brown dark:border-neutral-200 dark:bg-lp-brown-lighter transition-all"
                key={m.name}
              >
                <div className="text-5xl p-7">{m.icon}</div>
                <p className="text-center font-semibold">
                  {i18n.language === "tr" ? m.name : m.nameEn}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* SECTION MOBILE */}
          <Swiper
            effect={"cards"}
            grabCursor={true}
            // loop={true}
            modules={[EffectCards]}
            className="!relative !overflow-visible mobile-sc lg:!hidden"
          >
            {servicesList.map((m) => (
              <SwiperSlide
                className={
                  "!min-w-32 p-3 flex flex-col justify-center items-center rounded-xl " +
                  "odd:!bg-lp-brown " +
                  "even:!bg-lp-green " +
                  "[&:nth-child(1n)]:!bg-lp-brown " +
                  "[&:nth-child(2n)]:!bg-lp-green " +
                  "[&:nth-child(3n)]:!bg-lp-brown-d1 " +
                  "[&:nth-child(4n)]:!bg-lp-green-dark " +
                  "[&:nth-child(5n)]:!bg-lp-brown " +
                  "[&:nth-child(6n)]:!bg-lp-green " +
                  "[&:nth-child(7n)]:!bg-lp-brown-d1 " +
                  "[&:nth-child(8n)]:!bg-lp-green-dark "
                }
                key={m.name}
              >
                <div className="text-5xl p-7">{m.icon}</div>
                <p className="text-center font-semibold">
                  {i18n.language === "tr" ? m.name : m.nameEn}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </HPSection>

        <SectionSeperator />

        <HPSection title={t("navbar.avukatK")} id={"avukat-kimdir"}>
          {t("content.anasayfa.avukatK")}
        </HPSection>

        <SectionSeperator />

        <HPSection title={t("navbar.calismaA")} id={"calisma-arkadaslari"}>
          <Team />
          {t("content.anasayfa.calismaA")}
        </HPSection>

        {/* <SectionSeperator /> */}

        {/* <EnrollMailList /> */}
      </CenterPageContent>
    </div>
  );
};
export default HomePage;
