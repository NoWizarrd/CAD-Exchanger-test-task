import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MainPage } from "../pages/MainPage/MainPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import Layout from "../components/Layout/Layout";
import ContactPage from "../pages/ContactPage/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
