const Link = ({ children }) => {
  return (
    <div className=" hover:cursor-pointer hover:text-blue-600 dark:hover:text-blue-300">
      {children}
    </div>
  );
};
export default Link;
