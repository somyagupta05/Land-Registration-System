import React from "react";

const Quote = () => {
  return (
    <div className="rn-about-Quote-area rn-section-gapTop">
      <div className="container">
        <div className="row g-5 d-flex align-items-center">
          <div className="col-lg-6">
            <div className="rn-about-title-wrapper">
              <h3
                className="title"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="150"
              >
                Find Your Dream Property and Invest Wisely with Our Real Estate Management System
              </h3>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="rn-about-wrapper"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="150"
            >
              <p>
                Our Real Estate Management System offers a comprehensive platform to search, analyze, and invest in properties. With the real estate market booming, it's crucial to make informed decisions. Our system provides detailed insights, market trends, and property analysis tools to help you make the right investment choices.
              </p>
              <p>
                Whether you're a first-time homebuyer or an experienced investor, our platform caters to all your needs. Explore a wide range of properties, from residential homes to commercial spaces, and find the perfect match for your requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
