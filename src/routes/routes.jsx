import { createBrowserRouter } from "react-router-dom";
import Login from "../Account/Login/Login";
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
    ],
  },
]);
