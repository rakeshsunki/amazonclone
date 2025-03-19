import { FaRupeeSign } from "react-icons/fa";
import TicketMain from "./Ticketmain";
import Loader from "../Loader/loader";
const OrderTickets = ({ order }) => {
  return (
    <div className="w-[80%] text-[0.5rem] md:text-[1rem] !rounded-lg border border-gray-400">
      <div className="bg-gray-200 flex p-4 h-[20%] !items-center">
        <div className="flex w-[70%] !gap-4">
          <span className="mr-4">
            <pre>
              ORDER PLACED <br />
              {order.DATE_TIME}
            </pre>
          </span>
          <span className="mr-4">
            <pre>
              TOTAL <br />
              <FaRupeeSign className="inline" />
              {order.AMOUNT}
            </pre>
          </span>
          <span>
            <pre>
              SHIP TO <br />
              rakesh
            </pre>
          </span>
        </div>

        <span>
          <pre>
            ORDER ID: #{order.id}
            <br />
            PAYMENT METHOD: {order.payment}
          </pre>
        </span>
      </div>

      <div className="h-fit bg-white md:text-base p-4">
        {order.PRODUCTS ? (
          order.PRODUCTS.map((product, index) => (
            <TicketMain key={index} product={product} />
          ))
        ) : (
          <Loader />
        )}
      </div>
      <div className="h-[10%] bg-white !rounded-bl-lg !rounded-br-lg border-t-[0.5px] border-gray-400 text-base pl-4">
        Archive
      </div>
    </div>
  );
};
export default OrderTickets;
