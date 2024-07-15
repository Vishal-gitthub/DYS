import React from "react";
import "../../Compo~Styles/ServicePageChild-CSS/WebDevlopmentPage.css";
import emailHeadingImg from "../../ImagesFile/ServicesPageImg/emailMarketingHImg.png";
import "../../Compo~Styles/ServicePageChild-CSS/EmailMsPage.css";
const EmailMS = () => {
  // use flex later in email emailHeadingImg

  return (
    <div>
      <section className="webDevHeader">
        <div className="webDevHeaderContent">
          <div className="webDesImg">
            <i
              style={{
                color: "var(--orange)",
                fontSize: "3.8rem",
                fontWeight: "700",
              }}
            >
              Email Marketing Services
            </i>
          </div>
          <h1>
            <br />
            Maximize Your ROI with Expert Email Marketing Services
          </h1>
          <p style={{ fontSize: "16px", fontWeight: "normal" }}>
            Among all the digital marketing channels, email marketing offers the
            highest return on investment. Maximize your results with
            SeeResponse, your trusted partner in email marketing. As a
            full-service email marketing agency, we specialize in planning,
            building, and executing various email and CRM campaigns, including
            newsletters, product launches, promotions, and transactional emails.
            Let us help you achieve your marketing goals.
          </p>
        </div>
      </section>
      <div className="sectionBgGray"></div>
      <div className="emailMsHeadingContainer">
        <div className="e-leftContent">
          <div>
            <h1>The Agency with Top Email Marketing Services.</h1>
            <div
              style={{
                width: "150px",
                height: "5px",
                margin: "20px 0",
                background: "var(--orange)",
              }}
            ></div>
            <p>
              SeeResponse is a full-service email marketing agency focused on
              using email marketing as a growth strategy for our clients. We
              work hand in hand with your in-house team to ensure you can
              leverage the strengths of both sides, innovate, and continue to
              grow. Ride on our expertise and knowledge to discover new ways of
              expanding your software and internet business.
            </p>
            <p>
              We believe in delivering results and building long-term
              partnerships with our clients. At SeeResponse, we’re all about
              transparency, open lines of communication, and constantly striving
              to improve. This ensures that we’re on the same page as you and
              adapt to your changing needs every step of the way. With
              SeeResponse, you can trust that your email marketing efforts are
              always fresh and effective.
            </p>
            <p>
              SeeResponse is one of the top email marketing companies in the
              United States. We are proud to be recognized by Clutch as a Market
              Leader in the Email Marketing category on their Leaders Matrix.
            </p>
          </div>
        </div>
        <div className="e-rightContent">
          <div>
            <img src={emailHeadingImg} alt="" />
          </div>
        </div>
      </div>
      <section>
        <div className="approachMethod">
          <h1>
            How to approach Email marketing? Do it right. Do it with the best.
          </h1>
          <p>
            We specialize in delivering successful email campaigns for SaaS
            startups – campaigns that engage prospects, drive traffic and sales,
            and retain customers. We don’t just execute email programs; we bring
            innovation to your email marketing and provide strategic
            recommendations to turn it into a revenue-generating channel for
            your business. By constantly monitoring industry trends, consumer
            behaviors, and emerging technologies, we tailor our strategies to
            ensure maximum effectiveness for SaaS startups.
          </p>
        </div>
      </section>
    </div>
  );
};

export default EmailMS;
