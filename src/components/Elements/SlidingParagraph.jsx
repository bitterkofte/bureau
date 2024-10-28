import useInView from "../../hooks/useInView";

const SlidingParagraph = ({ children }) => {
  const introRef = useInView();
  return (
    <div ref={introRef} className="mb-8 text-intro">
      {children}
    </div>
  );
};
export default SlidingParagraph;
