import React from "react";
import "../Compo~Styles/AboutStyle.css";
import tyBrandDigital from "../ImagesFile/AboutPageImg/9027293.jpg";
import { NavLink, Link } from "react-router-dom";
import founderLogo from "../ImagesFile/AboutPageImg/founderImg.png";
import digitalDream from "../ImagesFile/AboutPageImg/digitalDream.jpg";
import ServiceDetailImg from "../ImagesFile/AboutPageImg/ServiceDetailsCard.webp";
import digitalMarketing from "../ImagesFile/AboutPageImg/digital-marketing-1.webp";
const About = () => {
  return (
    <>
      <section>
        <div className="AboutTopImg">
          <div>
            <NavLink to="/">···Home···</NavLink>
            <p>About Us</p>
          </div>
        </div>
        <div className="apCard-container">
          <div className="apCard-Content">
            <Link to="/RequestPage">
              <div className="h-img-1"></div>
              <div className="apCard">
                <h2>Innovative Pioneers</h2>
                <p>
                  Exploring new digital frontiers, we turn concepts into
                  exceptional digital creations, leading the way in industry
                  innovation.
                </p>
              </div>
            </Link>
          </div>
          <div className="apCard-Content">
            <Link to="/RequestPage">
              <div className="h-img-2"></div>
              <div className="apCard">
                <h2>Collaborative Creation </h2>
                <p>
                  Working closely with clients, we combine visions and expertise
                  to craft unique digital experiences tailored to your specific
                  needs.
                </p>
              </div>
            </Link>
          </div>
          <div className="apCard-Content">
            <Link to="/RequestPage">
              <div className="h-img-3"></div>
              <div className="apCard">
                <h2>Beyond Boundaries </h2>
                <p>
                  Expanding horizons, we venture beyond conventional limits to
                  deliver extraordinary results and redefine what's possible.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="aboutCompany">
          <div className="ac-LftCont">
            <img src={tyBrandDigital} alt="" />
          </div>
          <div className="ac-rytCont">
            <h1>You Grow, We Grow! 🎉</h1>
            <p>
              We started 'Develop Yourself' because we saw too many businesses
              struggling with generic marketing that didn’t deliver results. Our
              passion is helping businesses break through the digital noise and
              achieve the growth they deserve. We’re not just an agency; we’re a
              true extension of your team, committed to delivering measurable
              success .
            </p>
            <div className="founderDetails">
              <img src={founderLogo} className="founderLogo" alt="" />
              <div>
                <h3>
                  Yash <br /> Srivastava
                </h3>
                <span>Founder & CEO</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="unfoldStoryCont">
          <div style={{ padding: "0 15px" }}>
            <div className="unfoldStoryContent">
              <h1>
                We Ignite Digital Dreams,
                <br />
                <span style={{ fontWeight: "300" }}>
                  Crafting Future Realities
                </span>
              </h1>
              <p style={{ fontSize: "18px", margin: "0" }}>
                Blending Imagination with Reality
              </p>
              <p>
                In our digital domain, art merges with technology, forging
                experiences beyond the conventional. Our quest transcends
                ordinary limits, morphing user interactions into immersive
                tales. Our craft not only redefines engagement but marries
                creative vision with digital precision.
              </p>
            </div>
            <div className="progressBar">
              <div className="progressBarHeading">
                <p>GLOBAL ENGAGEMENT</p>
                <p>95%</p>
              </div>
              <div className="bar">
                <div className="bar-1Progress"></div>
              </div>
              <div className="progressBarHeading">
                <p>CLIENT SATISFACTION</p>
                <p>98%</p>
              </div>
              <div className="bar">
                <div className="bar-2Progress"></div>
              </div>
              <div className="progressBarHeading">
                <p>PROJECT DELIVERY</p>
                <p>100%</p>
              </div>
              <div className="bar">
                <div className="bar-3Progress"></div>
              </div>
            </div>
          </div>
          <div className="unfoldStoryImg">
            <img src={digitalDream} alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className="ourCraftCont">
          <h1>
            Weaving Digital Dreams into <br />
            <span style={{ fontWeight: "300" }}> Reality</span>
          </h1>
          <div className="craftContainer">
            <div className="craftContent">
              <div>
                <h1>Creativity Echoes</h1>
                <p>
                  In our space, creativity isn't just a tool; it's our language.
                  Each project is a conversation, an exchange where your vision
                  becomes a living, breathing piece of the digital tapestry.
                </p>
              </div>
              <div>
                <h1>Customized Journeys</h1>
                <p>
                  Your brand's story is unique; we honor that by crafting
                  experiences that speak directly to your audience, turning each
                  interaction into a personal moment of connection.
                </p>
              </div>
            </div>
            <div className="serviceDetailImg">
              <img src={ServiceDetailImg} alt="" />
            </div>
            <div>
              <div>
                <h1>Creativity Echoes</h1>
                <p>
                  In our space, creativity isn't just a tool; it's our language.
                  Each project is a conversation, an exchange where your vision
                  becomes a living, breathing piece of the digital tapestry.
                </p>
              </div>
              <div>
                <h1>Customized Journeys</h1>
                <p>
                  Your brand's story is unique; we honor that by crafting
                  experiences that speak directly to your audience, turning each
                  interaction into a personal moment of connection.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="dysAnimateCont">
          <div className="dysAnimate">
            <span>DEVELOP YOURSELF</span>
          </div>
        </div>
        <div className="marketingPlan">
          <div>
            <img src={digitalMarketing} alt="" />
          </div>
          <div>
            <h1>
              Get Your Free
              <span style={{ color: "var(--orange)" }}>Marketing Plan!</span>
            </h1>
            <p>
              Get 20+ new marketing ideas that are better & best than what you
              have.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
