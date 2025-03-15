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
  const dispath = useDispatch();
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
    dispath(
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
    <form className="md:flex justify-center" onSubmit={(e) => handleSubmit(e)}>
      <div className="w-[100%] md:w-[50%]">
        <div className="bg-white !m-[1rem] p-[1rem]">
          <h5>Delivering to Rakesh</h5>
          <p> Telangana, Siddipet, 502103</p>
        </div>
        <div className="bg-white !m-[1rem] p-[1rem]">
          <h4>Payment Method</h4>
          <hr />
          <div className="!m-4 border border-gray-300 !rounded-lg p-4 text-sm font-semibold">
            <div className="h-[15vh] border-b border-gray-300">
              <label>
                <p>
                  <input
                    name="paymentmethod"
                    type="radio"
                    value={"UPI"}
                    onChange={() => setpayment("UPI")}
                  />
                  UPI Payment
                </p>
                {payment === "UPI" ? (
                  <div>
                    <input
                      type="text"
                      placeholder="Enter UPI Id"
                      ref={UPI_ID}
                    />
                  </div>
                ) : null}
              </label>
            </div>
            <div className="h-[15vh] border-b border-gray-300">
              <label>
                <p>
                  <input
                    name="paymentmethod"
                    type={"radio"}
                    value={"CARD"}
                    onChange={() => setpayment("CARD")}
                  />
                  Debit/Credit Card
                </p>
                {payment === "CARD" ? (
                  <div>
                    <input
                      type="text"
                      placeholder="Card Number"
                      ref={CARD_NUMBER}
                    />
                    <input type="text" placeholder="Enter CVV" ref={CVV} />
                  </div>
                ) : null}
              </label>
            </div>
            <div className="h-[15vh] border-b border-gray-300">
              <label>
                <span>
                  <input
                    name="paymentmethod"
                    type={"radio"}
                    value={"UPI_APPS"}
                    onChange={() => setpayment("UPI_APPS")}
                  />
                  Other UPI Apps
                </span>
              </label>
            </div>
            <div className="h-[15vh] border-b border-gray-300">
              <label>
                <span>
                  <input
                    name="paymentmethod"
                    type={"radio"}
                    value={"CASH"}
                    onChange={() => setpayment("CASH ON DELIVERY")}
                  />
                  Cash On Delivery
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[30vh]  sticky top-[10%] w-max bg-white m-4 p-4">
        <pre>items: {cartlist.length}</pre>
        <h4>
          Order Total : <FaRupeeSign size={20} className="inline" /> {total}
        </h4>
        <hr />
        <button
          type="submit"
          className="w-full h-8 mt-4 bg-[var(--button-color)] border-none !rounded-full"
        >
          Place Order
        </button>
      </div>
    </form>
  );
};
export default OrderForm;
