import { BsPercent, BsAmazon } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { CartActions } from "../../store/cart&orders";

const CartItems = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col sm:flex-row items-start border-t border-gray-200 py-6 gap-4">
      {/* Product Image */}
      <div className="w-full sm:w-[20%] flex justify-center sm:justify-start">
        <img
          src={product.item.image}
          alt={product.item.name}
          className="h-24 sm:h-32 object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="w-full sm:w-[50%]">
        <h3 className="text-base sm:text-lg font-medium mb-1">
          {product.item.name}
        </h3>
        <p className="text-green-600 text-sm mb-1">In Stock</p>
        <p className="text-sm text-gray-600 mb-2">Eligible For FREE Shipping</p>

        <span className="inline-flex items-center bg-[#0f1111] text-white text-xs px-2 py-1 rounded mb-4">
          <BsAmazon className="mr-1" /> Fulfilled
        </span>

        <div className="flex items-center">
          <span className="text-sm mr-2">Quantity: {product.Quantity}</span>

          <button
            className="flex items-center text-sm text-gray-700 hover:text-red-600 border border-gray-300 hover:border-red-600 !rounded-full py-1 px-3 transition-colors"
            onClick={() => dispatch(CartActions.REMOVE(product))}
          >
            <AiOutlineDelete className="mr-1" /> Remove
          </button>
        </div>
      </div>

      {/* Price */}
      <div className="w-full sm:w-[30%] mt-4 sm:mt-0">
        <span className="inline-block bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded mb-2">
          Limited time deal
        </span>

        <div className="flex items-center text-sm mb-1">
          <span className="mr-1">-{product.item.discount}</span>
          <BsPercent />
        </div>

        <div className="flex items-center text-xl font-bold mb-1">
          <FaRupeeSign className="text-base" />
          <span>{product.item.price}</span>
        </div>

        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>M.R.P: </span>
          <FaRupeeSign className="mx-1 text-xs" />
          <span className="line-through">
            {parseInt(
              eval(`product.item.price/(1-(product.item.discount/100))`)
            )}
          </span>
        </div>

        <p className="text-xs text-blue-800">
          Up to 5% Cashback with Amazon Pay ICICI card
        </p>
      </div>
    </div>
  );
};

export default CartItems;
