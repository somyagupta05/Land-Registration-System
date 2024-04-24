import React from "react";
import Link from "next/link";
const Action = () => {
  return (
    <div className="rn-callto-action rn-section-gapTop">
      <div className="container-fluid about-fluidimg-cta">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="bg_image--6 bg_image bg-image-border"
              data-black-overlay="7"
            >
              <div className="row">
                <div className="col-lg-12">
                  <div className="call-to-action-wrapper">
                    <h3
                      data-sal="slide-up"
                      data-sal-duration="800"
                      data-sal-delay="150"
                    >
                      Discover Your Dream Property and Invest Wisely with EstateEase
                    </h3>
                    <p
                      data-sal="slide-up"
                      data-sal-duration="800"
                      data-sal-delay="150"
                    >
                      EstateEase offers a wide range of properties for sale and rent, tailored to your needs. Explore our listings and find the perfect place to call home or invest in lucrative real estate opportunities.
                    </p>
                    <div
                      className="callto-action-btn-wrapper"
                      data-sal="slide-up"
                      data-sal-duration="800"
                      data-sal-delay="150"
                    >
                      <Link href="/explor" className="btn btn-primary btn-large">
                        Explore
                      </Link>
                      <Link
                        href="/create"
                        className="btn btn-primary-alta btn-large"
                      >
                        Create
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Action;
