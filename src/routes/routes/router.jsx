import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Page/Home/Home/Home/Home";
import Login from "../../Page/Login/Login";
import SignUp from "../../Page/SignUp/SignUp";
import ErrorPage from "../../Page/ErrorPage/ErrorPage";
import DashboardLayout from "../../Layout/DashboardLayout";

import InstructorsRoutes from "../InstructorsRoutes/InstructorsRoutes";
import StudentsRoutes from "../StudentsRoutes/StudentsRoutes";


import EnrolledClasses from "../../Page/Dashboard/Students/EnrolledClasses/EnrolledClasses";
import MyClasses from "../../Page/Dashboard/Instructor/MyClasses/MyClasses";
import Instructors from "../../Page/Instructors/Instructors";
import Classes from "../../Page/Classes/Classes";
import PrivetRoute from "../PrivetRoutes/PrivetRoute";
import Dashboard from "../../Page/Dashboard/Dashboard/Dashboard";
import SelectedClass from "../../Page/Dashboard/Students/SelectedClass/SelectedClass";
import Payment from "../../Page/Dashboard/Students/Payment/Payment";
import PaymentHistory from "../../Page/Dashboard/Students/PaymentHistory/PaymentHistory";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import Feedback from "../../Page/Dashboard/Admin/ManageClasses/Feedback";
import ManageUsers from "../../Page/Dashboard/Admin/ManageUsers/ManageUsers";
import Addclass from "../../Page/Dashboard/Instructor/AddClass/Addclass";
import UpdateClass from "../../Page/Dashboard/Instructor/MyClasses/UpdateClass";
import ManageClasses from "../../Page/Dashboard/Admin/ManageClasses/ManageClasses";

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
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
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
  {
    path: "dashboard",
    element: (
      <PrivetRoute>
        <DashboardLayout></DashboardLayout>
      </PrivetRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "enrolledClass",
        element: (
          <StudentsRoutes>
            <EnrolledClasses></EnrolledClasses>
          </StudentsRoutes>
        ),
      },
      {
        path: "mySelectedClass",
        element: (
          <StudentsRoutes>
            <SelectedClass></SelectedClass>
          </StudentsRoutes>
        ),
      },
      {
        path: "pay/:id/:price",
        element: (
          <StudentsRoutes>
            <Payment></Payment>
          </StudentsRoutes>
        ),
      },
      {
        path: "paymentHistory",
        element: (
          <StudentsRoutes>
            <PaymentHistory></PaymentHistory>
          </StudentsRoutes>
        ),
      },
      {
        path: "manageClass",
        element: (
          <AdminRoutes>
            <ManageClasses></ManageClasses>
          </AdminRoutes>
        ),
      },
      {
        path: "feedback/:id",
        element: (
          <AdminRoutes>
            <Feedback></Feedback>
          </AdminRoutes>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoutes>
            <ManageUsers></ManageUsers>
          </AdminRoutes>
        ),
      },
      {
        path: "addClass",
        element: (
          <InstructorsRoutes>
            <Addclass></Addclass>
          </InstructorsRoutes>
        ),
      },
      {
        path: "myClass",
        element: (
          <InstructorsRoutes>
            <MyClasses></MyClasses>
          </InstructorsRoutes>
        ),
      },
      {
        path: "update/:id",
        element: (
          <InstructorsRoutes>
            <UpdateClass></UpdateClass>
          </InstructorsRoutes>
        ),
      },
    ],
  },
]);
export default router;
