import { useEffect, useState } from "react";
import Link from "../Elements/Link";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

const Navbar = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

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

  return (
    <nav className="w-full p-5 fixed top-0 left-0 flex justify-between items-center bg-slate-400 dark:bg-slate-700 dark:text-white">
      <ul className="flex gap-11">
        <li>
          <Link>Anasayfa</Link>
        </li>
        <li>
          <Link>Ekibimiz</Link>
        </li>
        <li>
          <Link>Çalışma Alanlarımız</Link>
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
