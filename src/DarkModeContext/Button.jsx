import React, { useContext } from "react";
import { MyContext } from "./Context";

const Button = () => {
  const { themeToggle } = useContext(MyContext);
  return (
    <div>
      <button onClick={themeToggle}>
      <svg width="32px" height="32px" viewBox="0 0 48.00 48.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M24.0033 4L29.2737 9.27038H38.7296V18.7263L44 23.9967L38.7296 29.2737V38.7296H29.2737L24.0033 44L18.7264 38.7296H9.27036V29.2737L4 23.9967L9.27036 18.7263V9.27038H18.7264L24.0033 4Z" fill=" #ff6103" stroke="#000000" stroke-width="1.6799999999999997" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M27 17C27 25 22 26 17 26C17 30 23.5 34 29 30C34.5 26 31 17 27 17Z" fill="#43CCF8" stroke="white" stroke-width="1.6799999999999997" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </button>
    </div>
  );
};

export default Button;
