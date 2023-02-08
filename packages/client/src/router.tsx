import { createBrowserRouter } from "react-router-dom";
import HomePage from "@pages/HomePage";

export default createBrowserRouter([
  { path: "/", element: <HomePage /> },

  { path: "*", element: <div></div> },
]);
