import Ratings from "../Cards/ratings";
import { FaRupeeSign } from "react-icons/fa";
import { BsPercent, BsAmazon } from "react-icons/bs";

const MiddleBox = ({ item }) => {
  return (
    <div className="bg-white p-6 h-full">
      {/* Product Title */}
      <h1 className="text-xl md:text-2xl font-medium text-gray-800 mb-3">
        {item.name}
      </h1>

      {/* Ratings */}
      <div className="flex items-center mb-4">
        <span className="text-sm text-gray-600 mr-2">Ratings:</span>
        <Ratings rating={item.rating} />
        <span className="ml-2 text-sm text-blue-600">(Customer Reviews)</span>
      </div>

      {/* Special Deal */}
      <div className="mb-4">
        <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
          LIMITED TIME DEAL
        </span>
      </div>

      {/* Price */}
      <div className="flex items-center gap-3 mb-1">
        <div className="flex items-center bg-red-100 text-red-700 px-2 py-1 rounded">
          <span className="font-bold">-{item.discount}</span>
          <BsPercent />
        </div>

        <div className="flex items-center">
          <FaRupeeSign className="text-lg" />
          <span className="text-2xl font-bold">{item.price}</span>
        </div>
      </div>

      {/* Original Price */}
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <span>M.R.P:</span>
        <FaRupeeSign className="mx-1 text-xs" />
        <span className="line-through">
          {Math.round(parseFloat(eval(`item.price/(1-(item.discount/100))`)))}
        </span>
      </div>

      {/* Fulfillment Badge */}
      <div className="inline-flex items-center bg-[#0f1111] text-white text-xs px-2 py-1 rounded mb-5">
        <BsAmazon className="mr-1" /> Fulfilled
      </div>

      {/* Services */}
      <div className="border-t border-b border-gray-200 py-5 my-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center text-xs">
          <div className="flex flex-col items-center">
            <img
              src="../fullcard/freeshipping.png"
              className="w-10 h-10 object-contain mb-1"
              alt="Free Shipping"
            />
            <p>Free Shipping</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="../fullcard/payondelivery.png"
              className="w-10 h-10 object-contain mb-1"
              alt="Pay On Delivery"
            />
            <p>Pay On Delivery</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="../fullcard/7daysreplacement.png"
              className="w-10 h-10 object-contain mb-1"
              alt="7 Days Replacement"
            />
            <p>7 Days Replacement</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="../fullcard/6monthwarrnety.png"
              className="w-10 h-10 object-contain mb-1"
              alt="6 Month Warranty"
            />
            <p>6 Month Warranty</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="../fullcard/topbrand.png"
              className="w-10 h-10 object-contain mb-1"
              alt="Top Brand"
            />
            <p>Top Brand</p>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-2 text-sm">
        <h3 className="font-bold text-base">Details:</h3>
        <p className="flex flex-col sm:flex-row sm:items-center">
          <span className="font-semibold min-w-[120px]">Sold by:</span>
          <span>Amazon Clone Owner</span>
        </p>
        <p className="flex flex-col sm:flex-row sm:items-center">
          <span className="font-semibold min-w-[120px]">Products Quality:</span>
          <span>Amazon's Most Trusted Quality</span>
        </p>
        <p className="flex flex-col sm:flex-row sm:items-center">
          <span className="font-semibold min-w-[120px]">Contact:</span>
          <a
            href="mailto:rakeshsunkiOfficial@gmail.com"
            className="text-blue-600 hover:underline"
          >
            rakeshsunkiOfficial@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default MiddleBox;
