import { createBrowserRouter } from "react-router";
import HomeLayOut from "../LayOuts/HomeLayOut";
import HomePage from "../Pages/HomePage";
import CategoryNews from "../Pages/CategoryNews";
import NewsDetails from "../Components/NewsDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayOut from "../LayOuts/AuthLayOut";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayOut></HomeLayOut>,
        children: [
            {
                index : true,
                element: <HomePage></HomePage>
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch("/news.json")
            }
        ]
    },
    {
        path: 'category/details/:id',
        element: <NewsDetails></NewsDetails>,
    },
    {
        path: "/auth",
        element: <AuthLayOut></AuthLayOut>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            }, 
            {
                path: "/auth/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "/news",
        element: <h1>News LayOut</h1>
    },
    {
        path: "/*",
        element: <h1>Error 404</h1>
    },
])