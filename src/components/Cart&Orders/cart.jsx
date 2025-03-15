import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItems from "./cartitems";
const Cart = () => {
  const Navigate = useNavigate();
  const { cartlist, total } = useSelector((store) => store.cart);
  return (
    <div>
      {cartlist.length == 0 ? (
        <div className="bg-white p-[1rem] !m-[1rem] w-[90%] !rounded-[0.5rem]">
          <h3>Your Amazon Cart is empty</h3>
          <p>
            Your shopping cart is waiting. Give it a purpose- fill it with
            grocries, clothing, household supplies, electronics and more.
            continue shopping on <Link to={"/"}>Amazon Home page</Link>
          </p>
        </div>
      ) : (
        <div className="md:flex">
          <div className="bg-white p-[1rem] !m-[1rem] w-[90%] md:w-[80%] !rounded-[0.5rem]">
            <h3>Shopping Cart</h3>
            {cartlist.map((product, index) => (
              <CartItems key={index} product={product} />
            ))}
          </div>
          <div className="!sticky top:20% bg-white p-[1rem] !m-[1rem] w-[90%] md:w-[30%] h-[30vh] !rounded-[0.5rem]">
            <h5>
              Subtotal({cartlist.length} Item(s)) :{total}
            </h5>
            <button
              type="button"
              className="bg-[var(--button-color)] !rounded-[1rem] !text-sm w-[100%] h-[2rem] !mt-[1rem]"
              onClick={() => Navigate("/orderform")}
            >
              Proceed to Buy
            </button>
          </div>
        </div>
      )}
      <p>
        <small>
          The price and availability of items at Amazon.in are subject to
          change. The shopping cart is temporary place to store a list of items
          and reflects each item's most recent price.
        </small>
      </p>
      <p>
        <small>
          Do you have a promotional code? We'll ask you to enter your claim code
          when it's time to pay.
        </small>
      </p>
      <div className="bg-white p-[1rem]">Recommendations for all products</div>
    </div>
  );
};
export default Cart;
