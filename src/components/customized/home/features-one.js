import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Highlight from "../../../images/svg/shape-189.inline.svg"

const FeaturesOne = () => {
  return (
    <>
      {/* =============================================
            Fancy Feature Twenty Three
        ==============================================  */}
      <div className="fancy-feature-twentyThree pt-170 md-pt-100" id="feature">
        <div className="container">
          <div
            className="title-style-nine text-center pb-180 md-pb-100"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <h6>Our solution helps you</h6>
            <h2>
              {/* A solution that{" "} */}
              increase sales & decrease costs{" "}
              <span>
                at the same time
                {/* <img src="images/shape/192.svg" alt="shape" /> */}
                <Highlight className="marker" />
              </span>{" "}
            </h2>
            <p>
              Our 3D product configurator makes it easy for your customers to
              accurately preview and easily configure their products.
            </p>
          </div>
          {/* End title */}

          <div className="block-style-twentyThree">
            <div className="row align-items-center">
              <div
                className="col-lg-6 order-lg-last ml-auto"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="screen-container ml-auto">
                  <div
                    className="oval-shape"
                    style={{ background: "#69FF9C" }}
                  ></div>
                  <div
                    className="oval-shape"
                    style={{ background: "#FFF170" }}
                  ></div>
                  <StaticImage
                    src="../../../images/placeholders/screen_18.png"
                    alt="application screen"
                    // placeholder="tracedSVG"
                    // width={201}
                  />
                </div>
                {/* /.screen-container */}
              </div>
              <div
                className="col-lg-5 order-lg-first"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  <h6>1000 variations? No problem!</h6>
                  <h3 className="title">
                    Perfect for highly configurable products
                  </h3>
                  <p>
                    {/* For highly configurable products it might be very difficult
                    or even impossible to keep every possible variation in stock
                    for potential customers to view. */}
                    No space for 1000 different product versions in your
                    physical store? By digitizing your products, any possible
                    configuration can be showcased to the client online.
                  </p>
                </div>
                {/*  /.text-wrapper */}
              </div>
            </div>
          </div>
          {/* /.block-style-twentyThree */}

          <div className="block-style-twentyThree">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="screen-container mr-auto"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <div
                    className="oval-shape"
                    style={{ background: "#FFDE69" }}
                  ></div>
                  <div
                    className="oval-shape"
                    style={{ background: "#FF77D9" }}
                  ></div>
                  <StaticImage
                    src="../../../images/placeholders/screen_18.png"
                    alt="application screen"
                    // placeholder="tracedSVG"
                    // width={201}
                  />
                </div>
                {/* /.screen-container */}
              </div>
              <div
                className="col-lg-5 ml-auto"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  <h6>Steamlined Pricing</h6>
                  <h3 className="title">Define smart pricing rules</h3>
                  <p>
                    Deski allows you to easily configure rules for how product
                    options affect price, eliminating the need for a salesperson
                    - if your customers configure it, they can buy it - right
                    then and there!
                  </p>
                </div>
                {/* /.text-wrapper */}
              </div>
            </div>
          </div>
          {/* /.block-style-twentyThree */}

          <div className="block-style-twentyThree">
            <div className="row">
              <div
                className="col-lg-6 order-lg-last ml-auto"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="screen-container ml-auto">
                  <div
                    className="oval-shape"
                    style={{ background: "#00F0FF" }}
                  ></div>
                  <div
                    className="oval-shape"
                    style={{ background: "#FC6BFF" }}
                  ></div>
                  <StaticImage
                    src="../../../images/placeholders/screen_18.png"
                    alt="application screen"
                    // placeholder="tracedSVG"
                    // width={201}
                  />
                </div>
                {/* /.screen-container */}
              </div>
              <div
                className="col-lg-5 order-lg-first"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  <h6>Plug-and-Play</h6>
                  <h3 className="title">Integrate with your online store</h3>
                  <p>
                    Deski works with your exiting online store! We support Wix,
                    Shopify, Squarespace WooCommerce, Magento, and more! We can
                    even build a custom integration or you can make your own
                    based on our API.
                  </p>
                </div>
                {/* /.text-wrapper */}
              </div>
            </div>
          </div>
          {/* /.block-style-twentyThree */}

          <div className="block-style-twentyThree">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="screen-container mr-auto"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <div
                    className="oval-shape"
                    style={{ background: "#FFDE69" }}
                  ></div>
                  <div
                    className="oval-shape"
                    style={{ background: "#FF77D9" }}
                  ></div>
                  <StaticImage
                    src="../../../images/placeholders/screen_18.png"
                    alt="application screen"
                    // placeholder="tracedSVG"
                    // width={201}
                  />
                </div>
                {/* /.screen-container */}
              </div>
              <div
                className="col-lg-5 ml-auto"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  <h6>Show, don't tell</h6>
                  <h3 className="title">Your products - in glorious 3D!</h3>
                  <p>
                    Our 3D viewer can be embedded into any page, and shows your
                    products to the very last detail, in high-resolution. With
                    deski, your customers won't need to use their imagination to
                    see how your customized products will look.
                  </p>
                </div>
                {/* /.text-wrapper */}
              </div>
            </div>
          </div>
          {/* /.block-style-twentyThree */}
        </div>
      </div>
      {/* /.fancy-feature-twentyThree */}
    </>
  )
}

export default FeaturesOne
