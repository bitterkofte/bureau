import Link from "../Elements/Link";
import Logo1 from "../../assets/logo3.svg";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import useInView from "../../hooks/useInView";
import MyLink from "../Elements/MyLink";

const Footer = () => {
  const introRef = useInView();
  return (
    // formal: bg-slate-400 dark:bg-slate-700
    <footer className="w-full bg-lp-brown dark:bg-lp-brown-darker text-slate-200">
      <div
        className="px-16 py-10 flex flex-col items-center lg:flex-row lg:items-start gap-10 xl:gap-24 text-intro"
        ref={introRef}
      >
        {/* PIN 1st GRP */}
        <div className="w-60 flex flex-col gap-3">
          <img
            className="min-w-52 w-full h-auto bg-white p-3 rounded-xl select-none"
            src={Logo1}
            alt="logo"
          />
          <p className="text-center font-bold tracking-wider">
            PETEK & LEBLEBİCİ HUKUK ve DANIŞMANLIK
          </p>
          <div className="flex justify-between items-center">
            <a
              href=""
              className="p-3 bg-lp-brown-dark dark:bg-lp-brown rounded-lg hover:bg-lp-brown-darker dark:hover:bg-lp-brown-dark transition-[background-color] duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href=""
              className="p-3 bg-lp-brown-dark dark:bg-lp-brown rounded-lg hover:bg-lp-brown-darker dark:hover:bg-lp-brown-dark transition-[background-color] duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href=""
              className="p-3 bg-lp-brown-dark dark:bg-lp-brown rounded-lg hover:bg-lp-brown-darker dark:hover:bg-lp-brown-dark transition-[background-color] duration-300"
            >
              <FaXTwitter />
            </a>
            <a
              href=""
              className="p-3 bg-lp-brown-dark dark:bg-lp-brown rounded-lg hover:bg-lp-brown-darker dark:hover:bg-lp-brown-dark transition-[background-color] duration-300"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* PIN 2nd GRP */}
        <div className="flex flex-col lg:flex-row justify-between grow gap-10 lg:gap-16">
          {/* SECTION 2nd Col */}
          <div className="max-w-48 flex flex-col gap-2 lg:gap-4 2xl:gap-2">
            <h3 className="text-xl font-bold">Kurumsal</h3>
            <MyLink to={"/"}>Anasayfa</MyLink>
            <MyLink to={"/hakkimizda"}>Hakkımıda</MyLink>
            <MyLink to={"/neden-petek-ve-leblebici"}>
              Neden Petek & Leblebici
            </MyLink>
            <MyLink to={"/sikca-sorulan-sorular"}>Sıkça Sorulan Sorular</MyLink>
          </div>

          {/* SECTION 3rd Col */}
          <div className="max-w-48 flex flex-col gap-2 lg:gap-4 2xl:gap-2">
            <h3 className="text-xl font-bold">Hukuk</h3>
            <MyLink to={"/sigorta-hukuku"}>Sigorta Hukuku</MyLink>
            <MyLink to={"/hukuki-danismanlik"}>Hukuki Danışmanlık</MyLink>
          </div>

          {/* SECTION 4th Col */}
          <div className="max-w-48 flex flex-col gap-2 lg:gap-4 2xl:gap-2">
            <h3 className="text-xl font-bold">Hizmetler</h3>
            <MyLink to={"/onleyici-hukuk-hizmetleri"}>
              Önleyici Hukuk Hizmetleri
            </MyLink>
            <MyLink to={"/uzlastirma-ve-arabuluculuk-hizmetleri"}>
              Uzlaştırma ve Arabuluculuk Hizmetleri
            </MyLink>
            <MyLink to={"/kvkk-ve-gdpr-hukuki-danismanlik"}>
              KVKK ve GDPR Hukuki Danışmanlık
            </MyLink>
          </div>

          {/* SECTION 5th Col */}
          <div className="max-w-56 flex flex-col gap-2 lg:gap-4 2xl:gap-2">
            <h3 className="text-xl font-bold">İletişim Bilgilerimiz</h3>
            <a
              href="https://maps.app.goo.gl/FtXCg8qBD8bpc5NE6"
              target="_blank"
              className="text-neutral-300 hover:text-neutral-50"
            >
              Eğitim Mahallesi Ahsen Çıkmazı Sokak Sadıkoğlu İş Merkezi 1 No:10
              Kat:1 Daire:21 Kadıköy/İST
            </a>
            <a
              href="tel:+905072644080"
              className="text-neutral-300 hover:text-neutral-50 lg:text-xs xl:text-base"
            >
              +90 507 264 40 80
            </a>
            <a
              href="mailto:av.emreleblebici@gmail.com"
              className="text-neutral-300 hover:text-neutral-50 lg:text-xs xl:text-base"
            >
              av.emreleblebici@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="border-[1px]" />
      <div className="p-4 flex justify-center items-center">
        <p>&#169; 2024 Tüm Haklarımız Saklıdır.</p>
      </div>
    </footer>
  );
};
export default Footer;
