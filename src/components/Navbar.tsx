import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";


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
      <nav className={`w-full top-0 z-50 ${sticky ? "fixed bg-white" : "absolute"}`}>
        <div className="container mx-auto navbar-container px-4 lg:px-0 lg:pl-4">
          <div className="navbar flex py-4 lg:py-6 justify-between">
            <Link className="flex items-center" to="/">
              <p className="font-bold text-2xl xxl:text-3xl text-primary" onClick={goTop}>
                CryptoLand
              </p>
            </Link>
            <ul className="hidden lg:flex gap-12 font-roboto text-secondary text-lg pl-20 xl:pl-40 items-center">
              <li>
                <Link to="market">Market</Link>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
            </ul>
            <ul className="hidden lg:flex font-roboto gap-8 text-lg items-center ml-auto mr-4">
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
                size="xl"
                onClick={openMobile}
              />
            </span>
          </div>
        </div>
      </nav>

      {/* mobile nav */}
      <div className={`mobile-nav flex items-center justify-center fixed h-screen w-full lg:hidden transition ease-in-out delay-150 bg-[#f3f2f4] top-0 z-[60] ${mobile ? "left-0" : "-left-[100%]"}`}>
        <FontAwesomeIcon
          icon={faXmark}
          size="2x"
          style={{position: "absolute", top: "1rem", right: "1rem"}}
          onClick={openMobile}
        />
        <ul className="text-2xl font-bold">
          <li className="p-2" onClick={openMobile}>
            <Link to="home">Home</Link>
          </li>
          <li className="p-2" onClick={openMobile}>
            <Link to="market">Market</Link>
          </li>
          <li className="p-2" onClick={openMobile}>
            <a href="#news">News</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;