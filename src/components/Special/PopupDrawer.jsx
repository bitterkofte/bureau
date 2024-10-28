import { Link } from "react-router-dom";

const PopupDrawer = ({ links, isAnimating }) => {
  return (
    <div
      className={`min-w-40 px-3 py-3 absolute top-10 left-0 flex flex-col gap-2 bg-neutral-200 z-[100] rounded-md ${
        isAnimating ? "animate-slideUp" : "animate-fadeOut"
      }`}
    >
      {links.map((link, i) => (
        <Link
          to={link.URL}
          key={i}
          className="px-2 py-1 border-lp-brown-l1 border-l-2 hover:border-l-4 text-lp-brown-l1 hover:bg-lp-brown-ttt rounded-r-lg transition-all ease-in-out"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};
export default PopupDrawer;
