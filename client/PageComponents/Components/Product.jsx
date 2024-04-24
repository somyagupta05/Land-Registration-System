import React from "react";

const Product = ({ properties }) => {
  return (
    <div class="rn-product-area rn-section-gapTop masonary-wrapper-activation">
      <div class="container">
        <div class="row align-items-center mb--30">
          <div class="col-lg-4">
            <div class="section-title">
              <h3 class="title mb--0">Explore Product</h3>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="button-group isotop-filter filters-button-group d-flex justify-content-start justify-content-lg-end mt_md--30 mt_sm--30">
              <button data-filter="*" class="is-checked">
                <span class="filter-text">All</span>
              </button>
              <button data-filter=".cat--1">
                <span class="filter-text">Housing</span>
              </button>
              <button data-filter=".cat--2">
                <span class="filter-text">Office</span>
              </button>
              <button data-filter=".cat--3">
                <span class="filter-text">Rental</span>
              </button>
              <button data-filter=".cat--4">
                <span class="filter-text">Farmhouse</span>
              </button>
              <button data-filter=".cat--5">
                <span class="filter-text">Country</span>
              </button>
              <button data-filter=".cat--6">
                <span class="filter-text">Commercial</span>
              </button>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="grid-metro5 mesonry-list">
            <div class="resizer"></div>
            <div class="grid-metro-item cat--1 cat--3">
              <div class="product-style-one no-overlay with-placeBid">
                <div class="card-thumbnail">
                  <a href="\explor">
                    <img
                      src="/portfolio/portfolio-01.jpg"
                      alt="NFT_portfolio"
                    />
                  </a>
                </div>
                <div class="product-share-wrapper">
                </div>
                <a href="\explor">
                  <span class="product-name">Preatent</span>
                </a>
                <div class="bid-react-area">
                  <div class="last-bid">0.244wETH</div>
                  <div class="react-area">
                    <svg
                      viewBox="0 0 17 16"
                      fill="none"
                      width="16"
                      height="16"
                      class="sc-bdnxRM sc-hKFxyN kBvkOu"
                    >
                      <path
                        d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                        stroke="currentColor"
                        stroke-width="2"
                      ></path>
                    </svg>
                    <span class="number">322</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid-metro-item cat-3 cat--4">
              <div class="product-style-one no-overlay with-placeBid">
                <div class="card-thumbnail">
                  <a href="\explor">
                    <img
                      src="/portfolio/portfolio-02.jpg"
                      alt="NFT_portfolio"
                    />
                  </a>
                </div>
                <div class="product-share-wrapper">
                  
                </div>
                <a href="\explor">
                  <span class="product-name">Diamond Dog</span>
                </a>
              
                <div class="bid-react-area">
                  <div class="last-bid">0.892wETH</div>
                  <div class="react-area">
                    <svg
                      viewBox="0 0 17 16"
                      fill="none"
                      width="16"
                      height="16"
                      class="sc-bdnxRM sc-hKFxyN kBvkOu"
                    >
                      <path
                        d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                        stroke="currentColor"
                        stroke-width="2"
                      ></path>
                    </svg>
                    <span class="number">420</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid-metro-item cat--5 cat--6">
              <div class="product-style-one no-overlay with-placeBid">
                <div class="card-thumbnail">
                  <a href="\explor">
                    <img
                      src="/portfolio/portfolio-03.jpg"
                      alt="NFT_portfolio"
                    />
                  </a>
                 
                </div>
                <div class="product-share-wrapper">
                  
                </div>
                <a href="\explor">
                  <span class="product-name">OrBid6</span>
                </a>
             
                <div class="bid-react-area">
                  <div class="last-bid">0.2128wETH</div>
                  <div class="react-area">
                    <svg
                      viewBox="0 0 17 16"
                      fill="none"
                      width="16"
                      height="16"
                      class="sc-bdnxRM sc-hKFxyN kBvkOu"
                    >
                      <path
                        d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                        stroke="currentColor"
                        stroke-width="2"
                      ></path>
                    </svg>
                    <span class="number">12</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid-metro-item cat--1 cat--2">
              <div class="product-style-one no-overlay with-placeBid">
                <div class="card-thumbnail">
                  <a href="\explor">
                    <img
                      src="/portfolio/portfolio-04.jpg"
                      alt="NFT_portfolio"
                    />
                  </a>
                  
                </div>
                <div class="product-share-wrapper">
                </div>
                <a href="\explor">
                  <span class="product-name">Morgan11</span>
                </a>
            
                <div class="bid-react-area">
                  <div class="last-bid">0.265wETH</div>
                  <div class="react-area">
                    <svg
                      viewBox="0 0 17 16"
                      fill="none"
                      width="16"
                      height="16"
                      class="sc-bdnxRM sc-hKFxyN kBvkOu"
                    >
                      <path
                        d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                        stroke="currentColor"
                        stroke-width="2"
                      ></path>
                    </svg>
                    <span class="number">20</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid-metro-item cat--1 cat--2">
              <div class="product-style-one no-overlay with-placeBid">
                <div class="card-thumbnail">
                  <a href="\explor">
                    <img
                      src="/portfolio/portfolio-05.jpg"
                      alt="NFT_portfolio"
                    />
                  </a>
                </div>
                <div class="product-share-wrapper">
                  
                </div>
                <a href="\explor">
                  <span class="product-name">mAtal8</span>
                </a>
              
                <div class="bid-react-area">
                  <div class="last-bid">0.244wETH</div>
                  <div class="react-area">
                    <svg
                      viewBox="0 0 17 16"
                      fill="none"
                      width="16"
                      height="16"
                      class="sc-bdnxRM sc-hKFxyN kBvkOu"
                    >
                      <path
                        d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                        stroke="currentColor"
                        stroke-width="2"
                      ></path>
                    </svg>
                    <span class="number">205</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid-metro-item cat--1 cat--2">
              <div class="product-style-one no-overlay with-placeBid">
                <div class="card-thumbnail">
                  <a href="\explor">
                    <img
                      src="/portfolio/portfolio-06.jpg"
                      alt="NFT_portfolio"
                    />
                  </a>
                 
                </div>
                <div class="product-share-wrapper">
                  
                </div>
                <a href="\explor">
                  <span class="product-name">Platonum</span>
                </a>
              
                <div class="bid-react-area">
                  <div class="last-bid">0.450wETH</div>
                  <div class="react-area">
                    <svg
                      viewBox="0 0 17 16"
                      fill="none"
                      width="16"
                      height="16"
                      class="sc-bdnxRM sc-hKFxyN kBvkOu"
                    >
                      <path
                        d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                        stroke="currentColor"
                        stroke-width="2"
                      ></path>
                    </svg>
                    <span class="number">65</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid-metro-item cat--5 cat--4">
              <div class="product-style-one no-overlay with-placeBid">
                <div class="card-thumbnail">
                  <a href="\explor">
                    <img
                      src="/portfolio/portfolio-07.jpg"
                      alt="NFT_portfolio"
                    />
                  </a>
                 
                </div>
                <div class="product-share-wrapper">
                 
                </div>
                <a href="\explor">
                  <span class="product-name">PlatOrgan</span>
                </a>
         
                <div class="bid-react-area">
                  <div class="last-bid">0.311wETH</div>
                  <div class="react-area">
                    <svg
                      viewBox="0 0 17 16"
                      fill="none"
                      width="16"
                      height="16"
                      class="sc-bdnxRM sc-hKFxyN kBvkOu"
                    >
                      <path
                        d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                        stroke="currentColor"
                        stroke-width="2"
                      ></path>
                    </svg>
                    <span class="number">56</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid-metro-item cat--5 cat--6">
              <div class="product-style-one no-overlay with-placeBid">
                <div class="card-thumbnail">
                  <a href="\explor">
                    <img
                      src="/portfolio/portfolio-08.jpg"
                      alt="NFT_portfolio"
                    />
                  </a>
                 
                </div>
                <div class="product-share-wrapper">
                
                </div>
                <a href="\explor">
                  <span class="product-name">Orgajis</span>
                </a>
        
                <div class="bid-react-area">
                  <div class="last-bid">0.244wETH</div>
                  <div class="react-area">
                    <svg
                      viewBox="0 0 17 16"
                      fill="none"
                      width="16"
                      height="16"
                      class="sc-bdnxRM sc-hKFxyN kBvkOu"
                    >
                      <path
                        d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                        stroke="currentColor"
                        stroke-width="2"
                      ></path>
                    </svg>
                    <span class="number">89</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid-metro-item cat--1 cat--3">
              <div class="product-style-one no-overlay with-placeBid">
                <div class="card-thumbnail">
                  <a href="\explor">
                    <img
                      src="/portfolio/portfolio-01.jpg"
                      alt="NFT_portfolio"
                    />
                  </a>
                 
                </div>
                <div class="product-share-wrapper">
                 
                </div>
                <a href="\explor">
                  <span class="product-name">Preatent</span>
                </a>
             
                <div class="bid-react-area">
                  <div class="last-bid">0.244wETH</div>
                  <div class="react-area">
                    <svg
                      viewBox="0 0 17 16"
                      fill="none"
                      width="16"
                      height="16"
                      class="sc-bdnxRM sc-hKFxyN kBvkOu"
                    >
                      <path
                        d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                        stroke="currentColor"
                        stroke-width="2"
                      ></path>
                    </svg>
                    <span class="number">322</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid-metro-item cat-3 cat--4">
              <div class="product-style-one no-overlay with-placeBid">
                <div class="card-thumbnail">
                  <a href="\explor">
                    <img
                      src="/portfolio/portfolio-02.jpg"
                      alt="NFT_portfolio"
                    />
                  </a>
                 
                </div>
                <div class="product-share-wrapper">
                
                </div>
                <a href="\explor">
                  <span class="product-name">Diamond Dog</span>
                </a>
             
                <div class="bid-react-area">
                  <div class="last-bid">0.892wETH</div>
                  <div class="react-area">
                    <svg
                      viewBox="0 0 17 16"
                      fill="none"
                      width="16"
                      height="16"
                      class="sc-bdnxRM sc-hKFxyN kBvkOu"
                    >
                      <path
                        d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                        stroke="currentColor"
                        stroke-width="2"
                      ></path>
                    </svg>
                    <span class="number">420</span>
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

export default Product;
