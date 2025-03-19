import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchProducts } from "../../store/products";
import OrderTickets from "./ordertickets";
import Loader from "../Loader/loader";

const Orders = () => {
  const dispatch = useDispatch();

  const { List, status } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(FetchProducts("orders"));
  }, [dispatch]);

  const ordersMemory = useMemo(() => List, [List]);

  if (status === "pending") {
    return (
      <>
        <Loader />
      </>
    );
  } else if (status === "Fetching Completed" && ordersMemory.length > 0) {
    return (
      <div className="w-screen p-0 bg-white">
        <div className=" w-full !content-center !justify-items-center bg-white">
          <h3>Your Orders</h3>
          {ordersMemory.map((order, index) => (
            <OrderTickets key={index} order={order} />
          ))}
        </div>
      </div>
    );
  }
};
export default Orders;
