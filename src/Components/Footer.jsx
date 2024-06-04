import React from "react";
import "../Compo~Styles/FooterStyle.css";
import dys from "../LOGO/dys.png";
import fbLogo from "../ImagesFile/FooterImages/facebook-svgrepo-com.svg";
import xLogo from "../ImagesFile/FooterImages/x.svg";
import youtubeLogo from "../ImagesFile/FooterImages/youtube.svg";
import instagramLogo from "../ImagesFile/FooterImages/instagramLogo.svg";
import mapLogo from "../ImagesFile/FooterImages/mapLogo.png";
const Footer = () => {
  return (
    <div>
      <div className="footerContainer">
        <div className="footerLogoCont">
          <img src={dys} alt="" className=" footerLogoCont " />
        </div>
        <div className="socialLogos">
          <img src={fbLogo} alt="" />
          <img src={xLogo} alt="" />
          <img src={youtubeLogo} alt="" />
          <img src={instagramLogo} alt="" />
        </div>
        <span>@2024 Develop Yourself Services Limited</span>
        <a
          href="https://www.ingrammicro.com/en-us/legal/privacy-statement"
          style={{ textDecoration: "underline" }}
        >
          Privacy Statement
        </a>
        <div>About Us</div>
        <p style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <img src={mapLogo} alt="Map-Logo" width={40} height={40} />
          Plot No.:. C41,Gauri Vihar,
          <br />
          Sarojini Nagar,Lucknow
        </p>
      </div>
    </div>
  );
};
export default Footer;
