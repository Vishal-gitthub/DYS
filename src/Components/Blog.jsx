import React from "react";
import "../Compo~Styles/BlogStyle.css";
import { NavLink } from "react-router-dom";
import blogHeadingImg from "../ImagesFile/BlogPageImg/Blog.png";
import marketingImg from "../ImagesFile/BlogPageImg/digital-marketing-trends.jpg";
import headerMarketingImg from "../ImagesFile/BlogPageImg/Header-Digital-Marketing-1.jpg";
import b2b from "../ImagesFile/BlogPageImg/B2B-Social-Media-Marketing-Tips-That-Can-Help-You-Shine-Online.jpg";
import reasonForDigitalMarketing from "../ImagesFile/BlogPageImg/Reasons-Why-You-Need-Digital-Marketing-Strategy-in-2023.jpg";
import tipsForDigitalMarketing from "../ImagesFile/BlogPageImg/Tips-to-Create-a-Goal-Oriented-Social-Media-Marketing-Strategy.jpg";
import modernDesigns from "../ImagesFile/BlogPageImg/Modern-Website-Designing-Trends-That-You-Shouldnt-Miss-in-2022.jpg";
const Blog = () => {
  return (
    <div>
      <header>
        <div className="headerImg">
          <div>
            <NavLink to="/">···Home···</NavLink>
            <h1>Blog</h1>
          </div>
        </div>
        <div className="blog-headingCont">
          <div>
            <div>
              <h1>
                LET’S TAKE A DIVE INTO THE WORLD OF
                <br />
                <span style={{ color: "var(--orange)" }}>
                  TECHNOLOGY & DIGITAL MEDIA!
                </span>
              </h1>
            </div>
            <p>
              The pacing world of technology and digital media is constantly
              evolving. Stay tuned to our blogs by staying updated about
              interesting facts and happenings, and be ready for all that is set
              to happen next!
            </p>
          </div>
          <div className="blogHeadingImgCont">
            <img src={blogHeadingImg} alt="" />
          </div>
        </div>
      </header>
      <section>
        <div className="blog-cards-container">
          <div className="blog-card">
            <img src={marketingImg} alt="" />
            <h1>Trusted Digital Marketing Company Lucknow: Drive Results</h1>
            <p>
              The role of a digital marketing agency, how to choose a digital
              marketing agency, our digital marketing services, and why these
              services are important.
            </p>
            <span>
              <b>Date :</b> 09-03-2023
            </span>
          </div>
          <div className="blog-card">
            <img src={headerMarketingImg} alt="" />
            <h1>Digital Marketing Trends You Can’t Ignore in 2023</h1>
            <p>
              Table of Contents: Real-Time Messaging, Influencer Marketing
              Remains Effective, Email Marketing is Not Dead, Video-Based
              Content, and other emerging trends.
            </p>
            <span>
              <b>Date :</b> 22-02-2023
            </span>
          </div>
          <div className="blog-card">
            <img src={b2b} alt="" />
            <h1>
              B2B Social Media Marketing Tips That Can Help You Shine Online
            </h1>
            <p>
              Table of Contents: What exactly is B2B social media marketing?
              Develop Your Brand Voice and Identity, Maintain Consistency,
              Create Engaging Content, Choose Your Social Media, and more.
            </p>
            <span>
              <b>Date :</b> 11-11-2023
            </span>
          </div>
          <div className="blog-card">
            <img src={reasonForDigitalMarketing} alt="" />
            <h1>Reasons Why You Need Digital Marketing Strategy in 2023</h1>
            <p>
              Table of Contents: Lack of Direction, Understanding Your Target
              Audience, Preventing Competitors from Taking Over, Boosting
              Conversion Rates, Gaining Reputation and Customer Loyalty, and
              more.
            </p>
            <span>
              <b>Date :</b> 18-05-2024
            </span>
          </div>
          <div className="blog-card">
            <img src={tipsForDigitalMarketing} alt="" />
            <h1>
              Tips to Create a Goal-Oriented Social Media Marketing Strategy
            </h1>
            <p>
              Table of Contents: Set Goals That Make Sense, Research Your Target
              Audience, Establish Crucial KPIs, Choose the Right Platforms, and
              more.
            </p>
            <span>
              <b>Date :</b> 17-09-2023
            </span>
          </div>
          <div className="blog-card">
            <img src={modernDesigns} alt="" />
            <h1>
              Modern Website Designing Trends That You Shouldn’t Miss in 2024
            </h1>
            <p>
              Gaining a competitive edge and maintaining success in this
              fast-paced digital space is challenging but achievable with the
              latest web design strategies and technologies.
            </p>
            <span>
              <b>Date :</b> 22-05-2024
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
