const BulletHeader = ({ children, id }) => {
  return (
    <h2
      id={id}
      className="text-3xl ?text-center font-extrabold pt-3 mt-5 mb-5 select-none text-black dark:text-neutral-200"
    >
      <span className="relative z-0">
        <div className="absolute top-[-2px] -left-2 -z-10 p-3 bg-lp-green-lighter dark:bg-lp-green rounded-full select-none" />
        {children}
      </span>
    </h2>
  );
};
export default BulletHeader;
