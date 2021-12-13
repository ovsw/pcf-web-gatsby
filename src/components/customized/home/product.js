import * as React from "react"
import FancyFeatureTwentyTwo from "../../features/FancyFeatureTewentyTwo"

import Highlight from "../../../images/svg/shape-189.inline.svg"

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
              <div className="title-style-eight text-center mb-40 md-mb-10">
                <h2>
                  One Platform. For all{" "}
                  <span>
                    business
                    <Highlight className="marker" />
                    {/* <img src="images/shape/191.svg" alt="shape" /> */}
                  </span>{" "}
                  needs
                </h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <FancyFeatureTwentyTwo />
          </div>
        </div>
      </div>
      {/* /.fancy-feature-twentyTwo */}
    </>
  )
}

export default Product
