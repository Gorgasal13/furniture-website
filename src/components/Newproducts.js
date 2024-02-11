import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./newproducts.css";
import { fadeIn } from "../variant";
import { motion } from "framer-motion";

const Newproducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <section className="productsection">
      <div className="backimg">
        <h1>All Products</h1>
        <p>Home > Products</p>
      </div>
      <div className="products-title">
        <h1>All Product</h1>
        <span>
          Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
          quis viverra ornare, eros dolor interdum nulla.
        </span>
      </div>
      <div className="products-choose">
        <ul>
          <li id="all" onClick={() => setSelectedCategory("all")}>
            <a>All</a>
          </li>
          <li id="chair" onClick={() => setSelectedCategory("chair")}>
            <a>Chair</a>
          </li>
          <li id="sofa" onClick={() => setSelectedCategory("sofa")}>
            <a>Sofa</a>
          </li>
          <li id="table" onClick={() => setSelectedCategory("table")}>
            <a>Table</a>
          </li>
          <li id="bed" onClick={() => setSelectedCategory("bed")}>
            <a>Bed</a>
          </li>
          <li id="decore" onClick={() => setSelectedCategory("decore")}>
            <a>Decore</a>
          </li>
        </ul>
      </div>
      <div className="products-div">
        <div className="first-con">
          <div
            className="products-con"
            style={{
              display:
                selectedCategory === "all" || selectedCategory === "sofa"
                  ? "block"
                  : "none",
            }}
          >
            <div className="imgdiv" id="pro-one"></div>
            <h4 className="smalltitle">
              <Link to={"/productsdetail"} className="productslink">
                Bly Microfiber / Microsuede 56" Armless Loveseat
              </Link>
            </h4>
            <span className="spn">$370</span>
          </div>
          <div
            className="products-con"
            style={{
              display:
                selectedCategory === "all" || selectedCategory === "sofa"
                  ? "block"
                  : "none",
            }}
          >
            <div className="imgdiv" id="pro-two"></div>
            <h4 className="smalltitle">
              <Link to={"/productsdetail"} className="productslink">
                Bly Microfiber / Microsuede 56" Armless Loveseat
              </Link>
            </h4>
            <span className="spn">$455</span>
          </div>
          <div
            className="products-con"
            style={{
              display:
                selectedCategory === "all" || selectedCategory === "sofa"
                  ? "block"
                  : "none",
            }}
          >
            <div className="imgdiv" id="pro-three"></div>
            <h4 className="smalltitle">
              <Link to={"/productsdetail"} className="productslink">
                Bly Microfiber / Microsuede 56" Armless Loveseat
              </Link>
            </h4>
            <span className="spn">$670</span>
          </div>
        </div>
        <div className="second-con">
          <div
            className="products-con"
            style={{
              display:
                selectedCategory === "all" || selectedCategory === "chair"
                  ? "block"
                  : "none",
            }}
          >
            <div className="imgdiv" id="pro-four"></div>
            <h4 className="smalltitle">
              <Link to={"/productsdetail"} className="productslink">
                Bly Microfiber / Microsuede 60" Armless Loveseat
              </Link>
            </h4>
            <span className="spn">$400</span>
          </div>
          <div
            className="products-con"
            style={{
              display:
                selectedCategory === "all" || selectedCategory === "chair"
                  ? "block"
                  : "none",
            }}
          >
            <div className="imgdiv" id="pro-five"></div>
            <h4 className="smalltitle">
              <Link to={"/productsdetail"} className="productslink">
                Bly Microfiber / Microsuede 56" Armless Loveseat
              </Link>
            </h4>
            <span className="spn">$510</span>
          </div>

          <div
            className="products-con"
            style={{
              display:
                selectedCategory === "all" || selectedCategory === "bed"
                  ? "block"
                  : "none",
            }}
          >
            <div className="imgdiv" id="pro-eight"></div>
            <h4 className="smalltitle">
              <Link to={"/productsdetail"} className="productslink">
                Bly Microfiber / Microsuede 60" Armless Loveseat
              </Link>
            </h4>
            <span className="spn">$555</span>
          </div>
        </div>
        <div className="therd-con">
          <div
            className="products-con"
            style={{
              display:
                selectedCategory === "all" || selectedCategory === "table"
                  ? "block"
                  : "none",
            }}
          >
            <div className="imgdiv" id="pro-seven"></div>
            <h4 className="smalltitle">
              <Link to={"/productsdetail"} className="productslink">
                Bly Microfiber / Microsuede 58" Armless Loveseat
              </Link>
            </h4>
            <span className="spn">$120</span>
          </div>

          <div
            className="products-con"
            style={{
              display:
                selectedCategory === "all" || selectedCategory === "table"
                  ? "block"
                  : "none",
            }}
          >
            <div className="imgdiv" id="pro-six"></div>
            <h4 className="smalltitle">
              <Link to={"/productsdetail"} className="productslink">
                Bly Microfiber / Microsuede 50" Armless Loveseat
              </Link>
            </h4>
            <span className="spn">$870</span>
          </div>
          <div
            className="products-con"
            style={{
              display:
                selectedCategory === "all" || selectedCategory === "decore"
                  ? "block"
                  : "none",
            }}
            id="last-div"
          >
            <div className="imgdiv" id="pro-nine"></div>
            <h4 className="smalltitle">
              <Link to={"/productsdetail"} className="productslink">
                Bly Microfiber / Microsuede 60" Armless Loveseat
              </Link>
            </h4>
            <span className="spn">$620</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newproducts;
