import BulletHeader from "../Elements/BulletHeader";
import useInView from "../../hooks/useInView";

const HPSection = ({ children, title, id }) => {
  const introRef = useInView();
  return (
    <div>
      <div className="border-[1px] my-10"></div>
      <BulletHeader id={id}>{title}</BulletHeader>
      <div ref={introRef} className="mt-4 mb-8 text-intro">
        {children}
      </div>
    </div>
  );
};
export default HPSection;
