import BulletHeader from "../Elements/BulletHeader";
import useInView from "../../hooks/useInView";

const HPSection = ({ children, title, id }) => {
  const introRef = useInView();
  return (
    <div>
      <div className="border-[1px] mb-10"></div>
      <BulletHeader id={id}>{title}</BulletHeader>
      <p ref={introRef} className="mb-16 text-intro">
        {children}
      </p>
    </div>
  );
};
export default HPSection;
