import Link from "../Elements/Link";
import Logo from "../../../public/justice-scale.png";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import useInView from "../../hooks/useInView";

const Footer = () => {
  const introRef = useInView();
  return (
    <footer className="w-full bg-slate-400 dark:bg-slate-700">
      <div
        className="px-16 py-10 lg:px-48 lg:py-20 flex flex-col lg:flex-row gap-10 lg:gap-24 text-intro"
        ref={introRef}
      >
        {/* PIN 1st GRP */}
        <div className="w-60 flex flex-col gap-3">
          <img className="w-60 h-60" src={Logo} alt="logo" />
          <p className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing
          </p>
          <div className="flex justify-between items-center">
            <a
              href=""
              className="p-3 bg-slate-300 dark:bg-slate-800 rounded-lg hover:bg-slate-500 dark:hover:bg-slate-900 transition-[background-color] duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href=""
              className="p-3 bg-slate-300 dark:bg-slate-800 rounded-lg hover:bg-slate-500 dark:hover:bg-slate-900 transition-[background-color] duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href=""
              className="p-3 bg-slate-300 dark:bg-slate-800 rounded-lg hover:bg-slate-500 dark:hover:bg-slate-900 transition-[background-color] duration-300"
            >
              <FaXTwitter />
            </a>
            <a
              href=""
              className="p-3 bg-slate-300 dark:bg-slate-800 rounded-lg hover:bg-slate-500 dark:hover:bg-slate-900 transition-[background-color] duration-300"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* PIN 2nd GRP */}
        <div className="flex flex-col lg:flex-row justify-between grow gap-10">
          {/* SECTION 2nd Col */}
          <div className="max-w-48 flex flex-col gap-2">
            <h3 className="text-xl font-bold">Kurumsal</h3>
            <Link>
              <a href="#ekibimiz">Anasayfa</a>
            </Link>
            <Link>
              <a href="#ekibimiz">Biz Kimiz ?</a>
            </Link>
            <Link>
              <a href="#ekibimiz">Hikayemiz</a>
            </Link>
            <Link>
              <a href="#ekibimiz">Sıkça Sorulan Sorular</a>
            </Link>
          </div>

          {/* SECTION 3rd Col */}
          <div className="max-w-48 flex flex-col gap-2">
            <h3 className="text-xl font-bold">Projeler</h3>
            <Link>
              <a href="#ekibimiz">Hukuk</a>
            </Link>
            <Link>
              <a href="#ekibimiz">Yasa</a>
            </Link>
            <Link>
              <a href="#ekibimiz">Yargı</a>
            </Link>
            <Link>
              <a href="#ekibimiz">Davalar</a>
            </Link>
          </div>

          {/* SECTION 4th Col */}
          <div className="max-w-56 flex flex-col gap-2">
            <h3 className="text-xl font-bold">İletişim Bilgilerimiz</h3>
            <Link>
              <a href="#ekibimiz">
                FALAN MAH. FİLAN FİŞMEKAN CADDESİ MUAMMA APT. NO: 72/E
                İZMİT/KOCAELİ
              </a>
            </Link>
            <Link>
              <a href="#ekibimiz">+90 216 111 11 11</a>
            </Link>
            <Link>
              <a href="#ekibimiz">bureau@gmail.com</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-2" />
      <div className="p-4 flex justify-center items-center">
        <p>&#169; 2024 Tüm Haklarımız Saklıdır.</p>
      </div>
    </footer>
  );
};
export default Footer;
