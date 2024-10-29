import emre from "../../assets/team/emre_leblebici.png";
import beyza from "../../assets/team/beyza_petek.png";
import { BiRightArrow } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";

const Team = () => {
  return (
    <div className="team flex flex-wrap gap-5 mb-5 selection:bg-transparent">
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto:wght@300&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      /> */}
      <div className="design-1">
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
      </div>

      <div className="design-2">
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
      </div>
    </div>
  );
};
export default Team;
