import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import FancyFeatureTewentyFour from "../../features/FancyFeatureTewentyFour"

import Highlight from "../../../images/svg/shape-189.inline.svg"

import Shape195 from "../../../images/svg/shape-195.inline.svg"
import Shape196 from "../../../images/svg/shape-196.inline.svg"
import Shape197 from "../../../images/svg/shape-197.inline.svg"
import Shape198 from "../../../images/svg/shape-198.inline.svg"
import Shape199 from "../../../images/svg/shape-199.inline.svg"
import Shape200 from "../../../images/svg/shape-200.inline.svg"

const FeaturesTwo = () => {
  return (
    <>
      {/* 	=============================================
            Fancy Feature Twenty Four
        ==============================================  */}
      <div
        className="fancy-feature-twentyFour pt-140 md-pt-60"
        // id="service"
      >
        <div className="container">
          <div className="title-style-nine text-center">
            <h6>Feature Highlights</h6>
            <h2>
              All the Features You'll Need to{" "}
              <span>
                Succeeed
                <Highlight className="marker" />
              </span>
            </h2>
          </div>
        </div>
        <div className="bg-wrapper mt-100 md-mt-80">
          {/* <a
            href="#feedback"
            className="click-scroll-button scroll-target d-flex justify-content-center"
          >
           
            <Shape200 />
          </a> */}
          <div className="container">
            <FancyFeatureTewentyFour />
          </div>
          <Shape195 className="shapes shape-one" />
          <Shape196 className="shapes shape-two" />
          <Shape197 className="shapes shape-three" />
          <Shape198 className="shapes shape-four" />
          <Shape199 className="shapes shape-five" />
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* End .fancy feature twenty four */}
    </>
  )
}

export default FeaturesTwo
