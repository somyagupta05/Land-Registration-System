import React from "react";
import { useRouter } from "next/router";
import { useStateContext } from "../../context";
import Link from "next/link";

const Header = () => {
  const { currentAccount, connectWallet } = useStateContext();
  const router = useRouter();

  const handleAddPropertyClick = () => {
    // Check if we're already on the /add-property page
    if (router.pathname !== "/add-property") {
      router.push("/add-property"); // Navigate programmatically if not on the page
    }
  };

  return (
    <>
      <header className="rn-header haeder-default header--sticky">
        <div className="container">
          <div className="header-inner">
            <div className="header-left">
              <div className="logo-thumbnail logo-custom-css">
                <a className="logo-light" href="/">
                  <img src="/logo/logo.png" alt="nft-logo" />
                </a>
                <a className="logo-dark" href="/">
                  <img src="/logo/logo.png" alt="nft-logo" />
                </a>
              </div>
              <div className="mainmenu-wrapper">
                <nav id="sideNav" className="mainmenu-nav d-none d-xl-block">
                  <ul className="mainmenu">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li>
                      <Link href="/explor">Explore</Link>
                    </li>
                    <li>
                      <Link href="/active">Activity</Link>
                    </li>
                    <li>
                      <Link href="/create">Create</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="header-right">
              <div className="setting-option d-none d-lg-block">
                <form className="search-form-wrapper" action="#">
                  <input
                    type="search"
                    placeholder="Search Here"
                    aria-label="Search"
                  />
                  <div className="search-icon">
                    <button>
                      <i className="feather-search"></i>
                    </button>
                  </div>
                </form>
              </div>

              {currentAccount ? (
                ""
              ) : (
                <div
                  className="setting-option header-btn rbt-site-header"
                  id="rbt-site-header"
                >
                  <div className="icon-box">
                    <button
                      onClick={() => connectWallet()}
                      className="btn btn-primary-alta btn-small"
                    >
                      Wallet connect
                    </button>
                  </div>
                </div>
              )}

              {currentAccount ? (
                <div>
                  <div className="setting-option rn-icon-list user-account">
                    <div className="icon-box">
                      <Link href="/author">
                        <img src="/icons/boy-avater.png" alt="Images" />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}

              {/* Add Property Button */}
              <div className="setting-option">
                <button
                  onClick={handleAddPropertyClick} // Removed Link and used button directly
                  className="btn btn-primary-alta btn-small"
                >
                  Add Property
                </button>
              </div>

              <div className="setting-option mobile-menu-bar d-block d-xl-none">
                <div className="hamberger">
                  <button className="hamberger-button">
                    <i className="feather-menu"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
