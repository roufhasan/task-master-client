import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Header from "../components/Home/Header/Header";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Header />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
