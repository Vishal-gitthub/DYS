import React, { useState } from "react";
import tempRytImg from "../ImagesFile/HomePageImg/undraw_building_websites_i78t.svg";
import "../Compo~Styles/HomePageStyle.css";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TypeAnimation } from "react-type-animation";
import carouselImg from "../ImagesFile/HomePageImg/pexels-rdne-8068694.jpg";
import carouselImg2 from "../ImagesFile/HomePageImg/carousel-img.jpg";
import carouselImg3 from "../ImagesFile/HomePageImg/carousel-img-3.jpg";
import carouselmg4 from "../ImagesFile/HomePageImg/carousel-img-2.jpg";
import carouselImg5 from "../ImagesFile/HomePageImg/carouselImg-5.jpg";
import pricingImg from "../ImagesFile/HomePageImg/PricingImage.png";
import ecoSystem from "../ImagesFile/HomePageImg/ecoSystem.png";
import coSellers from "../ImagesFile/HomePageImg/coSellers.png";
import reseller from "../ImagesFile/HomePageImg/reseller-Image.png";
import catalogManage from "../ImagesFile/HomePageImg/CatalogManagementImg.png";
import americaMoviImg from "../ImagesFile/HomePageImg/smallImages/logo-america-movil.png";
import TelefonicImg from "../ImagesFile/HomePageImg/smallImages/logo-telefonica.png";
import Lenovo from "../ImagesFile/HomePageImg/smallImages/lenovoLogo.png";
import Intel from "../ImagesFile/HomePageImg/smallImages/intellogo.png";
import advania from "../ImagesFile/HomePageImg/smallImages/logo-advania.png";
import bechtle from "../ImagesFile/HomePageImg/smallImages/logo-bechtle.png";
import baracuda from "../ImagesFile/HomePageImg/smallImages/logo-barracuda.png";
import malwareBytes from "../ImagesFile/HomePageImg/smallImages/logo-alwarebytes.png";
import arrowSvg from "../ImagesFile/HomePageImg/smallImages/arrow.svg";
import marketPlace from "../ImagesFile/HomePageImg/marketPlace.jpg";
import googleBuilding from "../ImagesFile/HomePageImg/googleBuilding.jpg";
import group_meeting from "../ImagesFile/HomePageImg/group_meeting.jpg";
import itTechs from "../ImagesFile/HomePageImg/itTechs.jpg";
import digiMark from "../ImagesFile/HomePageImg/digiMark.jpg";
import b2c from "../ImagesFile/HomePageImg/b2c.jpg";
import b2b from "../ImagesFile/HomePageImg/b2b.jpg";
const Home = () => {
  let settings = {
    dots: true,
    Infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <div>
      <section className="homePageFirstSection" id="firstSection">
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
      </section>
      <section className="widgetWraper">
        <h1 className="wrapperTitle">
          Realize the Business Benefits of Managed Services
        </h1>
        <div className="h-p-carousel">
          <Slider {...settings}>
            <div className="carouselContent">
              <img src={carouselImg} alt="" />
            </div>
            <div className="carouselContent">
              <img src={carouselImg2} alt="" />
            </div>
            <div className="carouselContent">
              <img src={carouselImg3} alt="" />
            </div>
            <div className="carouselContent">
              <img src={carouselmg4} alt="" />
            </div>
            <div className="carouselContent">
              <img src={carouselImg5} alt="" />
            </div>
            <div className="carouselContent">
              <img src={group_meeting} alt="" className="Wh-Content" />
            </div>
          </Slider>
        </div>
        <div className="widgetCards">
          <div className="widgetCard1">
            <img src={marketPlace} alt="" />
            <div>
              <h1 className="widgetCardHeading">
                Bring your marketplace to life!
              </h1>
              <div className="Wh-Content">
                <p>Add your own products and services</p>
                <p>Bring your existing direct contracts</p>
                <p>Harness our catalog to expand your offering</p>
                <p>Scale globally with multi-language & currency</p>
                <p>Embrace a headless approach</p>
              </div>
            </div>
          </div>
          <div className="widgetCard2">
            <div>
              <h1 className="widgetCardHeading">Catalog Management</h1>
              <div className="Wh-Content">
                <p>
                  Create detailed product offers with attractive solutions
                  bundles.
                </p>
              </div>
            </div>
            <img src={googleBuilding} alt="" />
          </div>
        </div>
        <div className="explorePlatforms">
          <div>
            <h1 className="widgetCardHeading">
              Every workflow required to win in the subscription economy
              SaaSified
            </h1>
          </div>
          <div className="txtAlignCenter">
            <button className="btnDesign">Explore Platform</button>
          </div>
          <div className="widgetCardBottomContainer">
            <div className="widgetCardBCont">
              <img src={reseller} alt="" />
              <h2>Reseller Management</h2>
              <p>
                Grow your channel with complete management of your n-tier
                resellers.
              </p>
              <a href="">learn More</a>
            </div>
            <div className="widgetCardBCont">
              <img src={catalogManage} alt="" />
              <h2>Catalog management</h2>
              <p>
                Create detailed product offers with attractive solutions
                bundles.
              </p>
              <a href="">learn More</a>
            </div>
            <div className="widgetCardBCont">
              <img src={coSellers} alt="" />
              <h2>Co-sell with Hyperscalers</h2>
              <p>Publish products on AWS, Azure and Google Cloud platform. </p>
              <a href="">learn More</a>
            </div>
            <div className="widgetCardBCont">
              <img src={ecoSystem} alt="" />
              <h2>Ecosystem Marketplace</h2>
              <p>
                Procure, purchase, and sell products globally in various
                currencies and languages.
              </p>
              <a href="">learn More</a>
            </div>
            <div className="widgetCardBCont">
              <img src={pricingImg} alt="" />
              <h2>Subscription & Billing</h2>
              <p>
                Simplify and automate the complex end-to-end ordering process.
              </p>
              <a href="">learn More</a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="leadingBrands">
          <h1 className="lbHeading">
            Join the world’s <span>leading brands.</span>
            <br /> Monetize with DYS.
          </h1>
        </div>
        <div className="lbCardsContainer">
          <div className="lbCardContHandler">
            <div className="lbCardContent">
              <div className="lbCardsImg">
                <img src={Lenovo} alt="" />
                <br />
                <img src={Intel} alt="" />
              </div>
              <div>
                <h3>Technology vendors</h3>
                <p>
                  Manage your cloud reselling business at a truly global scale
                  without having to worry about growing operational costs.
                </p>
                <a href="https://source.unsplash.com/500x500/?flowers">
                  Learn more
                </a>
              </div>
            </div>
            <div className="lbCardContent">
              <div className="lbCardsImg">
                <img src={americaMoviImg} alt="" />
                <br />
                <img src={TelefonicImg} alt="" />
              </div>
              <div>
                <h3>Telecommunications providers</h3>
                <p>
                  Increase ARPU and customer retention. Expand your B2B catalog
                  of cloud solutions and sell them at scale.
                </p>
                <a href="https://source.unsplash.com/500x500/?flowers">
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="lbCardContHandler">
            <div className="lbCardContent">
              <div className="lbCardsImg">
                <img src={advania} alt="" />
                <br />
                <img src={bechtle} alt="" />
              </div>
              <div>
                <h3>Managed services providers</h3>
                <p>
                  Drive ARR and reduce operational costs. Manage all SaaS
                  procurement and fulfillment on one platform.
                </p>
                <a href="https://source.unsplash.com/500x500/?flowers">
                  Learn more
                </a>
              </div>
            </div>
            <div className="lbCardContent">
              <div className="lbCardsImg">
                <img src={malwareBytes} alt="" />
                <br />
                <img src={baracuda} alt="" />
              </div>
              <div>
                <h3>Independent software vendors</h3>
                <p>
                  Subscriptionize your products and create value-added solutions
                  to sell directly to your customer or though your channel.
                </p>
                <a href="https://source.unsplash.com/500x500/?flowers">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="h-p-carousel">
          <Slider {...settings}>
            <div className="carouselContent">
              <img src={itTechs} alt="" />
            </div>
            <div className="carouselContent">
              <img src={digiMark} alt="" />
            </div>
            <div className="carouselContent">
              <img src={b2b} alt="" />
            </div>
            <div className="carouselContent">
              <img src={b2c} alt="" />
            </div>
          </Slider>
        </div>
        <div className="rqstDemo">
          <h1>
            Ready to get <br /> Started?
          </h1>
          <div>
            <NavLink className="btnDesign" to="/RequestPage">
              REQUEST A DEMO
            </NavLink>
          </div>
          {/* <RequestFormPage /> */}
        </div>
      </section>
      <a href="#firstSection">
        <img src={arrowSvg} alt="" />
      </a>
    </div>
  );
};

export default Home;
