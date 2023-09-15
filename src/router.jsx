import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import HomeLayout from "./Layout/HomeLayout";
import CheckOut from "./pages/Service/CheckOut/CheckOut";
import SignUp from "./pages/Login/SignUp/SignUp";
import PrivateRoute from "./privateRoute/PrivateRoute";
import MyBooking from "./pages/MyBooking/MyBooking";
import Products from "./pages/Home/Products/Products";
import ProductDetails from "./pages/Home/Products/ProductDetails/ProductDetails";
import About from "./pages/Home/About/About";
import Service from "./pages/Service/Service";
import Blog from "./pages/Blog/Blog";
import ContactPage from "./pages/ContactPage/ContactPage";
import LogIn from "./pages/Login/Login/LogIn";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/service/${params.id}`),
      },
      {
        path: "/product/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/product/${params.id}`),
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/bookings",
        element: <MyBooking />,
      },
    ],
  },
]);
