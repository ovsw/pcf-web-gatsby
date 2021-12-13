import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { StaticImage } from "gatsby-plugin-image"

const LogoSlider = [
  {
    img: "logo-21",
    url: "",
  },
  {
    img: "logo-22",
    url: "",
  },
  {
    img: "logo-23",
    url: "",
  },
  {
    img: "logo-24",
    url: "",
  },
  {
    img: "logo-25",
    url: "",
  },
  {
    img: "logo-22",
    url: "",
  },
  {
    img: "logo-24",
    url: "",
  },
]

const BrandFour = () => {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    margin: 30,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  return (
    <Slider {...settings}>
      {/* {LogoSlider.map((val, i) => ( */}
      <div className="item">
        <div className="img-meta d-flex align-items-center justify-content-center">
          <a href="#">
            <StaticImage
              src="../../images/logos/logo-21.png"
              alt="logo"
              placeholder="tracedSVG"
              // width={201}
            />
            {/* <img src={`images/logo/${val.img}.png`} alt="logo" /> */}
          </a>
        </div>
      </div>

      <div className="item">
        <div className="img-meta d-flex align-items-center justify-content-center">
          <a href="#">
            <StaticImage
              src="../../images/logos/logo-22.png"
              alt="logo"
              placeholder="tracedSVG"
              // width={201}
            />
            {/* <img src={`images/logo/${val.img}.png`} alt="logo" /> */}
          </a>
        </div>
      </div>

      <div className="item">
        <div className="img-meta d-flex align-items-center justify-content-center">
          <a href="#">
            <StaticImage
              src="../../images/logos/logo-23.png"
              alt="logo"
              placeholder="tracedSVG"
              // width={201}
            />
            {/* <img src={`images/logo/${val.img}.png`} alt="logo" /> */}
          </a>
        </div>
      </div>

      <div className="item">
        <div className="img-meta d-flex align-items-center justify-content-center">
          <a href="#">
            <StaticImage
              src="../../images/logos/logo-24.png"
              alt="logo"
              placeholder="tracedSVG"
              // width={201}
            />
            {/* <img src={`images/logo/${val.img}.png`} alt="logo" /> */}
          </a>
        </div>
      </div>

      <div className="item">
        <div className="img-meta d-flex align-items-center justify-content-center">
          <a href="#">
            <StaticImage
              src="../../images/logos/logo-25.png"
              alt="logo"
              placeholder="tracedSVG"
              // width={201}
            />
            {/* <img src={`images/logo/${val.img}.png`} alt="logo" /> */}
          </a>
        </div>
      </div>

      {/* repeat */}
      <div className="item">
        <div className="img-meta d-flex align-items-center justify-content-center">
          <a href="#">
            <StaticImage
              src="../../images/logos/logo-21.png"
              alt="logo"
              placeholder="tracedSVG"
              // width={201}
            />
            {/* <img src={`images/logo/${val.img}.png`} alt="logo" /> */}
          </a>
        </div>
      </div>

      <div className="item">
        <div className="img-meta d-flex align-items-center justify-content-center">
          <a href="#">
            <StaticImage
              src="../../images/logos/logo-22.png"
              alt="logo"
              placeholder="tracedSVG"
              // width={201}
            />
            {/* <img src={`images/logo/${val.img}.png`} alt="logo" /> */}
          </a>
        </div>
      </div>

      <div className="item">
        <div className="img-meta d-flex align-items-center justify-content-center">
          <a href="#">
            <StaticImage
              src="../../images/logos/logo-23.png"
              alt="logo"
              placeholder="tracedSVG"
              // width={201}
            />
            {/* <img src={`images/logo/${val.img}.png`} alt="logo" /> */}
          </a>
        </div>
      </div>

      <div className="item">
        <div className="img-meta d-flex align-items-center justify-content-center">
          <a href="#">
            <StaticImage
              src="../../images/logos/logo-24.png"
              alt="logo"
              placeholder="tracedSVG"
              // width={201}
            />
            {/* <img src={`images/logo/${val.img}.png`} alt="logo" /> */}
          </a>
        </div>
      </div>

      <div className="item">
        <div className="img-meta d-flex align-items-center justify-content-center">
          <a href="#">
            <StaticImage
              src="../../images/logos/logo-25.png"
              alt="logo"
              placeholder="tracedSVG"
              // width={201}
            />
            {/* <img src={`images/logo/${val.img}.png`} alt="logo" /> */}
          </a>
        </div>
      </div>

      {/* ))} */}
    </Slider>
  )
}

export default BrandFour
