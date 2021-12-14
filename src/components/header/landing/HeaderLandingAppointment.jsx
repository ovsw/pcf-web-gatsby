import * as React from "react"
import { useState, useEffect } from "react"
import Scrollspy from "react-scrollspy"
import { Link } from "gatsby"

import LogoSvg from "../../../images/svg/logos/deski_06.inline.svg"
import Icon120 from "../../../images/svg/icon-120.inline.svg"

const HeaderLandingAppointment = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    if (window != undefined) {
      window.addEventListener("scroll", changeBackground)
    }
    // return () => {
    //   // Clean up the subscription
    //   subscription.unsubscribe()
    // }
  })

  return (
    <>
      {/* =============================================
				Theme Main Menu
			==============================================  */}
      <div
        className={
          navbar
            ? "theme-main-menu sticky-menu theme-menu-six bg-none fixed"
            : "theme-main-menu sticky-menu theme-menu-six bg-none"
        }
      >
        <div className="d-flex align-items-center">
          <div className="logo">
            <Link to="/project-management">
              <LogoSvg />
              {/* <img src="images/logo/deski_06.svg" alt="brand" /> */}
            </Link>
          </div>
          {/* End logo */}

          <div className="right-widget order-lg-3">
            <ul className="d-flex align-items-center">
              <li>
                <Link
                  to="login"
                  className="signIn-action d-flex align-items-center"
                >
                  {/* <img src="images/icon/120.svg" alt="icon" /> */}
                  <Icon120 />
                  <span>login</span>
                </Link>
              </li>
              <li>
                <Link to="signup" className="signup-btn">
                  <span>Sign up</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* End .right-widget */}

          <nav
            id="mega-menu-holder"
            className="navbar navbar-expand-lg ml-lg-auto order-lg-2"
          >
            <div className="container nav-container">
              <div className="mob-header">
                <button className="toggler-menu" onClick={handleClick}>
                  <div className={click ? "active" : ""}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </button>
              </div>
              {/* End Header */}

              <div
                className="navbar-collapse collapse landing-menu-onepage"
                id="navbarSupportedContent"
              >
                <div className="d-lg-flex justify-content-between align-items-center">
                  <Scrollspy
                    className="navbar-nav  main-side-nav font-gordita"
                    items={[
                      "overview",
                      "features",
                      "testimonials",
                      "pricing",
                      "contact",
                    ]}
                    currentClassName="active"
                    // offset={-200}
                  >
                    <li className="nav-item">
                      <a
                        href="#overview"
                        className="nav-link"
                        style={{ color: "black" }}
                      >
                        Overview
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#features" className="nav-link">
                        Features
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#testimonials" className="nav-link">
                        Testimonials
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#about" className="nav-link">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#pricing" className="nav-link">
                        Pricing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#contact" className="nav-link">
                        Contact
                      </a>
                    </li>
                  </Scrollspy>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* /.theme-main-menu */}

      {/* Mobile Menu Start */}
      <div className={click ? "mobile-menu  menu-open" : "mobile-menu"}>
        <div className="logo order-md-1">
          <Link to="/project-management">
            <img src="images/logo/deski_06.svg" alt="brand" />
          </Link>
          <div className="fix-icon text-dark" onClick={handleClick}>
            <img src="images/icon/close.svg" alt="icon" />
          </div>
          {/* Mobile Menu close icon */}
        </div>

        <Scrollspy
          className="navbar-nav"
          id="theme-menu-list"
          items={["feature", "service", "feedback"]}
          currentClassName="active"
          offset={-90}
        >
          <li className="nav-item">
            <a href="#feature" className="nav-link" onClick={handleClick}>
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#service" className="nav-link" onClick={handleClick}>
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#feedback" className="nav-link" onClick={handleClick}>
              Feedback
            </a>
          </li>
          <li className="nav-item">
            <a href="#feedback" className="nav-link" onClick={handleClick}>
              Contact
            </a>
          </li>
        </Scrollspy>
      </div>
      {/* Mobile Menu End */}
    </>
  )
}

export default HeaderLandingAppointment
