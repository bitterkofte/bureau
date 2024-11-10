import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ToTheTop from "./ToTheTop";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const [theme] = useState(() => localStorage.getItem("theme") || "light");
  const { pathname } = useLocation();
  const [url, setUrl] = useState(pathname);

  useEffect(() => {
    // window.scrollTo(0, 0);
    if (url !== pathname) window.scrollTo(0, 0);
  }, [pathname, url]);

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    // formal colors: text-slate-700 dark:text-slate-200 dark:bg-slate-600 selection:bg-slate-700 selection:text-slate-300
    <div className="w-full pt-20 font-popins text-lp-brown dark:text-neutral-100 dark:bg-lp-brown-dark selection:bg-lp-brown-light selection:text-neutral-200 transition-colors duration-300">
      <Navbar />
      <Outlet />
      <ToTheTop />
      <Footer />
    </div>
  );
};
export default Layout;
