import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import HomeLayout from "./Layout/HomeLayout";
import CheckOut from "./pages/Service/CheckOut/CheckOut";
import Login from "./pages/Login/Login";

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
        path: "/service/:id",
        element: <CheckOut />,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/service/${params.id}`),
      },
      {
        path: '/login',
        element:<Login/>
      }
    ],
  },
]);
