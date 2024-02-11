import React from "react";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";

import "./services.css";

const Services = () => {
  return (
    <section className="servicessec">
      <div className="servicescon">
        <div className="servicessmallcon">
          <div className="servicestext">
            <MdDeliveryDining size={50} className="servicesicon" />
            <h4 className="servicestitle">Fast & Free Delivery</h4>
            <p>Free delivery on all orders</p>
          </div>
        </div>
        <div className="servicessmallcon">
          <div className="servicessmallcon">
            <div className="servicestext">
              <RiSecurePaymentLine size={50} className="servicesicon" />

              <h4 className="servicestitle">Security Payment</h4>
              <p>Free delivery on all orders</p>
            </div>
          </div>
        </div>
        <div className="servicessmallcon">
          <div className="servicessmallcon">
            <div className="servicestext">
              <MdOutlineAttachMoney size={50} className="servicesicon" />
              <h4 className="servicestitle">Guarante Money Back</h4>
              <p>Free delivery on all orders</p>
            </div>
          </div>
        </div>
        <div className="servicessmallcon">
          <div className="servicessmallcon">
            <div className="servicestext">
              <BsFillPersonLinesFill size={50} className="servicesicon" />
              <h4 className="servicestitle">Online Support</h4>
              <p>Free delivery on all orders</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
