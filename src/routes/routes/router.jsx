import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Page/Home/Home/Home/Home";
import Login from "../../Page/Login/Login";
import SignUp from "../../Page/SignUp/SignUp";
import ErrorPage from "../../Page/ErrorPage/ErrorPage";
import DashboardLayout from "../../Layout/DashboardLayout";
import EnrolledClasses from "../../Page/Dashboard/EnrolledClasses/EnrolledClasses";
import MyClasses from "../../Page/Dashboard/MyClasses/MyClasses";
import ManageClasses from "../../Page/Dashboard/ManageClasses/ManageClasses";

import ManageUsers from "../../Page/Dashboard/ManageUsers/ManageUsers";
import Dashboard from "../../Page/Dashboard/Dashboard/Dashboard";
import Addclass from "../../Page/Dashboard/AddClass/Addclass";
import Instructors from "../../Page/Instructors/Instructors";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import PrivetRoute from "../PrivetRoutes/PrivetRoute";

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
        path: "/instructors",
        element:<Instructors></Instructors>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {  path:"dashboard",
  element:<PrivetRoute><DashboardLayout></DashboardLayout></PrivetRoute>,
  children:[
    {
      path:'/dashboard',
      element:<Dashboard></Dashboard>
    },
    {
      path:'enrolledClass',
      element:<EnrolledClasses></EnrolledClasses>
    },
    {
      path:'mySelectedClass',
      element:<MyClasses></MyClasses>
    },
    {
      path:'manageClass',
      element:<AdminRoutes><ManageClasses></ManageClasses></AdminRoutes>
    },
    {
      path:'manageUsers',
      element:<AdminRoutes><ManageUsers></ManageUsers></AdminRoutes>
    },
    {
      path:'addClass',
      element:<Addclass></Addclass>
    },
    {
      path:'myClass',
      element:<MyClasses></MyClasses>
    },
  


  ]
}
]);
export default router;
