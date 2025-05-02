import { createBrowserRouter } from "react-router";
import HomeLayOut from "../LayOuts/HomeLayOut";
import HomePage from "../Pages/HomePage";
import CategoryNews from "../Pages/CategoryNews";
import NewsDetails from "../Components/NewsDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayOut from "../LayOuts/AuthLayOut";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Pages/Loading";
import ForgatePassword from "../Pages/ForgatePassword";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayOut></HomeLayOut>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>,
        children: [
            {
                index: true,
                element: <HomePage></HomePage>,
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch("/news.json"),
                hydrateFallbackElement: <Loading></Loading>
            },
        ],
    },
    {
        path: "category/details/:id",
        element: (
            <PrivateRoute>
                <NewsDetails></NewsDetails>
            </PrivateRoute>
        ),
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>
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
                element: <Register></Register>,
            },
            {
                path: "/auth/forgate-password",
                element: <ForgatePassword></ForgatePassword>,
            }
        ],
    },
    {
        path: "/*",
        element: <h1>Error 404</h1>,
    },
]);
