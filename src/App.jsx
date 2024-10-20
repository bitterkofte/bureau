import { useEffect, useState } from "react";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";

function App() {
  // const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  // const toggleTheme = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  //   localStorage.setItem("theme", newTheme);
  // };

  // Add or remove 'dark' class on the root element based on theme state
  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <>
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
}

export default App;
