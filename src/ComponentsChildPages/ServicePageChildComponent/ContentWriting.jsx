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
import whtUhGet from "../../ImagesFile/ServicesPageImg/what-you-get.gif";
import imagineFinance from "../../ImagesFile/ServicesPageImg/reimagine-finance.webp";
// our key feature pending mastroke
const ContentWriting = () => {
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
              Content <span style={{ color: "white" }}> that</span> Connects
            </b>
          </div>
          <h1>
            <br />
            CREATIVE CONTENT, CONVERTIVE GOALS.
          </h1>
          <p style={{ fontSize: "16px", fontWeight: "normal" }}>
            A Robust Content Marketing Strategy to Generate Organic Traffic,
            Create Brand Awareness, and Target More Prospects <br /> A
            well-crafted content marketing strategy is essential for generating
            organic traffic, creating brand awareness, and targeting more
            prospects effectively.
          </p>
        </div>
      </section>
      <div className="sectionBgGray"></div>
      <section style={{ background: "#cae5ff6a", padding: "30px 10px" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "2.8em",
            paddingBottom: "30px",
          }}
        >
          Associated with
        </h1>
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
      </section>
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
              We strategize content for online store optimization. Content
              marketing solutions are all tailored to your needs.
            </p>
          </div>
          <div className="okfCard">
            <img src={whyUs} alt="" />
            <h1>Why Us?</h1>
            <p>
              With our creative and analytical approach, we always try to bring
              out simple resolutions to your complex problems.
            </p>
          </div>
          <div className="okfCard">
            <img src={whtUhGet} alt="" />
            <h1>What You Get</h1>
            <p>
              A Holistic Content Strategy to supplement your marketing and
              branding efforts. Customized solutions for problems.
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
              <h2>Let's come to the point</h2>
              <p>
                The range of services and strategies is fine, but what are the
                numbers?
              </p>
              <ul>
                <li>IMPROVED SERP POSITION</li>
                <li>TRAFFIC, LEADS, AND REVENUE</li>
                <li>BETTER USER EXPERIENCE</li>
                <li>CUSTOMER ENGAGEMENT</li>
                <li>BRAND AWARENESS & RECOGNITION</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentWriting;
