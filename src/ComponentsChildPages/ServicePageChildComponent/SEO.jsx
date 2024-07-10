import React from "react";
import "../../Compo~Styles/ServicePageChild-CSS/WebDevlopmentPage.css";
import "../../Compo~Styles/ServicePageChild-CSS/SeoPage.css";
const SEO = () => {
  return (
    <div>
      <section className="webDevHeader">
        <div className="webDevHeaderContent">
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <span
              style={{
                color: "var(--orange)",
                fontSize: "3.8rem",
                fontWeight: "700",
              }}
            >
              Search Engine Optimisation
            </span>
            <br />
            <p style={{ fontSize: "38px", color: "white" }}>
              We build traffic and generate leads
            </p>
          </div>
        </div>
      </section>
      <div className="sectionBgGray"></div>
      <section style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "3.5rem" }}>
          Specialist <span style={{ color: "var(--orange)" }}> SEO</span> Agency
        </h1>
        <p
          style={{ fontSize: "1.5rem", padding: "10px 10%", color: "#3c3c3c" }}
        >
          Search Engine Optimisation or SEO, is the process of affecting the
          visibility of a website or a web page in a search engine's natural or
          organic search results. Businesses use search engine optimisation as
          an effective way of building organic traffic to their websites and
          thus increasing the amount of potential customers that view their
          products or services. Unlike Pay Per Click traffic, SEO campaigns can
          take time to generate results, but improved search engine rankings and
          levels of traffic that can be achieved can help to take your business
          to the next level.
        </p>
        <h2 style={{ paddingTop: "20px" }}>
          WE HELP BUSINESSES BUILD TRAFFIC AND GENERATE LEADS... IT'S WHAT WE
          DO...
        </h2>
        <h2 style={{ color: "var(--orange)", paddingTop: "40px" }}>
          Contact us today for a comprehensive SEO review
        </h2>
      </section>
      {/* #Section 2 */}
      <section className="SeoSection2">
        <h1>Our SEO process</h1>
        <span style={{ color: "var(--orange)" }}>Research</span>
        <p>
          Research plays an absolutely vital role in all of our SEO projects.
          Every client is unique, their products and services are all vastly
          different and their target industries and demographics are often
          highly specific. Drilling down into these specific details provides
          vital insights that can be invaluable when developing a targetted
          campaign that will deliver equally exceptional results.
        </p>
        <span style={{ color: "var(--orange)" }}>Analysis</span>
        <p>
          The next stage in our process is in depth analysis of the online
          competition. Which keywords are generating significant traffic? What
          type of content is delivering results in the SERP’s? Where can we
          effectively source high quality backlinks for our client? These are
          all questions that require in-depth analysis and the results of that
          analysis provide the backbone for our campaigns.
        </p>
        <span style={{ color: "var(--orange)" }}>Creation</span>
        <p>
          Now we can move into the creative phase of the process, using all the
          information from our research and analysis we can craft engaging copy
          that will not only work for search engines, but engage potential
          visitors and provide them with the answers that they are looking for.
          With unique, engaging copy that appeals to the target demographic, the
          whole process is set on course for success.
        </p>
        <span style={{ color: "var(--orange)" }}>Outreach</span>
        <p>
          Backlinks used to be ‘the be all and end all’ of SEO 5 years ago.
          Things have changed drastically over the last few years, backlinks are
          still important today but the way we view them has completely changed,
          it really is a case of quality over quantity and the true value of an
          SEO agency is the ability to source these relevant quality backlinks
          for their clients.
        </p>
        <span style={{ color: "var(--orange)" }}>Reporting</span>
        <p>
          Our clients play a vital role in all of our campaigns, the closer we
          can work together the more chance of success we have. Education and
          reporting are two things that we take very seriously, if we can
          educate our clients and keep them up to date with campaign
          developments then trust is developed and that is something that we
          value above all else. Relationships are everything to us.
        </p>
      </section>
    </div>
  );
};

export default SEO;
