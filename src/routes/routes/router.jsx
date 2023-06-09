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
  element:<DashboardLayout></DashboardLayout>,
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
      element:<ManageClasses></ManageClasses>
    },
    {
      path:'manageUsers',
      element:<ManageUsers></ManageUsers>
    },
  


  ]
}
]);
export default router;
