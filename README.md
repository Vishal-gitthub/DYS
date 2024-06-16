# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

import { MyContext } from "./DarkModeContext/Context";

<!-- --------------------------------------- -->

// const { theme } = useContext(MyContext);
// useEffect(() => {
// const htmlDoc = document.querySelector("html");
// if (theme === "light") {
// htmlDoc.style.color = "white";
// htmlDoc.style.background = "#3c3c3c";
// } else {
// htmlDoc.style.color = "black";
// htmlDoc.style.background = "white";
// }
// });

  <!-- ^ apply this in APP.jsx  -->

// this is button for darkmode provider just apply component somewhere to change the document to dark mode
// import Button from "../DarkModeContext/Button";

# DYS

 <div className="h-p-tempLeft">
          <h1
            style={{
              fontSize: "2.5em",
            }}
          >
            We Provide <br /> &nbsp;
            <TypeAnimation
              sequence={[
                " Web Devlopment",
                3000,
                " Digital Services",
                3000,
                " UI/UX Designers",
                3000,
              ]}
              wrapper="div"
              speed={250}
              deletionSpeed={"250"}
              style={{
                display: "inline-block",
                color: `var(--orange)`,
                WebkitTextStroke: "0px",
              }}
              repeat={Infinity}
            ></TypeAnimation>
          </h1>
          <p>
            The leading platform to effortlessly scale and optimize your
            subscription business.
          </p>
          <div className="buttonss">
            <NavLink className="btnDesign" to="/RequestPage">
              Request for Demo
            </NavLink>
            <button className="btnDesign_2">Talk to an expert</button>
          </div>
          <div>
            <div className="introText">
              <span>
                | Evolve and achieve new business heights with our simplified
                managed services designed to accelerate digital goals and
                improve overall ROI for your business.
              </span>
            </div>
          </div>
        </div>
        <div className="h-p-tempRyt">
          <img src={tempRytImg} alt="" />
        </div>
