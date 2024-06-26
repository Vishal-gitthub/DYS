import React, { useCallback, useState } from "react";
import "../Compo~Styles/NavbarStyle.css";
import "../index.css";
import logo from "../LOGO/dys.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = useCallback(() => {
    setIsNavOpen(!isNavOpen);
  }, [isNavOpen]);
  return (
    <div>
      <div className="navWrapper">
        <nav className="nav-container">
          <div className="logoCont">
            <img src={logo} className="logo" alt="Logo Here" />
          </div>

          <div className="nav-link-container">
            <NavLink to="/" className="bgDownToUp navLinks">
              HOME
            </NavLink>
            <div className="linkWithDD bgDownToUp navLinks">
              <NavLink className="nav-link-flex" to="/aboutUs">
                ABOUT US
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </NavLink>
              <ul className="link_dropdown navUlDes">
                <li>
                  <NavLink to="/chooseus">Why Choose Us</NavLink>
                </li>
              </ul>
            </div>

            <div className="bgDownToUp navLinks linkWithDD">
              <div className="nav-link-flex">
                <Link to="/services">SERVICES</Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
                <ul className="link_dropdown navUlDes">
                  <li key="dm">
                    DIGITAL MARKETING
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </li>
                  <li key="om">OUTDOOR MARKETING</li>
                  <li key="prm">PR MARKETING</li>
                  <li key="bc">BUISNESS CONSULTANCY</li>
                  <li key="dm2">DIGITAL MARKETING</li>
                </ul>
              </div>
            </div>
            <div className="bgDownToUp navLinks">
              <Link to="/crm">CRM</Link>
            </div>
            <div className="bgDownToUp navLinks">
              <Link to="/blog">BLOG</Link>
            </div>
            <div className="bgDownToUp navLinks">
              <Link to="/RequestPage">CONTACT US</Link>
            </div>
          </div>
          <div className="flex-align-center">
            <button className="menuBtn" onClick={toggleNav}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="black"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </button>
          </div>
        </nav>

        <div
          className={`navigationSidebar ${
            isNavOpen ? "width-in" : "width-out"
          }`}
        >
          <div className="closeBtn">
            <button onClick={toggleNav}>
              <span className="closeBtnFlex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  fill="black"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
                  <path d="M0 0h24v24h-24z" fill="none" />
                </svg>
              </span>
            </button>
          </div>
          <ul className="sideBarUl">
            <NavLink to="/">
              <li>HOME </li>
            </NavLink>

            <li>
              <details>
                <summary>
                  <NavLink to="/aboutUs"> ABOUT US</NavLink>
                </summary>

                <Link to="/chooseus">
                  {" "}
                  <li>Why Choose Us </li>
                </Link>
              </details>
            </li>

            <Link to="/services">
              {" "}
              <li>SERVICES </li>
            </Link>
            <Link to="/crm">
              <li>CRM</li>
            </Link>

            <Link to="/blog">
              {" "}
              <li>BLOG </li>
            </Link>
            <Link to="/RequestPage">
              <li>CONTACT US</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
