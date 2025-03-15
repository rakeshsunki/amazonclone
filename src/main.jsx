import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import AmazonStore from "./store/Store.js";
import router from "./router.jsx";
createRoot(document.getElementById("root")).render(
  <Provider store={AmazonStore}>
    <RouterProvider router={router} />
  </Provider>
);
