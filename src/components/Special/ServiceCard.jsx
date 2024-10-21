const ServiceCard = ({ text, icon }) => {
  return (
    <div>
      <span>{icon}</span>
      <h4>{text}</h4>
    </div>
  );
};
export default ServiceCard;
