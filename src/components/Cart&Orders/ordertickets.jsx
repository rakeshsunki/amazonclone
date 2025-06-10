import { FaRupeeSign } from "react-icons/fa";
import TicketMain from "./Ticketmain";
import Loader from "../Loader/loader";

const OrderTickets = ({ order }) => {
  return (
    <div className="w-full md:w-[90%] lg:w-[80%] mx-auto mb-6 rounded-lg overflow-hidden border border-gray-300 shadow-sm">
      {/* Order Header */}
      <div className="bg-gray-100 p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-gray-500">ORDER PLACED</h3>
            <p className="font-medium">{order.DATE_TIME}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-500">TOTAL</h3>
            <p className="font-medium flex items-center">
              <FaRupeeSign className="mr-1" />
              {order.AMOUNT}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-500">SHIP TO</h3>
            <p className="font-medium">Rakesh</p>
          </div>
        </div>

        <div className="space-y-3 sm:text-right">
          <div>
            <h3 className="font-semibold text-gray-500">ORDER ID</h3>
            <p className="font-mono">#{order.id}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-500">PAYMENT METHOD</h3>
            <p className="font-medium">{order.payment}</p>
          </div>
        </div>
      </div>

      {/* Order Products */}
      <div className="bg-white p-4 md:p-6">
        {order.PRODUCTS ? (
          order.PRODUCTS.map((product, index) => (
            <TicketMain key={index} product={product} />
          ))
        ) : (
          <Loader />
        )}
      </div>

      {/* Order Footer */}
      <div className="bg-white py-3 px-4 border-t border-gray-300">
        <button className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
          Archive Order
        </button>
      </div>
    </div>
  );
};

export default OrderTickets;
