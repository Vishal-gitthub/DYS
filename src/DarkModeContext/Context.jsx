import { useState } from "react";
import { createContext } from "react";

export const MyContext = createContext();
export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const themeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <MyContext.Provider value={{ theme, themeToggle }}>
      {children}
    </MyContext.Provider>
  );
};
