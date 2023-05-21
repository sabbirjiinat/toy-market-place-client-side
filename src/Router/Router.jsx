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
import Blog from "../Pages/Blog/Blog";
import SingleDanceMat from "../Pages/Home/ShopCategory/DanceMats/SingleDanceMat";
import SingleElectronicPets from "../Pages/Home/ShopCategory/ElectronicPets/SingleElectronicPets";
import SingleRobot from "../Pages/Home/ShopCategory/Robots/SingleRobot";
import SingleToy from "../components/AllToys/SingleToy";

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
        path: "danceMat/:id",
        element: (
          <PrivateRoute>
            <SingleDanceMat></SingleDanceMat>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://electronic-toy-world-server-site.vercel.app/toys/${params.id}`
          ),
      },
      {
        path: "electronicPets/:id",
        element: (
          <PrivateRoute>
            <SingleElectronicPets></SingleElectronicPets>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://electronic-toy-world-server-site.vercel.app/toys/${params.id}`
          ),
      },
      {
        path: "robot/:id",
        element: (
          <PrivateRoute>
            <SingleRobot></SingleRobot>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://electronic-toy-world-server-site.vercel.app/toys/${params.id}`
          ),
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
    
      },
      {
        path: "allToys/:id",
        element: (
          <PrivateRoute>
            <SingleToy></SingleToy>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://electronic-toy-world-server-site.vercel.app/toys/${params.id}`
          ),
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
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
