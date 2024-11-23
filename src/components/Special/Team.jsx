import { BiRightArrow } from "react-icons/bi";
import TeamCard from "./TeamCard";
import { members } from "../../data/members";
import { LiaAngleDownSolid } from "react-icons/lia";
import { useEffect, useRef, useState } from "react";

const Team = () => {
  const elementRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    // const fontSize = parseFloat(
    //   window
    //     .getComputedStyle(document.documentElement)
    //     .getPropertyValue("font-size")
    // );

    // const checkScreenWidth = () =>
    //   setIsWideScreen(
    //     window.innerWidth >=
    //       members.length * 288 + (members.length - 1) * (fontSize * 1.25)
    //   );

    const checkScreenWidth = () =>
      setIsWideScreen(elementRef.current.scrollHeight < 600);
    // console.log(
    //   "?: ",
    //   elementRef.current.offsetHeight,
    //   elementRef.current.clientHeight,
    //   elementRef.current.scrollHeight
    // );
    // console.log("members.length: ", fontSize);
    checkScreenWidth();
    // Update on resize
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  return (
    <div className="mb-5">
      {/* <div>{isWideScreen ? <h1>YES</h1> : <h1>no</h1>}</div> */}
      <div
        ref={elementRef}
        className={`team relative ${
          isExpanded ? "expanded" : ""
        } flex flex-wrap justify-center gap-5 mb-3 overflow-hidden`}
      >
        {members.map((m) => (
          <TeamCard
            key={m.name}
            img={m.img}
            name={m.name}
            title={m.title}
            mail={m.mail}
            phone={m.phone}
          />
        ))}
        {!isWideScreen && (
          <div
            className={`absolute bottom-0 w-full h-16 bg-gradient-to-b from-transparent transition-all duration-200 ${
              isExpanded ? "to-transparent" : "to-white dark:to-lp-brown-dark"
            } `}
          ></div>
        )}
        {/* <div className="design-1">
        <figure>
        <img src={emre} alt="Emre Leblebici" />
        <p className="title">Emre Leblebici</p>
        </figure>
        </div>
        <div className="design-1">
        <figure>
        <img src={beyza} alt="Beyza Petek" />
        <p className="title">Beyza Petek</p>
        </figure>
        </div> */}

        {/* <div className="design-2">
        <img src={emre} alt="" />
        <div className="card-content">
        <h2 className="card-title">Emre Leblebici</h2>
        <p className="drop-shadow-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        exercitationem iste, voluptatum, quia explicabo laboriosam rem
        adipisci voluptates cumque, veritatis
        </p>
        </div>
        <a href="#" className="button">
        <span className="flex gap-3 items-center">
        Find out more
        <BiRightArrow />
        </span>
        </a>
      </div> */}
      </div>
      {!isWideScreen && (
        <div className="w-full flex justify-center">
          <button
            onClick={() => setIsExpanded((prev) => !prev)}
            className="p-2 text-xl bg-lp-brown text-white rounded-full"
          >
            <LiaAngleDownSolid
              className={`${
                isExpanded ? "rotate-180" : "rotate-0"
              } transition-all ease-in-out`}
            />
          </button>
        </div>
      )}
    </div>
  );
};
export default Team;
