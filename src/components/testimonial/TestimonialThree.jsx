import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function TestimonialThree() {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    margin: 30,
  }

  const TestimonilContent = [
    {
      desc: `Our custom-made men's shoes have thousands of possible variations per model. Having one of each in the store for customers to preview was impossible. With Deski, our clients can create their own custom shoe design directly from our website.`,
      reviewerName: "Alexandru Pop",
      designation: "Owner, AP Shoes",
    },
    {
      desc: `I need more testimonials here, just like the one I made up from Alex Pop. If you're reading this, you probably haven't provided them to me, and you should stop reading and do it.`,
      reviewerName: "Ovi Savescu",
      designation: "Owner & CEO, Studio ROVST",
    },
  ]

  return (
    <Slider {...settings}>
      {TestimonilContent.map((val, i) => (
        <div
          className="item"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <p>{val.desc}</p>
          <h6 className="name">{val.reviewerName}</h6>
          <span className="desig">{val.designation}</span>
        </div>
      ))}
    </Slider>
  )
}
