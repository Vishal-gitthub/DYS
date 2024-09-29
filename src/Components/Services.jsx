import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../Compo~Styles/ServicesStyle.css";
import seo from "../ImagesFile/ServicesPageImg/Search-Engine-Optimization.webp";
import emailMarketing from "../ImagesFile/ServicesPageImg/Email-Marketing.png";
import smm from "../ImagesFile/ServicesPageImg/Social-Media-Marketing.webp";
import EcommerceMarketing from "../ImagesFile/ServicesPageImg/Ecommerce-Marketing.png";
import contentMarketing from "../ImagesFile/ServicesPageImg/Content-Marketing.png";
import webDevlopment from "../ImagesFile/ServicesPageImg/Website-Development-Illustrator.webp";
import googlePartner from "../ImagesFile/AboutPageImg/smallImages/googlePartner.webp";
import shopify from "../ImagesFile/AboutPageImg/smallImages/shopify.webp";
import semrush from "../ImagesFile/AboutPageImg/smallImages/semrush-logo-june-ad.webp";
import mondayCom from "../ImagesFile/AboutPageImg/smallImages/2560px-Monday_logo.svg.webp";
import wordPress from "../ImagesFile/AboutPageImg/smallImages/wordpress-logo.webp";
import dysFeatures from "../ImagesFile/AboutPageImg/DYS-VS-OTHER-AGENCIES-2.jpg";
import dysFeaturesImg2 from "../ImagesFile/AboutPageImg/dysVsOtherAgenciesImg2.jpg";
import { Link } from "react-router-dom";
const Services = () => {
  const [featureImg, setFeatureImg] = useState(dysFeatures);
  const updateImage = () => {
    if (window.innerWidth <= 768) {
      setFeatureImg(dysFeaturesImg2);
    } else {
      setFeatureImg(dysFeatures);
    }
  };
  useEffect(() => {
    updateImage();
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, []);
  return (
    <div>
      <div className="headerImg">
        <div>
          <NavLink to="/">···Home···</NavLink>
          <h1>Services</h1>
        </div>
      </div>
      <div className="serviceHeading">
        <h1>
          Explore Our Services and <br />
          <span style={{ color: "var(--orange)" }}>Start Growing</span>{" "}
        </h1>
      </div>
      <div className="serviceCards">
        <Link to="/webDevlopment">
          <div className="sCards">
            <div>
              <img src={webDevlopment} alt="WebDev Banner" />
            </div>
            <h2>
              Website <span className="orangeColor"> Development</span>
            </h2>
            <p className="lmBtn">
              Learn More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="24px"
                height="24px"
                fill="var(--orange)"
              >
                <path
                  d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
                  data-name="3-Arrow Right"
                />
              </svg>
            </p>
          </div>
        </Link>
        <Link to="/SEOService">
          <div className="sCards">
            <div>
              <img src={seo} alt="SEO Banner" />
            </div>
            <h2>
              Search Engine<span className="orangeColor"> Optimisation</span>
            </h2>
            <p className="lmBtn">
              Learn More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="24px"
                height="24px"
                fill="var(--orange)"
              >
                <path
                  d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
                  data-name="3-Arrow Right"
                />
              </svg>
            </p>
          </div>
        </Link>
        <Link to="/emailServices">
          <div className="sCards">
            <div>
              <img src={emailMarketing} alt="EmailMarketing Banner" />
            </div>
            <h2>
              Email <span className="orangeColor"> Marketing</span>
            </h2>
            <p className="lmBtn">
              Learn More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="24px"
                height="24px"
                fill="var(--orange)"
              >
                <path
                  d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
                  data-name="3-Arrow Right"
                />
              </svg>
            </p>
          </div>{" "}
        </Link>
        <Link to="/writingContent">
          <div className="sCards">
            <div>
              <img src={contentMarketing} alt="ContentMarketing Banner" />
            </div>
            <h2>
              Content <span className="orangeColor"> Marketing</span>
            </h2>
            <p className="lmBtn">
              Learn More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="24px"
                height="24px"
                fill="var(--orange)"
              >
                <path
                  d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
                  data-name="3-Arrow Right"
                />
              </svg>
            </p>
          </div>
        </Link>
        <Link to="/smm">
          <div className="sCards">
            <div>
              <img src={smm} alt="SMM Banner" />
            </div>
            <h2>
              Social Media <span className="orangeColor"> Marketing</span>
            </h2>
            <p className="lmBtn">
              Learn More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="24px"
                height="24px"
                fill="var(--orange)"
              >
                <path
                  d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
                  data-name="3-Arrow Right"
                />
              </svg>
            </p>
          </div>
        </Link>
        <Link to="/video-editing">
          <div className="sCards">
            <div>
              <img src={EcommerceMarketing} alt="ECommerce Banner" />
            </div>
            <h2>
             Video Editing
              <span className="orangeColor"> Marketing</span>
            </h2>
            <p className="lmBtn">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="24px"
                height="24px"
                fill="var(--orange)"
              >
                <path
                  d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
                  data-name="3-Arrow Right"
                />
              </svg>
            </p>
          </div>
        </Link>
      </div>
      <div className="partners">
        <div
          className="partnersLogos
          "
        >
          <div>
            <img src={wordPress} alt="" />
          </div>
          <div>
            <img src={semrush} alt="" />
          </div>
          <div>
            <img src={googlePartner} alt="" />
          </div>
          <div>
            <img src={mondayCom} alt="" />
          </div>
          <div>
            <img src={shopify} alt="" />
          </div>
        </div>
      </div>
      <div className="ChooseUs">
        <h1>
          There are many marketing agencies <br />
          <span style={{ fontWeight: "400", color: "var(--orange)" }}>
            but why choose us?
          </span>
        </h1>
        <div className="dysFeatureCont">
          <img src={featureImg} alt="feature Img" />
        </div>
      </div>
      <div className="stepsToReach">
        <h1 className="sectionHeading">
          Increase Your Sales with Our
          <br />
          <span style={{ fontWeight: "400", color: "var(--orange)" }}>
            Digital Marketing Solutions
          </span>
        </h1>

        <div className="serviceCards sCard-2Cont ">
          <div className="sCards sCardsWidth">
            <h2>
              Request for a <span className="orangeColor"> Qoute</span>
            </h2>
            <p>
              Schedule a consultation to discuss your goals and receive a
              customized marketing roadmap.
            </p>
            <p className="lmBtn">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="24px"
                height="24px"
                fill="var(--orange)"
              >
                <path
                  d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
                  data-name="3-Arrow Right"
                />
              </svg>
            </p>
          </div>
          <div className="sCards sCardsWidth">
            <h2>
              Choose Your <span className="orangeColor">Service</span>
            </h2>
            <p>
              Explore our range of services and select the solution that best
              fits your needs and budget.
            </p>
            <p className="lmBtn">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="24px"
                height="24px"
                fill="var(--orange)"
              >
                <path
                  d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
                  data-name="3-Arrow Right"
                />
              </svg>
            </p>
          </div>
          <div className="sCards sCardsWidth">
            <h2>
              Get <span className="orangeColor">Started</span>
            </h2>
            <p>
              Collaborate with our expert team to kickstart your project for
              marketing transformation.
            </p>
            <p className="lmBtn">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="24px"
                height="24px"
                fill="var(--orange)"
              >
                <path
                  d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
                  data-name="3-Arrow Right"
                />
              </svg>
            </p>
          </div>
          <div className="sCards sCardsWidth">
            <h2>
              Growth Your <span className="orangeColor"> Business</span>
            </h2>
            <p>
              Experience the results – more leads, increased brand awareness,
              and measurable ROI.
            </p>
            <p className="lmBtn">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="24px"
                height="24px"
                fill="var(--orange)"
              >
                <path
                  d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
                  data-name="3-Arrow Right"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
