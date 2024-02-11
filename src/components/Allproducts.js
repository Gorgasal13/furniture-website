import React from "react";
import { Link } from "react-router-dom";
import { fadeIn } from "../variant";
import { motion } from "framer-motion";

import "./allproducts.css";
const Allproducts = () => {
  return (
    <section className="allproductssec">
      <h1 className="allproductstitle">prodcuts you may like</h1>
      <div className="allproductspara">
        <p>Suspendisse varius enim in eros elementum tristique.</p>
        <p> Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
      </div>
      <div className="maincon">
        <motion.div
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="productscon"
        >
          <div className="imgdiv" id="one"></div>
          <h4 className="smalltitle">
            <Link to={"/productsdetail"} className="productslink">
              Bly Microfiber / Microsuede 56" Armless Loveseat
            </Link>
          </h4>
          <span className="spn">$370</span>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="productscon"
        >
          <div className="imgdiv" id="two"></div>
          <h4 className="smalltitle">
            <Link to={"/productsdetail"} className="productslink">
              Bly Microfiber / Microsuede 56" Armless Loveseat
            </Link>
          </h4>
          <span className="spn">$455</span>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="productscon"
        >
          <div className="imgdiv" id="three"></div>
          <h4 className="smalltitle">
            <Link to={"/productsdetail"} className="productslink">
              Bly Microfiber / Microsuede 56" Armless Loveseat
            </Link>
          </h4>
          <span className="spn">$670</span>
        </motion.div>
      </div>
      <a href="/products" className="discover-more-link-two">
        Discover more
      </a>
    </section>
  );
};

export default Allproducts;
