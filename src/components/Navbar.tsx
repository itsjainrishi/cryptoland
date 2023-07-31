import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";


function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobile, setMobile] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  let location = useLocation();

  window.addEventListener("scroll", handleScroll);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openMobile = () => {
    setMobile(!mobile);
  };

  return (
    <>
      <nav className={`hidden lg:block w-full top-0 z-50 ${sticky ? "fixed bg-white" : "absolute"}`}>
        <div className="container mx-auto navbar-container">
          <div className=" navbar flex py-6 justify-space-between">
            <Link className="flex items-center" to="/">
              <p className="font-bold text-xl xl:text-3xl text-primary" onClick={goTop}>
                CryptoLand
              </p>
            </Link>
            <ul className="flex gap-12 font-roboto text-secondary text-lg xl:pl-40 items-center">
              <li>
                <Link to="market">Market</Link>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
            </ul>
            <ul className="flex font-roboto gap-8 text-lg items-center ml-auto mr-4">
              <li>
                <button className={`rounded-xl px-4 py-3 ${sticky ? "bg-primary text-[#fafafa]" : location.pathname === "/" ? "bg-[#fafafa] text-primary" : "text-[#fafafa] bg-primary"}`}>
                  <Link to="register">Register</Link>
                </button>
              </li>
            </ul>
            <span>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-discord"></i>
              {/* mobile */}
              <FontAwesomeIcon
                className="hamburger-menu lg:hidden"
                icon={faBarsStaggered}
                onClick={openMobile}
              />
            </span>
          </div>
        </div>
      </nav>

      {/* mobile nav */}
      <div className={`mobile-nav fixed h-screen w-full lg:hidden ${mobile ? "left-0" : ""}`}>
        <i onClick={openMobile} className="fa-solid fa-xmark close-mobile"></i>
        <ul>
          <li onClick={openMobile}>
            <a href="#market">Market</a>
          </li>
          <li onClick={openMobile}>
            <a href="#exchange">Exchange</a>
          </li>
          <li onClick={openMobile}>
            <a href="#news">News</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;