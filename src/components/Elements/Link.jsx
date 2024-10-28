const Link = ({ children }) => {
  return (
    <div className=" hover:cursor-pointer hover:text-lp-brown-l1 dark:hover:text-lp-brown-lightest transition-all">
      {children}
    </div>
  );
};
export default Link;
