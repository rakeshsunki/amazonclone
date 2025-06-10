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

  return (
    <>
      {/* Spacer for header */}
      <div className="w-full h-[6.9vh] md:h-[6rem]"></div>

      {status === "pending" ? (
        <div className="w-full min-h-[60vh] flex items-center justify-center">
          <Loader />
        </div>
      ) : status === "Fetching Completed" && ordersMemory.length > 0 ? (
        <div className="w-full bg-gray-50 py-6 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              Your Orders
            </h1>

            {ordersMemory.map((order, index) => (
              <OrderTickets key={index} order={order} />
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-gray-50 p-6">
          <div className="max-w-md text-center bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-3">No Orders Found</h2>
            <p className="text-gray-600">
              You haven't placed any orders yet. Start shopping to see your orders
              here.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Orders;
