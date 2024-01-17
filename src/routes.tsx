import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./app/dashboard/page";
import { SignIn } from "./app/auth/sign-in/page";

import { SignUp } from "./app/auth/sign-up/page";
import { Orders } from "./app/dashboard/orders/page";
import { AppLayout } from "./app/dashboard/_layout";
import { AuthLayout } from "./app/auth/_layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);
