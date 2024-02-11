// Singin.jsx

// import React, { useEffect, useState } from "react";
// import ClipLoader from "react-spinners/ClipLoader";
import "./singin.css";

import { MdOutlineMailOutline } from "react-icons/md";
import { MdPassword } from "react-icons/md";

import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";

const Singin = () => {
  // const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const loginHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.login());
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  return (
    <section className="signsec darken-background">
      <div className="signcon">
        <form onSubmit={loginHandler} className="signform">
          <div className="control">
            <label htmlFor="email" className="signlabel">
              Email
            </label>
            <div className="input-container">
              <input
                type="email"
                id="email"
                className="signinput"
                placeholder="Email"
              />
              <MdOutlineMailOutline className="icon" size={20} />
            </div>
          </div>
          <div className="control">
            <label htmlFor="password" className="signlabel">
              Password
            </label>
            <div className="input-container">
              <input
                type="password"
                id="password"
                className="signinput"
                placeholder="Password"
              />
              <MdPassword size={20} className="icon" />
            </div>
          </div>
          <div className="remember">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
            <a href="1" className="forgotpassword">
              Forgot Password?
            </a>
          </div>
          <button className="signbtn">Login</button>
        </form>
      </div>
    </section>
  );
};

export default Singin;
