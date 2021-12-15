import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Pricing from "../../pricing/pricing-two/Pricing"

import Highlight from "../../../images/svg/shape-189.inline.svg"
// import Shape62 from "../../../images/svg/shape-62.inline.svg"
// import Shape63 from "../../../images/svg/shape-63.inline.svg"

const PricingSection = () => {
  return (
    <>
      {/* =============================================
				Pricing Section One
			============================================== */}
      <div className="pricing-section-one mb-150 md-mb-80">
        <div className="fancy-hero-one">
          <div className="container">
            <div className="title-style-nine text-center">
              <h6>Choose the right plan for you</h6>
              <h2>
                <span>
                  Pricing
                  <Highlight className="marker" />
                </span>
              </h2>
            </div>
          </div>
          <div className="bubble-one"></div>
          <div className="bubble-two"></div>
          <div className="bubble-three"></div>
          <div className="bubble-four"></div>
          <div className="bubble-five"></div>
          <div className="bubble-six"></div>
        </div>
        {/* /.fancy-hero-one */}
        <div className="pricing-table-area">
          {/* <Shape62 className="shapes shape-one" />
          <Shape63 className="shapes shape-two" /> */}

          <div className="container">
            <div className="tab-content">
              <Pricing />
            </div>
          </div>
          {/* End .container */}
        </div>
      </div>
      {/* /.pricing-section-one */}
    </>
  )
}

export default PricingSection
