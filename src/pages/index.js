import * as React from "react"
import HeaderLandingAppointment from "../components/header/landing/HeaderLandingAppointment"
import HeroBannerNine from "../components/hero-banner/HeroBannerNine"
import FancyFeatureTwentyTwo from "../components/features/FancyFeatureTewentyTwo"

import Shape189 from "../images/svg/shape-189.inline.svg"

// markup
const IndexPage = () => {
  return (
    <main>
      <title>
        Appointment Scheduling || Deski-Saas & Software React Template
      </title>
      {/* End Page SEO Content */}

      <HeaderLandingAppointment />
      {/* End Header Landing Appoinment Scheduling */}

      <HeroBannerNine />

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
                    <Shape189 className="marker" />
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
    </main>
  )
}

export default IndexPage
