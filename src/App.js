import { Fragment } from "react";
import { useSelector } from "react-redux";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/Homepage";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import Newproducts from "./components/Newproducts";
import Singin from "./components/Singin";
import About from "./components/About";
import Products from "./components/Products";
import SignPage from "./components/Navbarsign";
import UserProfile from "./components/Useprofile";
import Sectionthree from "./components/Sectionthree";
import Services from "./components/Services";
import Productsdetails from "./components/Productsdetails";
import Allproducts from "./components/Allproducts";
import Footer from "./components/Footer";
import Instagrampage from "./components/Instagrampage";
import Contactus from "./components/Contactus";

const SignInContent = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      {!isAuth && <Singin />}
      {isAuth && <UserProfile />}
    </Fragment>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <div>
            <HomePage />
            <Products />
            <Sectionthree />
            <Allproducts />
            <Instagrampage />
            <Services />
            <Footer />
          </div>
        ),
      },
      {
        path: "products",
        element: (
          <div>
            <Newproducts />
            <Services />
            <Footer />
          </div>
        ),
      },
      {
        path: "/productsdetail",
        element: (
          <div>
            <Productsdetails />
            <Services />
            <Footer />
          </div>
        ),
      },
      {
        path: "/contactus",
        element: (
          <div>
            <Contactus />
            <Services />
            <Footer />
          </div>
        ),
      },
      {
        path: "/about",
        element: (
          <div>
            <About />
            <Services />
            <Footer />
          </div>
        ),
      },
    ],
  },

  {
    path: "/signin",
    element: (
      <Fragment>
        <SignPage />
        <SignInContent />
      </Fragment>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
