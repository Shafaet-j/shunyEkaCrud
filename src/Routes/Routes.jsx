import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../Layout/Main";
import AddUser from "../pages/AddUser/AddUser";
import UserDetails from "../pages/UserDetails/UserDetails";
import UpdateUser from "../pages/UpdateUser/UpdateUser";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addUser",
        element: <AddUser></AddUser>,
      },
      {
        path: "/details/:id",
        element: <UserDetails></UserDetails>,
        loader: ({ params }) =>
          fetch(
            `https://shuny-eka-server-shafaet-j.vercel.app/details/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: <UpdateUser></UpdateUser>,
        loader: ({ params }) =>
          fetch(
            `https://shuny-eka-server-shafaet-j.vercel.app/details/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
