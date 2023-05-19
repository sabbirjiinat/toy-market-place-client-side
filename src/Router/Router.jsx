import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Registration from "../Pages/SharedPages/Registration/Registration";
import Login from "../Pages/SharedPages/Login/Login";
import AddAToy from "../components/AddAToy/AddAToy";
import AllToys from "../components/AllToys/AllToys";
import MyToys from "../components/MyToys/MyToys";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: 'registration',
                element:<Registration></Registration>
            },
            {
                path: 'login',
                element:<Login></Login>
            },
            {
                path: '/addAToy',
                element:<AddAToy></AddAToy>
            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>,
                loader:()=>fetch('http://localhost:5000/toys')
            },
            {
                path: '/myToys',
                element:<MyToys></MyToys>
            }
        ]
    }
])

export default router;