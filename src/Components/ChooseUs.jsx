import React from "react";
import "../Compo~Styles/AboutStyle.css";
import { NavLink } from "react-router-dom";
import googlePartner from "../ImagesFile/AboutPageImg/smallImages/googlePartner.webp";
import shopify from "../ImagesFile/AboutPageImg/smallImages/shopify.webp";
import semrush from "../ImagesFile/AboutPageImg/smallImages/semrush-logo-june-ad.webp";
import mondayCom from "../ImagesFile/AboutPageImg/smallImages/2560px-Monday_logo.svg.webp";
import wordPress from "../ImagesFile/AboutPageImg/smallImages/wordpress-logo.webp";
import dysFeatures from "../ImagesFile/AboutPageImg/dysIsDifferent.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ChooseUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          speed: 500,
        },
      },
    ],
  };

  return (
    <div className="chooseUsBg">
      <div className="AboutTopImg">
        <div>
          <NavLink to="/">···Home···</NavLink>
          <p className="responsive-fs-28">
            Reasons for hiring a digital marketing agency
          </p>
        </div>
      </div>
      <div className="successStories">
        <div className="ssHeading">
          <h1 style={{ fontWeight: "800", fontSize: "42px" }}>
            See How We’ve Helped Others Succeed <br />
            <span style={{ fontWeight: "400", color: "var(--orange)" }}>
              Their Success Stories Could Be Yours
            </span>
          </h1>
        </div>
        <div className="CarouselCont">
          <Slider {...settings}>
            <div>
              <div className="carouselContent">
                <h1>Company Name</h1>
                <p>Our Succes Story</p>
              </div>
            </div>
            <div>
              <div className="carouselContent">
                <h1>Company Name</h1>
                <p>Our Succes Story</p>
              </div>
            </div>
            <div>
              <div className="carouselContent">
                <h1>Company Name</h1>
                <p>Our Succes Story</p>
              </div>
            </div>
            <div>
              <div className="carouselContent">
                <h1>Company Name</h1>
                <p>Our Succes Story</p>
              </div>
            </div>
            <div>
              <div className="carouselContent">
                <h1>Company Name</h1>
                <p>Our Succes Story</p>
              </div>
            </div>
          </Slider>
        </div>
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
        <h1 style={{ fontWeight: "800", fontSize: "42px" }}>
          There are many marketing agencies <br />
          <span style={{ fontWeight: "400", color: "var(--orange)" }}>
            but why choose us?
          </span>
        </h1>
        <div className="dysFeatureCont">
          <img src={dysFeatures} alt="" />
        </div>
      </div>
      <div className="dysAnimateCont">
        <div className="dysAnimate">
          <span>DEVELOP YOURSELF</span>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
