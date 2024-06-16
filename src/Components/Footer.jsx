import React from "react";
import "../Compo~Styles/FooterStyle.css";
import fbLogo from "../ImagesFile/FooterImages/facebook-svgrepo-com.svg";
import xLogo from "../ImagesFile/FooterImages/x.svg";
import youtubeLogo from "../ImagesFile/FooterImages/youtube.svg";
import instagramLogo from "../ImagesFile/FooterImages/instagramLogo.svg";
import mapLogo from "../ImagesFile/FooterImages/mapLogo.png";
import { Link } from "react-router-dom";
import dys from "../LOGO/dys.svg";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="logoCont">
          <img src={dys} alt="" />
        </div>
        <div className="footer-container">
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>
              We are a leading company providing top-notch digital marketing
              services. Our goal is to enhance your online presence and drive
              business growth with our innovative strategies.
            </p>
          </div>
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contactUs">Contact Us</Link>
              </li>
              <li>
                <Link to="/aboutUs">About</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>Email: develop@dys.com</p>
            <p>Phone: +123 456 7890</p>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                justifyContent: "center",
              }}
            >
              <img src={mapLogo} alt="Map-Logo" width={40} height={40} />
              Plot No.:. C41,Gauri Vihar,
              <br />
              Sarojini Nagar,Lucknow
            </p>
          </div>
          <div className="footer-section social">
            <h2>Follow Us</h2>
            <div className="social-icons">
              <img src={fbLogo} alt="" />
              <img src={xLogo} alt="" />
              <img src={youtubeLogo} alt="" />
              <img src={instagramLogo} alt="" />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>@2024 Develop Yourself Services Limited</span>
          <a
            href="https://www.ingrammicro.com/en-us/legal/privacy-statement"
            style={{ textDecoration: "underline", marginLeft: "10px" }}
          >
            Privacy Statement
          </a>
        </div>
      </footer>
    </>
  );
};
export default Footer;
