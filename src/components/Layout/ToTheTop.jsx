import { BiUpArrow } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const ToTheTop = () => {
  const [moveUp, setMoveUp] = useState(false);
  const buttonRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (
        // window.innerHeight + window.scrollY >=
        // document.body.offsetHeight * 0.7
        window.scrollY >= 200
      )
        setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    // Cleanup function
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      ref={buttonRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
        cursor: isVisible ? "pointer" : "default",
      }}
      onMouseEnter={() => setMoveUp(true)}
      onMouseLeave={() => setMoveUp(false)}
      onClick={scrollToTop}
      className="fixed bottom-3 right-3 z-10 text-white p-4 bg-lp-brown-lighter rounded-full drop-shadow-lg cursor-pointer"
    >
      <BiUpArrow
        className={`${
          moveUp ? "-translate-y-1" : "translate-y-0"
        } transition-all`}
      />
    </div>
  );
};
export default ToTheTop;
