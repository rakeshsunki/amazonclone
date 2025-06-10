import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItems from "./cartitems";
import { FaRupeeSign } from "react-icons/fa";

const Cart = () => {
  const Navigate = useNavigate();
  const { cartlist, total } = useSelector((store) => store.cart);

  return (
    <>
      {/* Spacer for header */}
      <div className="w-full h-[6.9vh] md:h-[6rem]"></div>

      <div className="bg-gray-100 min-h-screen py-6 px-4">
        <div className="max-w-6xl mx-auto">
          {cartlist.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-2xl font-medium mb-4">
                Your Amazon Cart is empty
              </h2>
              <p className="mb-4 text-gray-600">
                Your shopping cart is waiting. Give it a purpose - fill it with
                groceries, clothing, household supplies, electronics, and more.
              </p>
              <Link
                to="/"
                className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
              >
                Continue shopping on Amazon homepage
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Cart Items */}
              <div className="w-full lg:w-[70%]">
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-medium">Shopping Cart</h1>
                    <span className="text-sm text-gray-500">Price</span>
                  </div>

                  {cartlist.map((product, index) => (
                    <CartItems key={index} product={product} />
                  ))}

                  <div className="flex justify-end pt-4 text-lg font-medium">
                    <span>
                      Subtotal ({cartlist.length}{" "}
                      {cartlist.length === 1 ? "item" : "items"}):
                      <span className="font-bold ml-2 inline-flex items-center">
                        <FaRupeeSign className="mr-1" /> {total}
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="w-full lg:w-[30%]">
                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                  <div className="mb-4">
                    <span className="flex items-start mb-2">
                      <span className="text-green-600 text-sm mr-2">✓</span>
                      <span className="text-sm">
                        Your order qualifies for FREE Delivery.
                      </span>
                    </span>

                    <div className="text-lg font-medium">
                      Subtotal ({cartlist.length}{" "}
                      {cartlist.length === 1 ? "item" : "items"}):
                      <span className="font-bold ml-2 inline-flex items-center">
                        <FaRupeeSign className="mr-1" /> {total}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="w-full bg-[#FFD814] hover:bg-[#F7CA00] py-3 !rounded-full font-medium text-gray-900 mb-3 transition-colors"
                    onClick={() => Navigate("/orderform")}
                  >
                    Proceed to Buy
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Legal Info */}
          <div className="mt-6 text-xs text-gray-500 space-y-2">
            <p>
              The price and availability of items at Amazon.in are subject to
              change. The shopping cart is a temporary place to store a list of
              items and reflects each item's most recent price.
            </p>
            <p>
              Do you have a promotional code? We'll ask you to enter your claim
              code when it's time to pay.
            </p>
          </div>

          {/* Recommendations */}
          <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
            <h2 className="text-lg font-medium mb-2">
              Recommendations for all products
            </h2>
            <p className="text-sm text-gray-600">
              Products you might like based on your browsing history and
              purchases
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
