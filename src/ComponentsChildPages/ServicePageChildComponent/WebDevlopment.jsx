import React from "react";
import { Link } from "react-router-dom";
import "../../Compo~Styles/ServicePageChild-CSS/WebDevlopmentPage.css";
// importing images
import websiteDes from "../../ImagesFile/ServicesPageImg/web-design-slid-head.png";
import { _colorExp } from "gsap/gsap-core";
import visionImg from "../../ImagesFile/ServicesPageImg/vision.jpg";
import haveIdeaImg from "../../ImagesFile/ServicesPageImg/haveAnIdea.jpg";
const WebDevlopment = () => {
  return (
    <div>
      <section className="webDevHeader">
        <div className="webDevHeaderContent">
          <div className="webDesImg">
            <img src={websiteDes} alt="" />
          </div>
          <h1>
            <span>Web Design Company Lucknow </span>
            <br />
            CRAFTING UNIQUE WEB DESIGNS THAT ENAGAGE USERS
          </h1>
          <p>
            Develop Yourself is an established website designing company in
            Lucknow. We provide a plethora of website designing services that
            help you to increase your business potential online.
          </p>
        </div>
      </section>

      <section className="sectionBgGray">
        <h1 className="webD-ConHead">Hire Us For</h1>
        <div className="webD-CardCont">
          <div className="webD-Cards">
            <div>
              <h1>Design</h1>
              <p>
                Our web design team brings years of experience in core design
                principles to create the perfect website for your needs
              </p>
            </div>
            <div>
              <h1>Development</h1>
              <p>
                Seeking tailored solutions for your website? Our team
                specializes in developing and delivering websites that precisely
                meet your needs.”
              </p>
            </div>
            <div style={{ border: "none" }}>
              <h1>Marketing</h1>
              <p>
                With researched digital marketing strategies, we ensure new
                customers and clients discover your business.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <marquee
            style={{ fontSize: "32px", color: "gray", paddingTop: "50px" }}
          >
            “We are a team of 12 web experts with over 4 years of experience in
            website building and online marketing, dedicated to helping
            businesses thrive online.”
          </marquee>
        </div>
      </section>
      <div className="webDVision">
        <div>
          <div>
            <h1>Mission.</h1>
            <p style={{ maxWidth: "450px" }}>
              Our mission is to empower our clients to use the internet to its
              full potential by providing affordable, effective, custom design
              and marketing solutions.
            </p>
          </div>
          <div>
            <h1>Vision.</h1>
            <p style={{ maxWidth: "450px" }}>
              Our vision is to create a world where everyone has access to the
              internet, and where the digital landscape is changing at a pace
              that is both exciting and challenging.
            </p>
          </div>
        </div>
        <div
          style={{
            maxWidth: "500px",
            opacity: "80%",
          }}
        >
          <img
            src={visionImg}
            alt="visionImg"
            width="100%"
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>
      <section className="padding-lftRyt">
        <div className="webD-CardCont" style={{ marginTop: "10%" }}>
          <div className="webD-Cards">
            <div className=" bord-none">
              <h1> Have a Project in mind?</h1>
              <p>
                We can help you bring your ideas to life. Let’s talk about what
                we can build and raise together.
              </p>
              <Link to="/RequestPage">
                <button className="btnDesign">Contact Us</button>
              </Link>
            </div>
            <div style={{ maxWidth: "500px" }} className=" bord-none">
              <img src={haveIdeaImg} alt="" width="100%" />
            </div>
          </div>
        </div>
        <div className="buildingBuisness">
          <h1>Let us together build a flourishing business</h1>
          <br />
          <p>
            When you partner with us, you’re not just growing your business
            alone. We have your back and are dedicated to contributing to the
            growth of your entire team and organization. If you’re seeking the
            right agency to help build a strong online presence and drive more
            conversions and revenue, look no further – we are here to help!
          </p>
        </div>
      </section>
      <section className="otherFeatures">
        <div className="webD-Cards">
          <div>
            <h1>Website Development</h1>
          </div>
          <div>
            <h1>Website Maintenance</h1>
          </div>
          <div>
            <h1>Mobile App Development</h1>
          </div>
          <div className="bord-none">
            <h1>Domain Registration</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevlopment;
