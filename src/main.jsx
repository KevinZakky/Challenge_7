import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/Pages/User/Home";
import SearchPage from "./components/Pages/User/Search";
import LoginPage from "./components/Pages/Admin/Login";
import DashboardPage from "./components/Pages/Admin/Dashboard";
import ListCars from "./components/Pages/Admin/ListCars";
import AddCarsPage from "./components/Pages/Admin/AddCars";
import UpdateCarPage from "./components/Pages/Admin/UpdateCar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cars",
    element: <SearchPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/listcars",
    element: <ListCars />,
  },
  {
    path: "/add_cars",
    element: <AddCarsPage />,
  },
  {
    path: "/update/:id",
    element: <UpdateCarPage />,
  },
  {
    path: "/delete/:id",
    element: <ListCars />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
