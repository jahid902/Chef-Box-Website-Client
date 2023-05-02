import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import ChefDetail from "../components/ChefDetail";
import LoginPage from "../components/LoginPage";
import RegisterPage from "../components/RegisterPage";
import BlogPage from "../components/BlogPage";


const router =  createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element: <Home></Home>,
                loader: ()=> fetch('https://chef-box-server-jahid902.vercel.app/chefs')
            },
            {
                path:"/blog",
                element: <BlogPage></BlogPage>
            },
            {
                path:"/chefs/:id",
                element:<ChefDetail></ChefDetail>,
                loader:({params}) => fetch(`https://chef-box-server-jahid902.vercel.app/chefs/${params.id}`)
            },
            {
                path:"/login",
                element:<LoginPage></LoginPage>
            },
            {
                path:"/register",
                element:<RegisterPage></RegisterPage>
            }
        ]
    }
])

export default router;