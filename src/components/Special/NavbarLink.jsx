import { useState } from "react";
import PopupDrawer from "./PopupDrawer";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarLink = ({ href, links, text, popup, isNavbarVisible }) => {
  const [selectedPopup, setSelectedPopup] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const showDrawer = () => {
    setSelectedPopup(true);
    setIsAnimating(true);
  };

  const hideDrawer = () => {
    // const glitchPreventer = setTimeout(() => {
    //   if (!selectedPopup) {
    //     setIsAnimating(false);
    //     setTimeout(() => setSelectedPopup(false), 200);
    //   } else {
    //     setIsAnimating(true);
    //     setSelectedPopup(true);
    //     clearInterval(glitchPreventer);
    //   }
    // }, 200);
    setIsAnimating(false);
    setTimeout(() => setSelectedPopup(false), 200);
  };

  return (
    <li
      className="relative py-2"
      onMouseEnter={showDrawer}
      onMouseLeave={hideDrawer}
    >
      <Link
        // href={href}
        to={href}
        onClick={(event) => popup && event.preventDefault()}
        className={`flex gap-1 items-center hover:cursor-pointer ${
          isAnimating ? "text-lp-brown-l1 dark:text-lp-brown-lightest" : ""
        } transition-all`}
      >
        {text}
        {popup && <FaAngleDown />}
      </Link>
      {popup && selectedPopup && isNavbarVisible && (
        <PopupDrawer
          links={links}
          isAnimating={isAnimating}
          onMouseEnter={isAnimating && showDrawer}
          onMouseLeave={hideDrawer}
          isNavbarVisible={isNavbarVisible}
        />
      )}
    </li>
  );
};
export default NavbarLink;
