import { useEffect, useState } from "react";
import Link from "../Elements/Link";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

const Navbar = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <nav
      // className={`active ${!show && "hidden"}`}
      className={`w-full h-20 p-5 fixed top-0 left-0 z-10 flex justify-between items-center bg-slate-400 dark:bg-slate-700 dark:text-white visiblex ${
        !show && "hiddenx"
      }`}
    >
      <ul className="flex gap-11">
        <li>
          <Link>Anasayfa</Link>
        </li>
        <li>
          <Link>
            <a href="#ekibimiz">Ekibimiz</a>
          </Link>
        </li>
        <li>
          <Link>
            <a href="#calisma-alanlarimiz">Çalışma Alanlarımız</a>
          </Link>
        </li>
        <li>
          <Link>Kariyer</Link>
        </li>
        <li>
          <Link>Blog</Link>
        </li>
        <li>
          <Link>İletişim</Link>
        </li>
        <li>
          <Link>Online Danışmanlık</Link>
        </li>
        {/* <li>Ekibimiz</li>
        <li>Çalışma Alanlarımız</li>
        <li>Kariyer</li>
        <li>Blog</li>
        <li>İletişim</li>
        <li>Online Danışmanlık</li> */}
      </ul>
      <div>
        <button
          onClick={toggleTheme}
          className="p-2 text-xl rounded-lg dark:bg-amber-500 bg-slate-500"
        >
          {theme === "light" ? (
            <FaMoon className="text-slate-200" />
          ) : (
            <MdSunny className="text-amber-200" />
          )}
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
