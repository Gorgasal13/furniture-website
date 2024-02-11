import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./navbarsign.css";

import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";

import { authActions } from "../store/auth";

const SignPage = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <div>
      {isAuth && (
        <header>
          <nav className="navbar" id="navbar">
            <h1>Furniture</h1>
            <ul>
              <div className="dropdown">
                <Link className="lists" id="shop">
                  Shop
                  <span className="spans">
                    <IoIosArrowDown className="icons" />
                  </span>
                </Link>
                <div className="dropdown-content">
                  <Link to="/category1" className="lists">
                    Category 1
                  </Link>
                  <Link to="/category2" className="lists">
                    Category 2
                  </Link>
                </div>
              </div>
              <div className="dropdown">
                <Link className="lists" to="/products" id="pages">
                  Pages
                  <span className="spans">
                    <IoIosArrowDown className="icons" />
                  </span>
                </Link>
                <div className="dropdown-content">
                  <Link className="lists">Page 1</Link>
                  <Link className="lists">Page 2</Link>
                </div>
              </div>
              <Link className="lists">Blog</Link>
              <Link className="lists">Contact</Link>
            </ul>
            <form>
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
              //     onClick={() => setLoading(!loading)}
              className="lists"
              id="myaccount"
              to="/signin"
              onClick={logoutHandler}
            >
              Logout
            </Link>
            <div className="carts">
              <CiShoppingBasket size={40} className="cart" />
            </div>
          </nav>
        </header>
      )}
    </div>
  );
};

export default SignPage;
