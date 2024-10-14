import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Overview from "../pages/overview";
import Performance from "../pages/performance";
import Products from "../pages/products";
import PageDoesNotExist from "../pages/error";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<DashboardLayout/>,
        children:[{
            path:"dashboard/overview",
            element:<Overview/>
        },
    {
        path:"dashboard/performance",
        element:<Performance/>
    },
    {
        path:"dashboard/product",
        element:<Products/>
    },   {
        path:"*",
        element:<PageDoesNotExist/>
    }

]
    },
 
])