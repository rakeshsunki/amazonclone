import { FaRupeeSign } from "react-icons/fa";
import { BsAmazon } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { CartActions } from "../../store/cart&orders";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const RightBox = ({ item }) => {
  const date = new Date(
    new Date().setDate(new Date().getDate() + 10)
  ).toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Quantityref = useRef();

  return (
    <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm h-max">
      {/* Price */}
      <div className="flex items-baseline mb-2">
        <FaRupeeSign className="text-xl mr-1" />
        <span className="text-2xl font-bold">{item.price}</span>
      </div>

      {/* Fulfillment Badge */}
      <div className="inline-flex items-center bg-[#0f1111] text-white text-xs px-2 py-1 rounded mb-3">
        <BsAmazon className="mr-1" /> Fulfilled
      </div>

      {/* Delivery Info */}
      <p className="text-sm text-gray-700 mb-4">
        Free Delivery on Your First Order. Order within 3hrs and get up to 20%
        Off on this product.
      </p>

      <div className="bg-gray-50 p-3 rounded-md mb-4">
        <p className="text-sm mb-1">
          Get it by <span className="font-semibold">{date}</span>
        </p>
        <span className="text-green-600 font-medium">In Stock</span>
      </div>

      {/* Quantity Selector */}
      <select
        ref={Quantityref}
        className="w-full h-10 rounded border border-gray-300 mb-4 px-2 focus:border-blue-500 focus:outline-none"
      >
        <option>Quantity</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>

      {/* Action Buttons */}
      <button
        type="button"
        className="bg-[#FFD814] hover:bg-[#F7CA00] w-full h-12 !rounded-full font-medium text-gray-900 mb-2 transition-colors shadow-sm"
        onClick={() => {
          let UID = crypto.randomUUID();
          dispatch(
            CartActions.ADDTOCART({
              item,
              UID,
              Quantity:
                Quantityref.current.value === "Quantity" || null
                  ? "1"
                  : Quantityref.current.value,
            })
          );
          navigate("/cart");
        }}
      >
        Add to Cart
      </button>

      <button
        type="button"
        className="bg-[#FF9900] hover:bg-[#FA8900] w-full h-12 !rounded-full font-medium text-gray-900 transition-colors shadow-sm"
        onClick={() => {
          let UID = crypto.randomUUID();
          dispatch(
            CartActions.ORDER({
              item,
              UID,
              Quantity:
                Quantityref.current.value === "Quantity" || null
                  ? "1"
                  : Quantityref.current.value,
            })
          );
          navigate("/orderform");
        }}
      >
        Buy Now
      </button>
    </div>
  );
};

export default RightBox;
