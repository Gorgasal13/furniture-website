import React from "react";

import "./products.css";

import { fadeIn } from "../variant";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section className="productsec">
      <h1 className="title">popular Products</h1>
      <span className="popularspan">choose popular product</span>
      <div className="maincon">
        <motion.div
          variants={fadeIn("up", 0.1)}
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
          variants={fadeIn("up", 0.2)}
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
          variants={fadeIn("up", 0.3)}
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
    </section>
  );
};

export default Products;
