import * as React from "react"
import HeaderLandingAppointment from "../components/header/landing/HeaderLandingAppointment"
import HeroBannerNine from "../components/hero-banner/HeroBannerNine"

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
      <HeroBannerNine />
      <HeroBannerNine />
    </main>
  )
}

export default IndexPage
