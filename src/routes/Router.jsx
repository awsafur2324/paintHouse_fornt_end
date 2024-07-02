import App from "../App";
import Register from "../Components/Registation/Register";
import LogIn from "../Components/login/LogIn";
import AddArtsItems from "../pages/AddArtsItems";
import AllArtsItems from "../pages/AllArtsItems";
import Home from "../pages/Home";

import { createBrowserRouter } from "react-router-dom";
import ViewDetails from "../pages/ViewDetails";
import MyArtList from "../pages/MyArtList";
import Update from "../pages/Update";
import Error from "../Components/errorPages/Error";
import ProtectedRouter from "../ProtectedRoute/ProtectedRouter";
import CategoryBasedItem from "../pages/CategoryBasedItem";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement : <Error />,
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addItem",
        element: <ProtectedRouter><AddArtsItems /></ProtectedRouter>,
      },
      {
        path: "/items",
        loader : () => fetch("http://localhost:5000/arts"),
        element: <AllArtsItems />,
      },
      {
        path: "/viewDetails/:id",
        element: <ProtectedRouter><ViewDetails /></ProtectedRouter>,
        loader: ({ params }) => fetch(`http://localhost:5000/arts/${params.id}`)
      },
      {
        path: "/list",
        element: <ProtectedRouter><MyArtList /></ProtectedRouter>,
        loader : () => fetch("http://localhost:5000/arts"),
      },
      {
        path : "/update/:id",
        element : <ProtectedRouter><Update /></ProtectedRouter>,
        loader: ({ params }) => fetch(`http://localhost:5000/arts/${params.id}`)
      },
      {
        path : "/categoryItems/:id",
        element : <CategoryBasedItem />,
        loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
      }
    ],
  },
]);
export default router;
