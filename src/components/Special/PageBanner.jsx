import { Link } from "react-router-dom";
import useLazyLoader from "../../hooks/useLazyLoader";

const PageBanner = ({ heading, navigation, lowImg, highImg }) => {
  const isLoaded = useLazyLoader({ highImg });

  return (
    // <div
    //   className={`relative bg-cover bg-center h-96 select-none transition-[background] duration-500 ease-in-out ${
    //     isLoaded ? `bg-[${highImg}]` : `bg-[${lowImg}]`
    //   }`}
    // >
    <div
      className={`relative bg-cover bg-center h-96 select-none transition-[background] duration-500 ease-in-out ${
        isLoaded
          ? "bg-[url('/src/assets/lazyLoad/bookshelves-high.jpg')]"
          : "bg-[url('/src/assets/lazyLoad/bookshelves-low.jpg')]"
      }`}
    >
      <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center gap-10 bg-lp-brown-t">
        <h1 className="text-neutral-50 text-5xl font-bold tracking-widest drop-shadow-md">
          {heading}
        </h1>
        <div className="px-4 py-3 flex rounded-xl text-sm font-light bg-neutral-100 dark:text-lp-brown drop-shadow-md">
          {navigation.map((m, i) => (
            // <Link to={m.to} key={m.name}>
            //   {m.name}
            // </Link>
            <p key={i}>
              {m}
              {i < navigation.length - 1 && "  /  "}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PageBanner;
