import Footer from "./Footer";
import Navbar from "./Navbar";
import ToTheTop from "./ToTheTop";

const Layout = ({ children }) => {
  return (
    <div className="w-full font-popins text-slate-700 dark:text-slate-200 dark:bg-slate-600 selection:bg-slate-700 selection:text-slate-300">
      <Navbar />
      {children}
      <ToTheTop />
      <Footer />
    </div>
  );
};
export default Layout;
