import { useState } from "react";

const TeamCard = ({ img, name, title, mail, phone }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className="w-72 p-4 bg-lp-brown/40 bg-lp-green/30 hover:bg-lp-green/50 hover:shadow-xl rounded-xl overflow-hidden transition-all"
    >
      {/* SECTION PICTURE */}
      <div className={`?avatar ${isFocused ? "?focused" : ""}`}>
        <img
          className={`${
            isFocused ? "rounded-full" : "rounded-xl"
          } w-full mb-3 object-cover bg-white transition-all ease-in-out duration-200`}
          src={img}
          alt={name}
        />
      </div>
      {/* SECTION TEXT */}
      <div
        className={`${
          isFocused ? "?-translate-y-10" : "?translate-y-0"
        } transition-all ease-in-out duration-200`}
      >
        <h4 className="font-extrabold">{name}</h4>
        <p className="mb-1 font-light text-sm text-gray-600">{title}</p>
        <div
          className={`${
            isFocused ? "?h-7" : "?h-0"
          } overflow-hidden transition-all ease-in-out duration-200`}
        >
          <p className="w-fit font-light text-xs text-gray-600 hover:text-white cursor-pointer">
            {phone}
          </p>
          <p className="w-fit font-light text-xs text-gray-600 hover:text-white cursor-pointer">
            {mail}
          </p>
        </div>
      </div>
    </div>
  );
};
export default TeamCard;
