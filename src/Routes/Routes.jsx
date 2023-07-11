import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ViewRecipe from "../Pages/ViewRecipe/ViewRecipe";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch("https://assignment-10-server-raihanrasul17.vercel.app/restaurant")
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element:<Register></Register>
        },
        {
          path: "/restaurant/:ID",
          element: <PrivateRoute><ViewRecipe></ViewRecipe></PrivateRoute>,
          loader: ({params})=>fetch(`https://assignment-10-server-raihanrasul17.vercel.app/restaurant/${params.ID}`)
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        }
      ]
    },
  ]);

  export default router;