import React, { useState, useEffect } from "react";
import Link from "next/link";

import { useStateContext } from "../../context";

const Header = () => {
  const { currentAccount, connectWallet, userBlance } = useStateContext();

  return (
    <>
      <header class="rn-header haeder-default header--sticky">
        <div class="container">
          <div class="header-inner">
            <div class="header-left">
              <div class="logo-thumbnail logo-custom-css">
                <a class="logo-light" href="/">
                  <img src="/logo/logo.png" alt="nft-logo" />
                </a>
                <a class="logo-dark" href="/">
                  <img src="/logo/logo.png" alt="nft-logo" />
                </a>
              </div>
              <div class="mainmenu-wrapper">
                <nav id="sideNav" class="mainmenu-nav d-none d-xl-block">
                  <ul class="mainmenu">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li>
                      <Link href="/explor">
                        Explore
                      </Link>
                    </li>
                    <li>
                      <Link href="/active">
                        Activity
                      </Link>
                    </li>
                    <li>
                      <Link href="/create">
                        Create
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="header-right">
              <div class="setting-option d-none d-lg-block">
                <form class="search-form-wrapper" action="#">
                  <input
                    type="search"
                    placeholder="Search Here"
                    aria-label="Search"
                  />
                  <div class="search-icon">
                    <button>
                      <i class="feather-search"></i>
                    </button>
                  </div>
                </form>
              </div>

              {currentAccount ? (
                ""
              ) : (
                <div
                  class="setting-option header-btn rbt-site-header"
                  id="rbt-site-header"
                >
                  <div class="icon-box">
                    <button
                      onClick={() => connectWallet()}
                      class="btn btn-primary-alta btn-small"
                    >
                      Wallet connect
                    </button>
                  </div>
                </div>
              )}

              {currentAccount ? (
                <div>
                  <div class="setting-option rn-icon-list user-account">
                    <div class="icon-box">
                      <Link href="/author">
                        <img src="/icons/boy-avater.png" alt="Images" />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}

              <div class="setting-option mobile-menu-bar d-block d-xl-none">
                <div class="hamberger">
                  <button class="hamberger-button">
                    <i class="feather-menu"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div class="popup-mobile-menu">
        <div class="inner">
          <div class="header-top">
            <div class="logo logo-custom-css">
              <a class="logo-light" href="index.html">
                <img src="/logo/logo.png" alt="nft-logo" />
              </a>
              <a class="logo-dark" href="index.html">
                <img src="/logo/logo.png" alt="nft-logo" />
              </a>
            </div>
            <div class="close-menu">
              <button class="close-button">
                <i class="feather-x"></i>
              </button>
            </div>
          </div>
          <nav>
            <ul class="mainmenu">
              <li>
                <Link class="nav-link its_new" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link class="nav-link its_new" href="/explor">
                  Explore
                </Link>
              </li>
              <li>
                <Link class="nav-link its_new" href="active">
                  Acitivity
                </Link>
              </li>
              <li>
                <Link class="nav-link its_new" href="/create">
                  Create
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
