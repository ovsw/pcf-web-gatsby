import React from "react"

import Icon124 from "../../images/svg/icon-124.inline.svg"
import Icon125 from "../../images/svg/icon-125.inline.svg"
import Icon126 from "../../images/svg/icon-126.inline.svg"
import Icon127 from "../../images/svg/icon-127.inline.svg"
import Icon128 from "../../images/svg/icon-128.inline.svg"
import Icon129 from "../../images/svg/icon-129.inline.svg"
import Icon130 from "../../images/svg/icon-130.inline.svg"
import Icon131 from "../../images/svg/icon-131.inline.svg"

const items = [
  {
    title: "Product Customization",
    description:
      "Add product options and create product variants. Let your customers build the product they want, online, and preview it in 3D.",
    color: "#32B5FF",
    icon: Icon130,
  },
  {
    title: "Custom Pricing Rules",
    description:
      "Easily manage how price is affected by each product customization, or add set prices for each variant. Show price in real-time, or have customers reach your for a quote.",
    color: "#FFA361",
    icon: Icon131,
  },

  {
    title: "Customization",
    description:
      "Deski can be customized to various degrees depending on your needs, so that you're always 'on brand'.",
    color: "#FFCF39",
    icon: Icon126,
  },
  {
    title: "Integrations",
    description:
      "Have a simple Shopify, Wix, WooCommerce or Magento store, or want to integrate with your custom system, our plugins and API make it easy.",
    color: "#E752FF",
    icon: Icon129,
  },
  {
    title: "Flexibility",
    description:
      "From a system that plugs into your existing Shopify or WordPress store to a fully-custom solution - we got you covered.",
    color: "#6D64FF",
    icon: Icon127,
  },
  {
    title: "Multi-Language",
    description:
      "Do you serve multiple languages? No problem! Deski boasts full-featured translation management for all your products.",
    color: "#3FE193",
    icon: Icon124,
  },
  {
    title: "Analytics",
    description:
      "What sells, what doesn't? Most importantly: why? Get insights into how your customers interact with your products.",
    color: "#FF4F86",
    icon: Icon125,
  },
  {
    title: "Discounts & Promotions",
    description:
      "Deski works seamlessly with your marketing campaigns: coupon codes, promotions and sales - there's no limits to what you can do.",
    color: "#29EEFB",
    icon: Icon128,
  },
]

const FancyFeatureTewentyFour = () => {
  return (
    <div className="row">
      {items.map((item, i) => {
        const Icon = item.icon
        return (
          <div
            key={i}
            className="col-lg-6 d-flex mb-35"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="block-style-twentyFour">
              <div className="d-flex align-items-start">
                <div
                  className="icon d-flex align-items-center justify-content-center"
                  style={{ background: item.color }}
                >
                  <Icon />
                </div>
                <div className="text">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FancyFeatureTewentyFour
