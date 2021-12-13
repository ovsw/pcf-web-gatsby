import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import BrandFour from "../brand/BrandFour"
import FormAppoint from "../form/FormAppoint"

import Shape189 from "../../images/svg/shape-189.inline.svg"
import Shape190 from "../../images/svg/shape-190.inline.svg"
import Shape230 from "../../images/svg/shape-230.inline.svg"

const HeroBannerNine = () => {
  return (
    <div className="hero-banner-nine lg-container">
      {/* <StaticImage
        src="../assets/images/shape/190.svg"
        alt="shape"
        placeholder="none"
        className="shapes bg-shape"
        // width={201}
      /> */}
      {/* <Shape230 className="shapes bg-shape"  /> */}
      <img src="/shape-230.svg" alt="shape" className="shapes bg-shape" />
      <div className="container">
        <div className="illustration-container">
          <StaticImage
            src="../../images/placeholders/screen_17.png"
            alt="application screen"
            // placeholder="tracedSVG"
            // width={201}
          />
          {/* <img src="images/assets/screen_17.png" alt="screen" /> */}
        </div>
        {/* illustration-container */}

        <div className="row">
          <div className="col-lg-6">
            <h1 className="hero-heading">
              Customize{" "}
              <span>
                Anything
                {/* <img src="images/shape/189.svg" alt="shape" /> */}
                <Shape189 className="marker" />
              </span>{" "}
              in 3D
            </h1>
            <p className="hero-sub-heading">
              Increase sales, reduce costs, and improve your customer
              experience. Interactive 3D & AR for e-commerce as the new
              standard.
            </p>
            {/* *********************************** */}
            <FormAppoint />
            {/* *********************************** */}
            <p className="term-text">
              Already using Deski? <Link to="/login">Sign in.</Link>
            </p>
          </div>
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}

      <div className="partner-slider-two mt-130 md-mt-100">
        <div className="container">
          <p>Join the ranks of <span>successful businesses</span> using our service</p>
          <div className="partnerSliderTwo">
            {/* *********************************** */}
            <BrandFour />
            {/* *********************************** */}
          </div>
        </div>
      </div>
      {/* /.partner-slider-two */}
    </div>
    //   /.hero-banner-nine
  )
}

export default HeroBannerNine
