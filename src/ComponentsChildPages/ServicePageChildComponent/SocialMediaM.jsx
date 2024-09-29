import React from "react";
import "../../Compo~Styles/ServicePageChild-CSS/WebDevlopmentPage.css";
import "../../Compo~Styles/ServicePageChild-CSS/ContentWritingPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import amazonAds from "../../ImagesFile/ServicesPageImg/amazonAds.png";
import bingAds from "../../ImagesFile/ServicesPageImg/BingAds.png";
import googlePartner from "../../ImagesFile/ServicesPageImg/googlePartner.jpg";
import metaPartener from "../../ImagesFile/ServicesPageImg/metaPartener.png";
import shopifyPartner from "../../ImagesFile/ServicesPageImg/shopifyExperts.png";
import oneSolution from "../../ImagesFile/ServicesPageImg/one-stop-solution.gif";
import whyUs from "../../ImagesFile/ServicesPageImg/why-us.gif";
import imagineFinance from "../../ImagesFile/ServicesPageImg/reimagine-finance.webp";
import whtUhGet from "../../ImagesFile/ServicesPageImg/what-you-get.gif";
const SocialMediaM = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <section className="webDevHeader">
        <div className="webDevHeaderContent">
          <div className="webDesImg">
            <b>
              Social<span style={{ color: "white" }}> Media</span> Marketing
            </b>
          </div>
          <h1>
            <br />
            Innovative ideas, Impactful results.
          </h1>
          <p style={{ fontSize: "16px", fontWeight: "normal" }}>
            We build authentic content & a social media strategy that invokes
            desired emotions in the audience's minds with the help of our
            experts.
          </p>
        </div>
      </section>
      <div className="sectionBgGray"></div>
      <div className="cmSliderContainer">
        <Slider {...settings}>
          <div className="cmSliderContent">
            <img src={googlePartner} alt="" />
          </div>
          <div className="cmSliderContent">
            <img src={metaPartener} alt="" />
          </div>
          <div className="cmSliderContent">
            <img src={bingAds} alt="" />
          </div>
          <div className="cmSliderContent">
            <img src={shopifyPartner} alt="" />
          </div>
          <div className="cmSliderContent">
            <img src={amazonAds} alt="" />
          </div>
        </Slider>
      </div>
      <section>
        <div className="okf">
          <h1>
            OUR <span style={{ color: "var(--orange)" }}> KEY</span> FEATURE
          </h1>
          <p>WHAT DO WE OFFER?</p>
        </div>

        <div className="okfCardsContainer">
          <div className="okfCard">
            <img src={oneSolution} alt="" />
            <h1>One-Stop Solution</h1>
            <p>
              We create authentic and engaging content, from social media audits
              to social media management. We will do it all.
            </p>
          </div>
          <div className="okfCard">
            <img src={whyUs} alt="" />
            <h1>Why Us?</h1>
            <p>
              Periodic updates, performance monitoring, and attention to detail
              guarantee minimum concern and maximum satisfaction.
            </p>
          </div>
          <div className="okfCard">
            <img src={whtUhGet} alt="" />
            <h1>What You Get</h1>
            <p>
              Our team works 24*7 to understand the client's requirements,
              delivering flexibility, customization and quality.
            </p>
          </div>
        </div>
        <div className="keyHighlights">
          <h1>
            Key <span style={{ color: "var(--orange)" }}> Highlights</span>
          </h1>

          <div className="kfContent">
            <div>
              <img src={imagineFinance} alt="" />
            </div>
            <div>
              <h2>Let the numbers speakt</h2>
              <p>
                Why make vague statements and promises when your numbers speak
                for themselves
              </p>
              <ul>
                <li>
                  Average Traffic Growth
                  <span style={{ color: "var(--orange)", paddingLeft: "30px" }}>
                    91%
                  </span>
                </li>
                <li>
                  Client Satisfaction Rate
                  <span style={{ color: "var(--orange)", paddingLeft: "30px" }}>
                    75%
                  </span>
                </li>
                <li>
                  Conversion Rate
                  <span style={{ color: "var(--orange)", paddingLeft: "30px" }}>
                    80%
                  </span>
                </li>
                <li>
                  Increase in ROAS
                  <span style={{ color: "var(--orange)", paddingLeft: "30px" }}>
                    25%
                  </span>
                </li>
                <li>
                  Client Recurring Rate
                  <span style={{ color: "var(--orange)", paddingLeft: "30px" }}>
                    70%
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaM;
