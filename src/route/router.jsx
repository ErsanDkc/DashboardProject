import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import ProtectedRoute from "./ProtectedRoute";

const SignIn = lazy(() => import("../pages/SingIn"));
const SignUp = lazy(() => import("../pages/SignUp"));
const MainLayout = lazy(() => import("@/components/MainLayout"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const ComingSoon = lazy(() => import("@/components/ComingSoon"));



const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signin" replace />,
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        element: (<MainLayout />),
        children: [
          { path: "/dashboard", element: (<Dashboard />) },
          { path: "/transactions", element: (<ComingSoon />) },
          { path: "/invoices", element: (<ComingSoon />) },
          { path: "/wallets", element: (<ComingSoon />) },
          { path: "/settings", element: (<ComingSoon />) },
          { path: "/help", element: (<ComingSoon />) },
          { path: "/logout", element: (<ComingSoon />) },
        ],
      },
    ],
  },

  { path: "/signin", element: (<SignIn />) },
  { path: "/signup", element: (<SignUp />) },

  { path: "*", element: <Navigate to="/signin" replace /> },
]);

export default router;
