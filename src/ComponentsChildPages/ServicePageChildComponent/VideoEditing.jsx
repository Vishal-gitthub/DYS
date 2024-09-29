import React, { useEffect, useRef } from "react";
import videoVM from "../../ImagesFile/ServicesPageImg/videoEditing_Page.mp4";
import "../../Compo~Styles/ServicePageChild-CSS/VideoEditingM.css";
import gsap from "gsap";
import corporateVImg from "../../ImagesFile/ServicesPageImg/VE_Corporate-Videos.png";
import productAdImg from "../../ImagesFile/ServicesPageImg/VE_Product_Advertisement_Videos.png";
import socialMediaImg from "../../ImagesFile/ServicesPageImg/VE_Social_Media_Videos.png";
import brandPromotionalVideoImg from "../../ImagesFile/ServicesPageImg/VE_Brand_Promotional_Videos.png";
import testimonialVideoImg from "../../ImagesFile/ServicesPageImg/VE_Testimonial_Videos.png";
import ExplainerVimg from "../../ImagesFile/ServicesPageImg/VE_Explainer_Videos.png";
import psIcon from "../../ImagesFile/ServicesPageImg/Adobe_Photoshop_Icon.png";
import adobePreProIcon from "../../ImagesFile/ServicesPageImg/Adobe_Premiere-Pro_Icon.png";
import afterEffectsIcon from "../../ImagesFile/ServicesPageImg/Adobe_After_Effects_Icon-1536x1497.png";
import preRushIcon from "../../ImagesFile/ServicesPageImg/Adobe_Premiere_Rush_Icon.png";
import daVinciIcon from "../../ImagesFile/ServicesPageImg/DaVinci_Resolve_Icon-1536x1536.png";
import videoEdMid from "../../ImagesFile/ServicesPageImg/Video_Editing_Mid_video.mp4";
import syrImg from "../../ImagesFile/ServicesPageImg/Submit_Your_Request_Icon_VE.gif";
import vEgAImg from "../../ImagesFile/ServicesPageImg/Video_Editor_Gets_Aligned_Icon_VE.gif";
import vRaImg from "../../ImagesFile/ServicesPageImg/Video_Review_Approval_Icon_VE.gif";
const Ecommerce = () => {
  const buttonRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      buttonRef.current,
      { x: "-100%", opacity: "0" },
      { x: "0%", opacity: "1", duration: 1.6, ease: "power2.out" }
    );
  });
  return (
    <div>
      {/* SECTION ~ 1 */}
      <section>
        <video
          src={videoVM}
          className="frontVideoV"
          autoPlay
          loop
          muted
        ></video>
        <div className="videoContent" ref={buttonRef}>
          <h2
            style={{
              color: "var(--orange)",
              fontSize: "16px",
              letterSpacing: "1px",
              lineHeight: "20px",
            }}
          >
            Driven by creative passion, our aim is to create engaging video
            content to support your brand awareness, recognition, and brand
            recall goals.
          </h2>
          <button>Get A Free Brand Consultation</button>
        </div>
      </section>
      {/* SECTION ~ 2 */}
      <section>
        <div className="memberList">
          <div>
            <h1>10+</h1>
            <p>CREATIVE MEMBERS</p>
          </div>
          <div>
            <h1>359+</h1>
            <p>DESIGNS COMPLETED</p>
          </div>
          <div>
            <h1>400+</h1>
            <p>CLIENTS SERVED</p>
          </div>
        </div>
        <div>
          <div className="wtWeOfr">
            <h1>
              What <span style={{ color: "var(--orange)" }}>We</span> Offer
            </h1>
            <p>Video content tailored to Your Unique Needs</p>
          </div>
          <div className="ve-serviceSection">
            <div>
              <div>
                <img src={corporateVImg} alt="" />
                <p>Corporate Videos</p>
              </div>
              <div>
                <img src={productAdImg} alt="" />
                <p>Product Advertisement Videos</p>
              </div>
              <div>
                <img src={socialMediaImg} alt="" />
                <p>Social Media Videos </p>
              </div>
            </div>
            <span className="blockLine"></span>
            <div>
              <div>
                <img src={brandPromotionalVideoImg} alt="" />
                <p>Brand Promotional Videos</p>
              </div>
              <div>
                <img src={testimonialVideoImg} alt="" />
                <p>Testimonial Videos</p>
              </div>
              <div>
                <img src={ExplainerVimg} alt="" />
                <p>Explainer Videos</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION ~ 3 */}
      <section>
        <div className="ourTechStacks">
          <h1>
            We Partner with the Finest Technology to Bring Your Ideas to Life
          </h1>
          <div className="techStackCards">
            <div>
              <img src={psIcon} alt="" />
              <p>Adobe Photoshop</p>
            </div>
            <div>
              <img src={adobePreProIcon} alt="" />
              <p>Adobe Premiere Pro</p>
            </div>
            <div>
              <img src={afterEffectsIcon} alt="" />
              <p>Adobe After Effects</p>
            </div>
            <div>
              <img src={preRushIcon} alt="" />
              <p>Adobe Premiere Rush</p>
            </div>
            <div>
              <img src={daVinciIcon} alt="" />
              <p>DaVinci Resolve</p>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION ~ 4 */}
      <section>
        <div className="getHelpContainer">
          <div className="getHelp">
            <h1>Want to Get Your Brand Noticed? Get Help from Professionals</h1>
            <button className="chkraBtnUi">Get In Touch</button>
          </div>
          <div>
            <div className="videoEdiContainer">
              <video src={videoEdMid} autoPlay muted loop></video>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION ~ 5 */}
      <section className="howItWorks">
        <div>
          <h1>How It Works</h1>
        </div>
        <div className="hiw-Cards">
          <div className="hiw-CardCont">
            <div>
              <img src={syrImg} alt="" />
            </div>
            <span>
              <h2>Submit Your Request</h2>
              <p>Share video requirements and brand assets.</p>
            </span>
          </div>
          <div className="hiw-CardCont">
            <div>
              <img src={vEgAImg} alt="" />
            </div>
            <span>
              <h2>Video Editor Gets Aligned</h2>
              <p>Selected video editor is briefed with a finalized timeline.</p>
            </span>
          </div>
          <div className="hiw-CardCont">
            <div>
              <img src={vRaImg} alt="" />
            </div>
            <span>
              <h2>Video Review & Approval</h2>
              <p>
                Videos shared for client review & if needed, a revision request
                is submitted.
              </p>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ecommerce;
