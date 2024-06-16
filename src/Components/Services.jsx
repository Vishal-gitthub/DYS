import React from "react";
import { NavLink } from "react-router-dom";
import "../Compo~Styles/ServicesStyle.css";
import webDeveloper from "../ImagesFile/ServicesPageImg/undraw_web_development_0l6v.svg";
const Services = () => {
  return (
    <div>
      <div className="headerImg">
        <div>
          <NavLink to="/">···Home···</NavLink>
          <h1>Services</h1>
        </div>
      </div>
      <div className="serviceP-Heading">
        <h1>Explore Our Services and</h1>
        <p> Start Growing</p>
        <p>
          Let’s work together to transform your online visibility, attract more
          customers, and achieve your biggest business goals.
        </p>
      </div>
      <div className="ServicesCards">
        <div>
          <img src={webDeveloper} alt="" />
          <h1>WEB DEVELOPER</h1>
          <a href="#">Learn More===)))</a>
        </div>
        <div>
          <img src={webDeveloper} alt="" />
          <h1>WEB DEVELOPER</h1>
        </div>
        <div>
          <img src={webDeveloper} alt="" />
          <h1>WEB DEVELOPER</h1>
        </div>
        <div>
          <img src={webDeveloper} alt="" />
          <h1>WEB DEVELOPER</h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
