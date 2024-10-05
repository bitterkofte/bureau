const Link = ({ children }) => {
  return (
    <div className=" hover:cursor-pointer hover:text-sky-700 dark:hover:text-blue-300">
      {children}
    </div>
  );
};
export default Link;
