import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-red-300">
      <div className="">
        <h3>Aradığınız Sayfa Bulunamadı</h3>
        <Link to={"/"}>Anasayfa'ya git</Link>
      </div>
    </div>
  );
};
export default NotFoundPage;
