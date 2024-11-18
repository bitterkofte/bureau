import { useEffect, useState } from "react";
import Link from "../Elements/Link";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import Logo from "../../assets/logo1.svg";
import { navLinks } from "../../data/links";
import NavbarLink from "../Special/NavbarLink";
import MobileMenu from "./MobileMenu";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IoLanguage } from "react-icons/io5";

const Navbar = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  // const [url, setUrl] = useState(pathname);

  const languageChanger = async () => {
    await i18n.changeLanguage(i18n.language === "tr" ? "en" : "tr");
  };

  useEffect(() => {
    // window.scrollTo(0, 0);
    // if (url !== pathname) window.scrollTo(0, 0);
    setIsMobileMenuVisible(false);
  }, [pathname]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Add or remove 'dark' class on the root element based on theme state
  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) setShow(false);
    else setShow(true);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (isMobileMenuVisible) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isMobileMenuVisible]);

  return (
    <nav
      // className={`active ${!show && "hidden"}`}
      className={`w-full h-20 p-5 fixed top-0 left-0 z-10 flex justify-between items-center font-bold shadow-md drop-shadow-lg bg-[#ffffffa4] dark:bg-[#77212c9d] backdrop-blur dark:bg-lp-1 text-lp-brown dark:text-white select-none visiblex ${
        !show && "hiddenx"
      }`}
    >
      <div className="flex items-center gap-5">
        <Link to={"/"}>
          <img
            className="relative z-20 w-14 h-14 p-1 select-none drop-shadow-shine hover:drop-shadow-shiner transition-all"
            src={Logo}
            alt="Logo"
          />
        </Link>
        {/* SECTION DESKTOP */}
        <ul className="hidden lg:flex gap-11">
          <NavbarLink
            text={t("navbar.anasayfa")}
            href={"/"}
            isNavbarVisible={show}
          />
          <NavbarLink
            text={t("navbar.kurumsal")}
            links={navLinks.kurumsal}
            isNavbarVisible={show}
            popup
          />
          <NavbarLink
            text={t("navbar.hukuk")}
            links={navLinks.hukuk}
            isNavbarVisible={show}
            popup
          />
          <NavbarLink
            text={t("navbar.hizmetler")}
            links={navLinks.hizmetler}
            isNavbarVisible={show}
            popup
          />
          <NavbarLink
            text={t("navbar.iletisim")}
            href={"/iletisim"}
            isNavbarVisible={show}
          />
        </ul>
      </div>
      {/* SECTION MOBILE */}
      <button className="relative z-20 lg:hidden text-3xl">
        {/* <FiMenu
          onClick={() => setIsMobileMenuVisible((s) => !s)}
          className={`${isMobileMenuVisible ? "text-white" : ""}`}
        /> */}
        <div className="scale-[0.6]">
          <div
            id="hamburger-menu"
            className={`${isMobileMenuVisible ? "open" : ""}`}
            onClick={() => setIsMobileMenuVisible((s) => !s)}
          >
            <span
              className={`${
                isMobileMenuVisible ? "bg-white" : "bg-lp-brown dark:bg-white"
              }`}
            ></span>
            <span
              className={`${
                isMobileMenuVisible ? "bg-white" : "bg-lp-brown dark:bg-white"
              }`}
            ></span>
            <span
              className={`${
                isMobileMenuVisible ? "bg-white" : "bg-lp-brown dark:bg-white"
              }`}
            ></span>
            <span
              className={`${
                isMobileMenuVisible ? "bg-white" : "bg-lp-brown dark:bg-white"
              }`}
            ></span>
          </div>
        </div>
      </button>
      <div>
        <button
          className="relative z-20 p-2 text-xl rounded-xl shadow-lg mr-3 bg-lp-green text-white active:scale-90"
          onClick={languageChanger}
        >
          <IoLanguage />
        </button>
        <button
          onClick={toggleTheme}
          className="relative z-20 p-2 text-xl rounded-xl shadow-lg dark:bg-lp-brown-l2 bg-lp-brown-d1 transition-all"
        >
          {theme === "light" ? (
            <FaMoon className="text-slate-200" />
          ) : (
            <MdSunny className="text-white" />
          )}
        </button>
      </div>
      {isMobileMenuVisible && <MobileMenu />}
    </nav>
  );
};
export default Navbar;
