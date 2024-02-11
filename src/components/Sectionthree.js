import React from "react";
import { fadeIn } from "../variant";
import { motion } from "framer-motion";

import "./sectionthree.css";

const Sectionthree = () => {
  return (
    <section className="secthree">
      <div className="secthreecon">
        <div className="secthreeconsmall" id="firstcon"></div>
        <motion.div
          variants={fadeIn("bottom", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="secthreeconsmall"
          id="secondcon"
        >
          <h1 className="secondtitle">Best Furniture </h1>
          <h1 className="secondtitle">manufacturer</h1>

          <p>
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
          </p>
          <p>quis viverra ornare, eros dolor interdum nulla.</p>
          <p>
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
          </p>
          <p>quis viverra ornare, eros dolor interdum nulla.</p>
          <a href="#" className="discover-more-link">
            Discover more
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Sectionthree;
