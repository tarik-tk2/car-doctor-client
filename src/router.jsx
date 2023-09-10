import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import HomeLayout from "./Layout/HomeLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [{
            path: "/",
            element: <Home />,
           
        },
        ]
    }

])