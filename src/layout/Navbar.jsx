import "./Navbar.css";
import Logo from "../assets/foodlogochikiu.png";
import Profile from "../assets/Profile.png";

import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [openMobile, setOpenMobile] = useState(false);

  const navigate = useNavigate();

  function HideMobileMenu() {
    setOpenMobile(false);
  }

  return (
    <>
      <div className="Navbar">

        {/* Left */}

        <div className="nav-left">
          <img className="Logo" src={Logo} alt="Logo" />

          <h1 className="heading">
            Chiku Food-Corner
          </h1>
        </div>

        {/* Center */}

        <div className="nav-middle">
          <Link to="/">Home</Link>
          <Link to="/service">Service</Link>
          <Link to="/about">About Us</Link>
          <Link to="/our-foods">Our Foods</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* Right */}

        <div className="nav-right">

          <button
            className="Book-btn"
            onClick={() => navigate("/booktable")}
          >
            Book Your Order
          </button>

          <img
            src={Profile}
            alt="Profile"
            className="profile-icon"
            onClick={() => navigate("/login")}
          />

        </div>

        {/* Mobile Menu Icon */}

        <div className="menu-icon">
          {openMobile ? (
            <RxCross2
              size={28}
              onClick={() => setOpenMobile(false)}
            />
          ) : (
            <TiThMenu
              size={28}
              onClick={() => setOpenMobile(true)}
            />
          )}
        </div>

        {/* Mobile Menu */}

        {openMobile && (
          <div className="mobile-menu">

            <div className="mobile-menu-item">

              <Link onClick={HideMobileMenu} to="/">
                Home
              </Link>

              <Link onClick={HideMobileMenu} to="/service">
                Service
              </Link>

              <Link onClick={HideMobileMenu} to="/about">
                About Us
              </Link>

              <Link onClick={HideMobileMenu} to="/our-foods">
                Our Foods
              </Link>

              <Link onClick={HideMobileMenu} to="/contact">
                Contact Us
              </Link>

            </div>

            <div className="mobile-btn">

              <button
                className="Book-btn"
                onClick={() => {
                  navigate("/booktable");
                  HideMobileMenu();
                }}
              >
                Book Your Order
              </button>

              <button
                className="ls-btn"
                onClick={() => {
                  navigate("/login");
                  HideMobileMenu();
                }}
              >
                Login / Sign Up
              </button>

            </div>

          </div>
        )}

      </div>
    </>
  );
}

export default Navbar;