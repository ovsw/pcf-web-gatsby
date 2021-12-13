import * as React from "react"

import Icon123 from "../../images/svg/icon-123.inline.svg"
import Icon127 from "../../images/svg/icon-127.inline.svg"
import Icon131 from "../../images/svg/icon-131.inline.svg"

const FeatureContent = [
  {
    icon: Icon127,
    title: "1. Digitize",
    subTitle: `Create and upload 3D Models of your product catalogue. We can help with modeling.`,
    bgColor: "#FF4A8B",
  },
  {
    icon: Icon123,
    title: "2. Configure",
    subTitle: `Add options for visitors to configure your product to their liking. All sharp and fast 3D.`,
    bgColor: "#6D49FF",
  },
  {
    icon: Icon131,
    title: "3. Integrate",
    subTitle: `Integrate with your existing website or online store with a plugin or via our API.`,
    bgColor: "#FFB951",
  },
]

const FancyFeatureTewentyTwo = () => {
  return (
    <>
      {FeatureContent.map((val, i) => {
        const Icon = val.icon
        return (
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-duration="1200"
            key={i}
          >
            <div className="block-style-twentyTwo">
              <div
                className="icon d-flex align-items-center justify-content-center"
                style={{ background: val.bgColor }}
              >
                {/* <img src={`../assets/images/icon/${val.icon}.svg`} alt="icon" /> */}
                <Icon />
              </div>
              <h4>{val.title}</h4>
              <p>{val.subTitle}</p>
            </div>
            {/* /.block-style-twentyTwo */}
          </div>
        )
      })}
    </>
  )
}

export default FancyFeatureTewentyTwo
