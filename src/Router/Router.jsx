import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Registration from "../Pages/SharedPages/Registration/Registration";

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
            }
        ]
    }
])

export default router;