import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Header from "../components/Home/Header/Header";

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
]);
