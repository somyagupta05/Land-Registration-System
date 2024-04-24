import Link from "next/link";
import React from "react";

import { getTopCreators } from "../../utils";
const Activity = ({ properties, totalReviews, popular }) => {
  console.log(properties);
  popular=1;
  return (
    <div class="rn-activity-area rn-section-gapTop">
      <div class="container">
        <div class="row mb--30">
          <h3 class="title">All following Activities</h3>
        </div>
        <div class="row g-6 activity-direction">
          <div class="col-lg-8 mb_dec--15">
            {properties?.map((activity, i) => (
              <div class="single-activity-wrapper">
                <div class="inner">
                  <div class="read-content">
                    <div class="thumbnail">
                      <a href={`/detail?property=${activity.productID}`}>
                        <img
                          src={activity?.image}
                          alt="Property_Profile"
                        />
                      </a>
                    </div>
                    <div class="content">
                      <a href={`/detail?property=${activity.productID}`}>
                        <h6 class="title">{activity.title.slice(0, 25)}</h6>
                      </a>
                      <p>{activity.owner.slice(0, 25)}...</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div class="col-lg-4">
            <div class="filter-wrapper">
              <div class="widge-wrapper rbt-sticky-top-adjust">
                <div class="inner">
                  <h3>Analytic Stats</h3>
                  <div class="sing-filter">
                    <button>Total Property: {properties?.length}</button>
                    {/* <button>Users: {creators.length}</button> */}
                    <button>Reviews: {totalReviews}</button>
                  </div>
                </div>
                <div class="inner">
                  <h3>Category</h3>
                  <div class="sing-filter">
                    <button>Housing</button>
                    <button>Rental</button>
                    <button>Office</button>
                    <button>Commercial</button>
                    <button>Farmhouse</button>
                    <button>Country</button>
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

export default Activity;
