import { BiSolidErrorAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="h-screen p-10 flex justify-center items-center bg-lp-brown-d2 bg-[url('/src/assets/backgrounds/lp-bureau-bg-3.svg')] bg-cover select-none">
      <div className="px-10 py-8 text-center lg:text-left tracking-wider backdrop-blur-md rounded-xl bg-white/5">
        <h3 className="mb-5 font-bold text-xl lg:text-3xl text-white flex flex-col lg:flex-row items-center gap-3">
          <BiSolidErrorAlt className="text-lp-brown-l3" />{" "}
          <span>Aradığınız Sayfa Bulunamadı</span>
        </h3>
        <Link className="font-extrabold text-sky-600" to={"/"}>
          Anasayfa'ya git
        </Link>
      </div>
    </div>
  );
};
export default NotFoundPage;
