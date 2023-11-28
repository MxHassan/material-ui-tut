import Layout from "../layout/Layout";
import Notes from "../pages/Notes";
import Create from "../pages/Create";
import ErrorPage from "../pages/ErrorPage";
const MainRoutes = {
  path: "/",
  element: <Layout />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "/",
      element: <Notes />,
    },
    {
      path: "/create",
      element: <Create />,
    },
  ],
};
export default MainRoutes;
