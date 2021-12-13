import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import HeaderLandingAppointment from "../components/header/landing/HeaderLandingAppointment"
import HeroBannerNine from "../components/hero-banner/HeroBannerNine"

import Product from "../components/customized/home/product"
import FeaturesOne from "../components/customized/home/features-one"

// markup
const IndexPage = () => {
  return (
    <main>
      <title>
        Appointment Scheduling || Deski-Saas & Software React Template
      </title>
      {/* End Page SEO Content */}

      <HeaderLandingAppointment />
      <HeroBannerNine />

      <Product />
      <FeaturesOne />
    </main>
  )
}

export default IndexPage
