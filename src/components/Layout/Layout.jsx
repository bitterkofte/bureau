import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen font-popins dark:bg-slate-600">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
