import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layout/Layouts";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Category from "../pages/Category/Category";
import HomeCategory from "../pages/Home/HomeCategory";
import Login from "../pages/AuthenticationPage/Login";
import Register from "../pages/AuthenticationPage/Register";
import Blogs from "../pages/Blogs/Blogs";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../pages/MyToys/MyToys";
import SingleToy from "../pages/SingleToy/SingleToy";
import ProductUpsert from "../pages/ProductUpsert/ProductUpsert";
import ToyEdit from "../pages/ToyEdit/ToyEdit";
import ToyTables from "../pages/ToyTables/ToyTables";

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
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
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
        element: <ToyTables />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/edit/:id",
        element: (
          <PrivateRoute>
            <ToyEdit />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://server-toy-marketplace.vercel.app/toy/${params.id}`),
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <ProductUpsert />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
