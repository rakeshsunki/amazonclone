import { useDispatch, useSelector } from "react-redux";
import { FaRupeeSign } from "react-icons/fa";
import { useRef, useState } from "react";
import submitOrder from "../../store/handleFormSubmit";
import { useNavigate } from "react-router-dom";

const OrderForm = () => {
  const { cartlist, total, Fullcardbuynow, orderlist } = useSelector(
    (store) => store.cart
  );
  const [payment, setpayment] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const UPI_ID = useRef();
  const CARD_NUMBER = useRef();
  const CVV = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!payment) {
      alert("Please Select a Payment Method");
      return;
    }
    dispatch(
      submitOrder({
        payment,
        UPI: UPI_ID.current ? UPI_ID.current.value : "",
        CARDNO: CARD_NUMBER.current ? CARD_NUMBER.current.value : "",
        CVVNO: CVV.current ? CVV.current.value : "",
        PRODUCTS: Fullcardbuynow ? orderlist : cartlist,
        AMOUNT: total,
        DATE_TIME: new Date().toLocaleString(),
      })
    );
    navigate("/orders");
    alert("Order Placed");
  };

  return (
    <>
      {/* Spacer for header */}
      <div className="w-full h-[6.9vh] md:h-[6rem]"></div>

      <div className="bg-gray-100 py-6 px-4">
        <form
          className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6"
          onSubmit={handleSubmit}
        >
          {/* Left Column - Payment & Address */}
          <div className="w-full lg:w-[70%]">
            {/* Delivery Address */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold mb-2">Delivery Address</h2>
              <p className="text-gray-700">Rakesh</p>
              <p className="text-gray-600">Telangana, Siddipet, 502103</p>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                {/* UPI Payment */}
                <div className="border-b border-gray-200">
                  <label className="flex items-start p-4 cursor-pointer hover:bg-gray-50">
                    <input
                      name="paymentmethod"
                      type="radio"
                      value="UPI"
                      onChange={() => setpayment("UPI")}
                      className="mt-1 mr-3"
                    />
                    <div className="w-full">
                      <p className="font-medium">UPI Payment</p>

                      {payment === "UPI" && (
                        <div className="mt-3">
                          <input
                            type="text"
                            placeholder="Enter UPI Id"
                            ref={UPI_ID}
                            className="w-full sm:w-72 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      )}
                    </div>
                  </label>
                </div>

                {/* Debit/Credit Card */}
                <div className="border-b border-gray-200">
                  <label className="flex items-start p-4 cursor-pointer hover:bg-gray-50">
                    <input
                      name="paymentmethod"
                      type="radio"
                      value="CARD"
                      onChange={() => setpayment("CARD")}
                      className="mt-1 mr-3"
                    />
                    <div className="w-full">
                      <p className="font-medium">Debit/Credit Card</p>

                      {payment === "CARD" && (
                        <div className="mt-3 space-y-3">
                          <input
                            type="text"
                            placeholder="Card Number"
                            ref={CARD_NUMBER}
                            className="w-full sm:w-72 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <input
                            type="text"
                            placeholder="Enter CVV"
                            ref={CVV}
                            className="w-full sm:w-40 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      )}
                    </div>
                  </label>
                </div>

                {/* Other UPI Apps */}
                <div className="border-b border-gray-200">
                  <label className="flex items-center p-4 cursor-pointer hover:bg-gray-50">
                    <input
                      name="paymentmethod"
                      type="radio"
                      value="UPI_APPS"
                      onChange={() => setpayment("UPI_APPS")}
                      className="mr-3"
                    />
                    <span className="font-medium">Other UPI Apps</span>
                  </label>
                </div>

                {/* Cash on Delivery */}
                <div>
                  <label className="flex items-center p-4 cursor-pointer hover:bg-gray-50">
                    <input
                      name="paymentmethod"
                      type="radio"
                      value="CASH"
                      onChange={() => setpayment("CASH ON DELIVERY")}
                      className="mr-3"
                    />
                    <span className="font-medium">Cash On Delivery</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="w-full lg:w-[30%]">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Items:</span>
                  <span>{cartlist.length}</span>
                </div>

                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Order Total:</span>
                  <div className="flex items-center">
                    <FaRupeeSign className="mr-1" />
                    <span>{total}</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#FFD814] hover:bg-[#F7CA00] py-3 px-4 !rounded-full font-medium text-gray-900 focus:outline-none transition-colors"
                >
                  Place Order
                </button>

                <p className="text-xs text-gray-500 mt-3">
                  By placing your order, you agree to Amazon's privacy notice
                  and conditions of use.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default OrderForm;
