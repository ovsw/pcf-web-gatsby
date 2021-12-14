import * as React from "react"
import FancyFeatureTwentyTwo from "../../features/FancyFeatureTewentyTwo"

import Highlight from "../../../images/svg/shape-189.inline.svg"
import Shape200 from "../../../images/svg/shape-200.inline.svg"

const Product = () => {
  return (
    <>
      {/* =============================================
            Fancy Feature Twenty Two
        ==============================================  */}
      <div className="fancy-feature-twentyTwo mt-200 md-mt-120">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-7 col-md-8 m-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="title-style-nine text-center mb-40 md-mb-10">
                <h6>Showcase your products in 3D</h6>
                <h2>
                  Interactive, Customizable{" "}
                  <span>
                    3D previews
                    <Highlight className="marker" />
                    {/* <img src="images/shape/191.svg" alt="shape" /> */}
                  </span>{" "}
                  of your products
                </h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <FancyFeatureTwentyTwo />
          </div>
        </div>
      </div>
      <a
        href="#features-one"
        className="click-scroll-button scroll-target d-flex justify-content-center mt-5"
      >
        {/* <img src="images/shape/200.svg" alt="shape" /> */}
        <Shape200 />
      </a>
      {/* /.fancy-feature-twentyTwo */}
    </>
  )
}

export default Product
