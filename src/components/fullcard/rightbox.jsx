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
    <div className="w-screen md:w-1/6 text-sm m-[2rem] p-[1rem] border-gray-500">
      <span className="text-xl flex">
        <FaRupeeSign size={10} />
        {item.price}
      </span>
      <div
        className=" btn btn-danger"
        style={{ fontSize: "smaller", backgroundColor: "#0f1111" }}
      >
        <BsAmazon className="inline" />
        Fulfilled
      </div>
      <p>
        Free Delivery on Your First Order,Order with in 3hrs get Upto 20% Off on
        this Product
      </p>
      <p>
        Get it by {date} ,{time}
      </p>
      <span style={{ color: "green", fontSize: "large" }}>In Stock</span>

      <select
        ref={Quantityref}
        className="w-full h-[2rem] rounded-[0.2rem] mb-1.5 border-1 border-gray-400"
      >
        <option>Quantity</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <button
        type="button"
        className="bg-[var(--button-color)] text-sm w-full h-[2rem] mt-2 !rounded-[1rem]"
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
        Add to cart
      </button>
      <button
        type="button"
        className="bg-[#FF9900] text-sm w-full h-[2rem] mt-2 !rounded-[1rem]"
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
        Buy now
      </button>
    </div>
  );
};
export default RightBox;
