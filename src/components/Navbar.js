import React, { useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";

import "./navbar.css";

//react icons

import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsivenav");
  };
  const [loading, setLoading] = useState(false);
  const [showscrollNavbar, setShowscrollNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowscrollNavbar(true);
      } else {
        setShowscrollNavbar(false);
      }
    };

    // Attach the event listener to the scroll event
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <header>
      <nav
        id="navbar"
        ref={navRef}
        className={`navbar ${showscrollNavbar ? "fixed" : ""}`}
      >
        <a href="#" className="navbarlink">
          <Link className="navbartitle">Furniture</Link>
        </a>
        <ul>
          <div className="dropdown">
            <Link className="lists" id="shop">
              Shop
              <span className="spans">
                <IoIosArrowDown className="icons" />
              </span>
            </Link>
            <div className="dropdown-content">
              <Link className="lists">Category 1</Link>
              <Link className="lists">Category 2</Link>
            </div>
          </div>
          <div className="dropdown">
            <Link className="lists" to="/products" id="pages">
              Products
              <span className="spans">
                <IoIosArrowDown className="icons" />
              </span>
            </Link>
            <div className="dropdown-content">
              <Link className="lists">Chair</Link>
              <Link className="lists">Sofa</Link>
            </div>
          </div>
          <Link className="lists" to={"/about"}>
            About
          </Link>
          <Link className="lists" to={"/contactus"}>
            Contact
          </Link>
        </ul>

        <form className="navbarform">
          <input
            type="text"
            name="search"
            className="searchbar"
            placeholder="Search"
          />
          <CiSearch className="search" size={30} />
        </form>

        {/* <button className="navbarbtn">Sign in</button> */}
        <Link
          onClick={() => setLoading(!loading)}
          className="lists"
          id="myaccount"
          to="/signin"
        >
          My Account
        </Link>
        <div className="carts">
          <CiShoppingBasket size={40} className="cart" />
        </div>
        <button
          className="nav-btn nav-close-btn nav-btn-two"
          onClick={showNavbar}
        >
          <FaTimes size={40} />
        </button>
      </nav>
      <button className="nav-btn nav-btn-one" onClick={showNavbar}>
        <FaBars size={40} />
      </button>
    </header>
  );
};

export default Navbar;
