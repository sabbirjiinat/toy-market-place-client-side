import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Registration from "../Pages/SharedPages/Registration/Registration";
import Login from "../Pages/SharedPages/Login/Login";
import AddAToy from "../components/AddAToy/AddAToy";
import AllToys from "../components/AllToys/AllToys";
import MyToys from "../components/MyToys/MyToys";
import UpdateMyToy from "../components/MyToys/UpdateMyToy";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
        element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
            element: <Home></Home>,
          
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/addAToy",
        element: (
          <PrivateRoute>
            <AddAToy></AddAToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: () =>
          fetch("https://electronic-toy-world-server-site.vercel.app/toys"),
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "updateMyToy/:id",
        element: <UpdateMyToy></UpdateMyToy>,
        loader: ({ params }) =>
          fetch(
            `https://electronic-toy-world-server-site.vercel.app/toys/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
