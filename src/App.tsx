import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./scss/main.scss";
import Repositories from "./components/repositoriesList";
import Home from "./page/Home";
import PageError from "./page/pageError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <PageError />
  },
  {
    path: "/repositories",
    element: <Repositories />
  }
]);
const App: React.FC = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
