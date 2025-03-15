import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Home/home.jsx";
import Login from "./components/loginpage/loginpage.jsx";
import Cart from "./components/Cart&Orders/cart.jsx";
import Account from "./components/Cart&Orders/Account.jsx";
import Orders from "./components/Cart&Orders/orders.jsx";
import FullCard from "./components/fullcard/FullCard.jsx";
import OrderForm from "./components/Cart&Orders/Form.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/cart", element: <Cart /> },
      { path: "/account", element: <Account /> },
      { path: "/orders", element: <Orders /> },
      { path: "/orderform", element: <OrderForm /> },
      { path: "/fullcard", element: <FullCard /> },
    ],
  },
]);
export default router;
