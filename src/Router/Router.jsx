import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Registration from "../Pages/SharedPages/Registration/Registration";
import Login from "../Pages/SharedPages/Login/Login";
import AddAToy from "../components/AddAToy/AddAToy";

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
            }
        ]
    }
])

export default router;