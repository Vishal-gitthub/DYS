import React, { useRef, useState } from "react";
import "../Compo~Styles/RequestformStyle.css";
import bgImg from "../ImagesFile/glassMorphismBg.jpg";
import emailjs from "@emailjs/browser";
const RequestFormPage = () => {
  const formRef = useRef();
  const handleChange = () => {
    console.log("getting data...");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_n5f02al", "template_jg17rns", formRef.current, {
        publicKey: "lzGMDBvi2naPnxELZ",
      })
      .then(
        () => {
          console.log("success");
        },
        (error) => {
          console.log("failed...", error.text);
        }
      );
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        width: "100vw",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundOrigin: "content-box",
        height: "100%",
      }}
    >
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="inputContainer">
          <div className="inputsContent">
            <div className="left-rytContentHandler">
              <div className="inputLeftCont">
                <input
                  type="text"
                  id="name"
                  className="formInputs"
                  name="from_name"
                  placeholder="Full Name*"
                  required
                  onChange={handleChange}
                />

                <input
                  type="email"
                  name="work_Email"
                  id="userEmail"
                  className="formInputs"
                  placeholder="Work Email*"
                  required
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="formInputs"
                  placeholder="Company Name*"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="inputRytCont">
                <select
                  id="country"
                  name="country"
                  className="countryDropDown formInputs"
                  required
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Your Country
                  </option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="GB">United Kingdom</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                  <option value="IN">India</option>
                  <option value="CN">China</option>
                  <option value="JP">Japan</option>
                  <option value="KR">South Korea</option>
                  <option value="AU">Australia</option>
                  <option value="SG">Singapore</option>
                  <option value="SE">Sweden</option>
                  <option value="FI">Finland</option>
                  <option value="IL">Israel</option>
                </select>
                <input
                  type="text"
                  name="subject"
                  className="formInputs"
                  placeholder="Job Title"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  onChange={handleChange}
                  name="phone"
                  className="formInputs"
                  placeholder="Business Phone*"
                />
              </div>
            </div>
            <textarea
              name="message"
              onChange={handleChange}
              id="query"
              className="formTxtArea"
              placeholder="Write Your Query"
            ></textarea>
            <input
              type="text"
              name="to_name"
              value="DYS"
              placeholder="Subject"
              className="d-none"
            />

            <button className="submitbtnDesign" type="submit" value="Send">
              <span>Submit</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RequestFormPage;
