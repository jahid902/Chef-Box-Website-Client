import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import ChefDetail from "../components/ChefDetail";


const router =  createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"/chefs",
                element:<ChefDetail></ChefDetail>
            },
        ]
    }
])

export default router;