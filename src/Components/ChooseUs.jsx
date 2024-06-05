import React from "react";
import "../Compo~Styles/AboutStyle.css";
import { NavLink } from "react-router-dom";
import handShake from "../ImagesFile/AboutPageImg/HandShake.jpg";
import happyPeople from "../ImagesFile/AboutPageImg/happyPeoples.jpg";
const ChooseUs = () => {
  return (
    <div>
      <div className="AboutTopImg">
        <div>
          <NavLink to="/">···Home···</NavLink>
          <p>Reasons for hiring a digital marketing agency</p>
        </div>
      </div>
      <div className="aboutPageContent">
        <div className="aboutCardsContainer">
          <div className="apCard">
            <img src={handShake} alt="handShakeImg" className="apCardImg" />
            <div className="apCardContent">
              <div>
                <p>
                  Considering starting your own digital marketing to save money?
                  Think again. Although it might seem convenient at first, the
                  reality is quite different.
                </p>
                <p>
                  Hiring a social media agency is always a smart choice. Why?
                  Engaging with an online marketing company will significantly
                  reduce your organizational costs. With a digital marketing
                  agency's team of creatives and experts, you won't need to
                  worry about thinking outside the box or selecting the most
                  suitable platforms for your social media marketing activities.
                </p>
                <p>
                  Hiring a top SEO company is an effective and cost-efficient
                  method, allowing you to manage both time and money more
                  efficiently. Rather than investing in hiring or training
                  employees on various social marketing tools, opting for a
                  digital marketing agency is a wise decision. These agencies
                  possess extensive knowledge about a range of online marketing
                  tools and their proper application and functioning, ensuring
                  your marketing efforts are both efficient and effective.
                </p>
              </div>
            </div>
          </div>
          <div className="apCard">
            <div className="apCardContent">
              <div>
                <p>
                  Hiring a top digital marketing company will provide you with a
                  fresh perspective on your business, helping you identify new
                  directions to attract more prospects for your existing
                  products and services.
                </p>
                <p>
                  Appointing a local marketing agency will always benefit your
                  organization. You can conduct face-to-face meetings, visit
                  their office in case of urgency, and the agency can
                  effectively identify your potential target audience using the
                  most suitable social media or digital marketing platforms.
                </p>
                <p>
                  DYS, the leading digital marketing company in Lucknow, has a
                  firm grasp of the digital landscape and boasts a team of
                  creative minds working together to achieve mutual goals and
                  deliver high-quality results to our clients.
                </p>
              </div>
            </div>
            <img src={happyPeople} alt="" className="apCardImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
