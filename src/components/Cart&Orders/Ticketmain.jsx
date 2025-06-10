import { FaRupeeSign } from "react-icons/fa";
import Ratings from "../Cards/ratings";

const TicketMain = ({ product }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start mb-6 pb-4 border-b border-gray-200 last:border-b-0 last:mb-0 last:pb-0">
      <div className="w-full sm:w-[30%] mb-4 sm:mb-0">
        <img
          src={product.item.image}
          alt={product.item.name}
          className="h-24 md:h-40 object-contain mx-auto sm:mx-0"
        />
      </div>

      <div className="w-full sm:w-[70%] space-y-2 text-sm">
        <div className="flex flex-wrap items-center gap-x-2 text-gray-500">
          <span className="font-semibold text-gray-700">PRODUCT ID:</span>
          <span className="font-mono">{product.UID.substring(0, 8)}...</span>
        </div>

        <div className="font-medium text-base text-gray-800">
          {product.item.name}
        </div>

        <div className="flex items-center gap-x-2">
          <span className="font-semibold text-gray-700">PRICE:</span>
          <div className="flex items-center text-lg font-bold">
            <FaRupeeSign className="text-sm mr-1" />
            {product.item.price}
          </div>
        </div>

        <div className="flex items-center gap-x-2">
          <span className="font-semibold text-gray-700">RATINGS:</span>
          <Ratings rating={product.item.rating} />
        </div>

        <div className="flex items-center gap-x-2">
          <span className="font-semibold text-gray-700">QUANTITY:</span>
          <span>{product.Quantity}</span>
        </div>
      </div>
    </div>
  );
};

export default TicketMain;
