import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import ErrorPage from "./pages/error/ErrorPage";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Reward from "./pages/reward/Reward";
import Wallet from "./pages/wallet/Wallet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "profile", element: <Profile /> },
      { path: "reward", element: <Reward /> },
      { path: "wallet", element: <Wallet /> },
    ],
  },
]);

export default router;
