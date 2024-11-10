import { useEffect, useState } from "react";
import Link from "../Elements/Link";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import Logo from "../../assets/logo1.svg";
import { navLinks } from "../../data/links";
import NavbarLink from "../Special/NavbarLink";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

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
          <NavbarLink text={"Anasayfa"} href={"/"} />
          <NavbarLink text={"Kurumsal"} links={navLinks.kurumsal} popup />
          <NavbarLink text={"Hukuk"} links={navLinks.hukuk} popup />
          <NavbarLink text={"Hizmetler"} links={navLinks.hizmetler} popup />
          <NavbarLink text={"İletişim"} href={"/iletisim"} />
        </ul>
      </div>
      {/* SECTION MOBILE */}
      <button className="relative z-20 lg:hidden text-3xl">
        <FiMenu
          onClick={() => setIsMobileMenuVisible((s) => !s)}
          className={`${isMobileMenuVisible ? "text-white" : ""}`}
        />
      </button>
      <div>
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
