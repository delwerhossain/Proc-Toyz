import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layout/Layouts";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Category from "../pages/Category/Category";
import HomeCategory from "../pages/Home/HomeCategory";
import Login from "../pages/AuthenticationPage/Login";
import Register from "../pages/AuthenticationPage/Register";
import Blogs from "../pages/Blogs/Blogs";
import ToysCard from "../pages/ToysCard/ToysCard";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../pages/MyToys/MyToys";
import SingleToy from "../pages/SingleToy/SingleToy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: (
          <PrivateRoute>
            <Blogs />
          </PrivateRoute>
        ),
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
        loader: () => fetch(`https://server-toy-marketplace.vercel.app/toys`),
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRoute>
            <SingleToy />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://server-toy-marketplace.vercel.app/toy/${params.id}`),
      },
      {
        path: "/categoryall/:all",
        element: <HomeCategory />,
      },
      {
        path: "/all",
        element: <Category />,
        loader: () => fetch(`https://server-toy-marketplace.vercel.app/toys`),
      },
      {
        path: "/category/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(
            `https://server-toy-marketplace.vercel.app/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
