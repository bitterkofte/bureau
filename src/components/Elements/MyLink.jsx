import { Link, useNavigate } from "react-router-dom";

const MyLink = ({ children, to }) => {
  // const navigate = useNavigate();

  // const handleLinkClick = (to) => {
  //   navigate(to, { replace: true, state: {} });
  // };

  return (
    <Link
      to={to}
      className="hover:cursor-pointer text-neutral-300 hover:text-neutral-50  transition-all"
    >
      {children}
    </Link>
  );
};
export default MyLink;
