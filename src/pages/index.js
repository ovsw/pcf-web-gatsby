import * as React from "react"
import { useEffect } from "react"

import AOS from "aos"

import HeaderLandingAppointment from "../components/header/landing/HeaderLandingAppointment"
import HeroBannerNine from "../components/hero-banner/HeroBannerNine"

import Product from "../components/customized/home/product"
import FeaturesOne from "../components/customized/home/features-one"
import FeaturesTwo from "../components/customized/home/features-two"
import Pricing from "../components/customized/home/pricing"

import "aos/dist/aos.css"

// markup
const IndexPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    })
  }, [])

  return (
    <div className="main-page-wrapper p0 font-gordita">
      <main style={{ overflowX: "hidden" }}>
        <title>
          Appointment Scheduling || Deski-Saas & Software React Template
        </title>
        {/* End Page SEO Content */}

        <HeaderLandingAppointment />
        <HeroBannerNine />
        <div id="overview"></div>
        <Product />
        <FeaturesOne />
        <div id="features">
          <FeaturesTwo />
        </div>
        <div id="testimonials">
          <p>aaaaaaaaaaaaaaaa</p>
        </div>

        <Pricing />
      </main>
    </div>
  )
}

export default IndexPage
