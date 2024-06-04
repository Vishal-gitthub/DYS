import React from "react";
import "../Compo~Styles/AboutStyle.css";
import tyBrandDigital from "../ImagesFile/AboutPageImg/campaign-creators-gMsnXqILjp4-unsplash.jpg";
import { NavLink } from "react-router-dom";
import tradingUpSvg from "../ImagesFile/AboutPageImg/treding-Up-svgrepo-com.svg";
import mapLogo from "../ImagesFile/AboutPageImg/MapLogo.svg";
import customerService from "../ImagesFile/AboutPageImg/customerService.svg";
import emailSvg from "../ImagesFile/AboutPageImg/email.svg";

const About = () => {
  return (
    <div>
      <div className="AboutTopImg">
        <div>
          <NavLink to="/">···Home···</NavLink>
          <p>About Us</p>
        </div>
      </div>

      <div className="aboutHeading">
        <h1>About Us</h1>
      </div>
      <div className="aboutPageContent">
        <div className="DysHistory">
          <p>
            DYS was established by Crazybrand Bazaar Pvt. Ltd. in 2015,
            transforming from a concept into reality. In May 2016, we evolved
            into a full-fledged digital marketing agency, inspired by Prime
            Minister Narendra Modi's Digital India Campaign. This initiative
            propelled us to become the leading digital marketing company in
            Lucknow.
          </p>
          <p>
            Beyond digital marketing, we provide a comprehensive range of
            services including Public Relations (PR), branding consultancy, Blue
            tick verification, YouTube marketing, whiteboard animation,
            application and software solutions, e-commerce solutions, app
            development, image branding, lead generation, search engine
            optimization (SEO), and more.
          </p>
          <p>
            In today's rapidly evolving technological landscape, staying
            competitive in the digital era is a challenge for many companies.
            However, with DYS, one of India's premier digital marketing
            agencies, this challenge becomes an opportunity. As most advertising
            shifts online, businesses worldwide are adopting digital marketing
            strategies to thrive in the global market.
          </p>
        </div>

        <div className="aboutCardsContainer">
          <div className="apCard">
            <img src={tyBrandDigital} alt="" className="apCardImg" />
            <div className="apCardContent">
              <span style={{ fontSize: "32px" }}>Take your Brand</span>
              <h1
                style={{
                  fontSize: "42px",
                  margin: "0",
                  color: "var(--orange)",
                }}
              >
                One Step Further, Digitally
              </h1>
              <div>
                <p>
                  Our current clientage incorporates politicians,
                  schools/colleges; start-ups, Non Government Organizations
                  (NGO), local organizations, real estate, financing and many
                  other companies who now maintain a constructive online
                  presence. We are not limited to local businesses as we
                  entertain and offer our services to international companies as
                  well. Our clients have registered favorable results in their
                  business from our services and have submitted positive
                  feedback.
                </p>
                <p>
                  We tend to clients’ customized plans and packages depending on
                  their budget and service need for their business. We, at DYS
                  understand how important online presence has become and ensure
                  that our client’s expectations are duly met.
                </p>
                <p>
                  It is our priority to serve our clients with fabulous,
                  creative, innovative, result-oriented strategies and seek
                  their approval before moving forward with the implementation
                  part. Our team is dedicated towards clients, passionate about
                  their work and manufacture creative content, attractive
                  graphics and appealing animation.
                </p>
              </div>
            </div>
          </div>
          <div className="apCard">
            <div className="apCardContent">
              <span style={{ fontSize: "32px" }}>Benefits of</span>
              <h1
                style={{
                  fontSize: "42px",
                  margin: "0",
                  color: "var(--orange)",
                }}
              >
                Working with us
              </h1>
              <div>
                <p>
                  In today’s rapidly evolving and fiercely competitive
                  marketplace, we understand the importance of staying ahead and
                  distinguishing oneself from the competition. DYS is among the
                  select few branding agencies in Lucknow that provide a wide
                  array of digital marketing solutions tailored to our clients’
                  needs. We pride ourselves on our transparent communication and
                  collaboration with our clients, always valuing their input,
                  feedback, and project specifications.
                </p>
                <p>
                  The DYS team is committed to boosting our clients’ digital
                  footprint by managing their social media profiles and crafting
                  their websites to match their vision. Our innovative and
                  technical crew ensures that our clients’ needs are met
                  promptly and the results align with their expectations, aiming
                  to provide a rewarding experience.
                </p>
              </div>
            </div>
            <img src={tyBrandDigital} alt="" className="apCardImg" />
          </div>
        </div>
        <div className="ourFaculty">
          <h1>DYS proves to be a phenomenal choice, here’s why:</h1>
          <ul>
            <li>360 ̊ Digital marketing service</li>
            <li>Cost effective solutions</li>
            <li>Innovative brand marketing strategies</li>
            <li>Highly skilled team</li>
            <li>Personal account manager</li>
            <li>Quick implementation</li>
            <li>Customized solutions</li>
            <li>Digital engagement</li>
          </ul>
          <p>
            At DYS, our pursuit of excellence ensures that every design,
            concept, strategy, or content is only finalized with our client's
            approval. Should there be any modifications or adjustments needed,
            our team prioritizes their swift implementation.
          </p>
          <p>
            At DYS, we believe that our progress is intertwined with our
            clients' success. To ensure their growth, we operate with utmost
            efficiency and effectiveness, aiming to provide our clients with
            unparalleled customer satisfaction.
          </p>
        </div>
      </div>
      <div className="ourDetails">
        <div >
          <img src={tradingUpSvg} alt="" />
          <h1 className="ourDetailsHeading">Get in Touch with us</h1>
        </div>
        <div className="ourDetailsBtmCard">
          <div>
            <img src={mapLogo} alt="" />
            <h1>Main Office</h1>
            <p>
              Vishwanath Enterprises Pvt. Ltd. <br />
              C41. South Block Street Gauri Vihar <br />
              Sarojini Nagar, Lucknow ,226008
            </p>
          </div>
          <div>
            <img src={customerService} alt="" />
            <h1>Call Us</h1>
            <p>
              +91098765431 <br />
              +91098765431 <br />
            </p>
          </div>
          <div>
            <img src={emailSvg} alt="" />
            <h1>Email Us</h1>
            <p>Info@Random.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
