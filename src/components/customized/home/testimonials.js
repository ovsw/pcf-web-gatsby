import * as React from "react"
import TestimonialThree from "../../testimonial/TestimonialThree"

import Icon143 from "../../../images/svg/icon-143.inline.svg"
import Shape156 from "../../../images/svg/shape-156.inline.svg"
import Shape157 from "../../../images/svg/shape-157.inline.svg"
import Shape158 from "../../../images/svg/shape-158.inline.svg"
import ShapeBg7 from "../../../images/svg/shape-bg7-cleaned.inline.svg"

const TestimonialsSection = () => {
  return (
    <>
      {/* =====================================================
            Client Feedback Slider Seven
        ===================================================== */}
      <div
        className="client-feedback-slider-seven mt-200 md-mt-50 mb-150 md-mb-100"
        id="feedback"
      >
        <div className="inner-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 m-auto d-flex flex-column justify-content-center">
                <Icon143 className="m-auto" />
                {/* <img src="images/icon/143.svg" alt="icon" className="m-auto" /> */}
                <div className="title-style-eleven text-center mt-30">
                  <h2>Success Stories</h2>
                </div>
                {/* /.title-style-eleven */}
              </div>
            </div>

            <div className="row">
              <div className="col-xl-8 col-lg-10 m-auto">
                <div className="clientSliderFive  mt-80 md-mt-50">
                  {/* ****************** */}
                  <TestimonialThree />
                  {/* ****************** */}
                </div>
                <Shape156 className="shapes shape-one" />
                <Shape157 className="shapes shape-two" />
                <Shape158 className="shapes shape-three" />
                {/* <img
                  src="images/shape/156.svg"
                  alt="shape"
                  className="shapes shape-one"
                />
                <img
                  src="images/shape/157.svg"
                  alt="shape"
                  className="shapes shape-two"
                />
                <img
                  src="images/shape/158.svg"
                  alt="shape"
                  className="shapes shape-three"
                /> */}
              </div>
            </div>
          </div>
        </div>
        {/*  /.inner-container */}
        <ShapeBg7 className="bg-image" />
        {/* <img src="images/shape/bg7.svg" alt="shape" className="bg-image" /> */}
      </div>
      {/* /.client-feedback-slider-six */}
    </>
  )
}

export default TestimonialsSection
