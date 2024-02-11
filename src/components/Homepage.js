import React, { useState, useEffect } from "react";

import "./homepage.css";

import ClipLoader from "react-spinners/ClipLoader";

const Homepage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <div className={`homecon ${loading ? "loading" : ""}`}>
      <ClipLoader color="black" loading={loading} size={50} />
      {!loading && (
        <section className="homesection" id="navbar">
          <div className="homepagecon">
            <span className="secondspan">%70 SALE OFF</span>
            <h1 className="homedivtitle">furniture at cost</h1>
            <p>s simply dummy text of the printing and typesetting industry.</p>
            <a href="/products" className="discover-more-link">
              Discover more
            </a>
          </div>
        </section>
      )}
    </div>
  );
};

export default Homepage;
