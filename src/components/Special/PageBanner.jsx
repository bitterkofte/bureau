import { Link } from "react-router-dom";

const PageBanner = ({ heading, navigation }) => {
  return (
    <div className="relative bg-[url('/src/assets/bookshelves.jpg')] bg-cover bg-center h-96 select-none">
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
