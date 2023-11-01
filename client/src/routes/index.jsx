import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Promos from "../pages/Promos";
import Profile from "../pages/Profile";

import AddressInput from "../pages/AddressInput";
import FleetTypeSelect from "../pages/FleetTypeSelect";
import BookingConfirmation from "../pages/BookingConfirmation";
import Checkout from "../pages/Checkout";
import WaitingForFleet from "../pages/WaitingForFleet";
import Finish from "../pages/Finish";

import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    element: <Layout />,
    loader: () => {
      const access_token = localStorage.getItem("access_token");
      if (!access_token) {
        throw redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/promos",
        element: <Promos />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/address",
    element: <AddressInput />,
  },
  {
    path: "/fleet",
    element: <FleetTypeSelect />,
  },
  {
    path: "/confirmation",
    element: <BookingConfirmation />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/waiting",
    element: <WaitingForFleet />,
  },
  {
    path: "/finish",
    element: <Finish />,
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      const access_token = localStorage.getItem("access_token");
      if (access_token) {
        throw redirect("/");
      }
      return null;
    },
  },
]);

export default router;
