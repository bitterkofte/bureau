import { useState } from "react";
import { FaUser } from "react-icons/fa";

const TeamCard = ({ img, name, title, mail, phone }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className="avatar-card w-72 p-4 bg-lp-green/40 dark:bg-lp-green-dark hover:shadow-lg rounded-xl overflow-hidden transition-shadow duration-200"
    >
      {/* SECTION PICTURE */}
      <div className={`avatar`}>
        {img !== "none" ? (
          <img
            className={`avatar-img w-full mb-3 object-cover bg-white`}
            src={img}
            alt={name}
          />
        ) : (
          <div className="avatar-img w-full h-[256px] mb-3 bg-white flex justify-center items-center">
            <FaUser className="text-9xl text-gray-400" />
          </div>
        )}
      </div>
      {/* SECTION TEXT */}
      <div className={``}>
        <h4 className="font-extrabold">{name}</h4>
        <p className="mb-1 font-light text-sm text-gray-600 dark:text-white">
          {title}
        </p>
        <div className={`overflow-hidden`}>
          <p className="w-fit font-light text-xs text-gray-600 dark:text-white hover:text-white cursor-pointer">
            {phone}
          </p>
          <p className="w-fit font-light text-xs text-gray-600 dark:text-white hover:text-white cursor-pointer">
            {mail}
          </p>
        </div>
      </div>
    </div>
  );
};
export default TeamCard;
