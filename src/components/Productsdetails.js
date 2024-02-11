import React, { useState } from "react";

import "./productsdetails.css";

import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const Productsdetails = () => {
  const [counter, setCounter] = useState(0);
  const Decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <section className="productsdetailsec">
      <div className="backimg">
        <h1>Product Details</h1>
        <p>Home > Details</p>
      </div>
      <div className="productsdetailbigcon">
        <div className="productsdetailsmallcon" id="smallbox">
          <div className="smallcontainerone">
            <div className="bigimg"></div>
            <div className="smallimgs">
              <div className="smallimg" id="smallimgone"></div>
              <div className="smallimg" id="smallimgtwo"></div>
              <div className="smallimg" id="smallimgthree"></div>
            </div>
          </div>
          <div className="smallcontainertwo">
            <h3>Faded SkyBlu Denim Jeans</h3>
            <span>Price : $470</span>
            <span>Category : HouseHold</span>
            <span>Availibility : In Stock</span>
            <p className="productparagraph">
              Mill Oil is an innovative oil filled radiator with the most modern
              technology. If you are looking for something that can make your
              interior look awesome, and at the same time.
            </p>
            <div className="counterbtn">
              <CiCircleMinus size={25} onClick={Decrement} />
              <span className="counternumber">{counter}</span>
              <CiCirclePlus
                size={25}
                onClick={() => {
                  setCounter(counter + 1);
                }}
              />
            </div>
            <div className="add-card">
              <a href="#" className="add-to-card">
                Add To Card
              </a>
              <div className="hearticon">
                <CiHeart size={30} />
              </div>
            </div>
          </div>
          <div className="social-media"></div>
        </div>
        <div className="productsdetailsmallcon"></div>
      </div>
    </section>
  );
};

export default Productsdetails;
