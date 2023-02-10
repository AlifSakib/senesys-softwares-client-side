import { createBrowserRouter } from "react-router-dom";
import Login from "../Account/Login/Login";
import Register from "../Account/Register/Register";
import ResetPass from "../Account/ResetPass/ResetPass";
import Home from "../components/Home/Home";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: "Error",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/reset-pass",
        element: <ResetPass />,
      },
    ],
  },
]);
