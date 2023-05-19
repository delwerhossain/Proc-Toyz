import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layout/Layouts";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Category from "../pages/Category/Category";
import HomeCategory from "../pages/Home/HomeCategory";

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
        path: "/categoryall/:all",
        element: <HomeCategory />,
      },
      {
        path: "/all",
        element: <Category />,
        loader: () => fetch(`http://localhost:5000/toys`),
      },
      {
        path: "/category/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
]);