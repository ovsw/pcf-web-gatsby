import * as React from "react"

import Icon38 from "../../../images/svg/icon-38.inline.svg"
import Icon40 from "../../../images/svg/icon-40.inline.svg"
import Icon41 from "../../../images/svg/icon-41.inline.svg"

const PricingContent = [
  {
    packName: "Starter",
    price: "18",
    packageFor: "Small businesses and side projects",
    icon: Icon38,
    billCycle: "Billed per agent",
    preFeatures: [
      "20 products",
      "standard integrations (WooCommerce, Shopify, Magento)",
      "use on 1 website",
      "Email Support (24h response time)",
    ],
  },
  {
    packName: "Pro",
    price: "29",
    packageFor: "Growing Businesses",
    icon: Icon40,
    billCycle: "Billed per agent",
    preFeatures: [
      "60 products",
      "standard and API integrations (WooCommerce, Shopify, Magento)",
      "use on 3 websites",
      "Service Tickets Support",
    ],
  },
  {
    packName: "Enterprise",
    price: "50",
    packageFor: "Large businesses",
    icon: Icon41,
    billCycle: "Billed per agent",
    preFeatures: [
      "Unlimited Products",
      "Custom Integrations",
      "Unlimited Websites",
      "Service Level Agreement (SLA)",
      "Data security",
    ],
  },
]

const PricingMonthly = () => {
  return (
    <div className="row justify-content-center">
      {PricingContent.map((val, i) => {
        const Icon = val.icon
        return (
          <div className="col-lg-4 col-md-6" key={i}>
            <div className="pr-table-wrapper">
              <div className="pack-name">{val.packName}</div>
              <div className="price">
                ${val.price}.<sup>99</sup>
              </div>
              <div className="pack-rec">{val.packageFor}</div>
              <Icon className="icon" />
              {/* <div className="bill-cycle">get 2 months free with yearly</div> */}
              <ul className="pr-feature">
                {val.preFeatures.map((list, i) => (
                  <li key={i}>{list}</li>
                ))}
              </ul>
              <a href="#" className="theme-btn-one">
                Choose Plan
              </a>
              <div className="trial-text">Get your 30 day free trial</div>
            </div>
            {/*  /.pr-table-wrapper */}
          </div>
        )
      })}
    </div>
  )
}

export default PricingMonthly
