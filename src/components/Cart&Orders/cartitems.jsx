import { BsPercent, BsAmazon } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { CartActions } from "../../store/cart&orders";
const CartItems = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="flex p-[1rem] !m-[1rem]"
      style={{ borderTop: "1px solid gray" }}
    >
      <div className="w-[30%]">
        <img src={product.item.image} className="w-[40%]"></img>
      </div>
      <div style={{ fontSize: "small", width: "40%" }}>
        <h4>{product.item.name}</h4>
        <p style={{ color: "orangered" }}>In Stock</p>
        <p>Eligible For FREE Shipping</p>
        <span className="w-[10rem] bg-[#0f1111] h-[5rem] p-[0.4rem] text-[0.7rem] rounded-[0.3rem] text-white">
          <BsAmazon className="inline" />
          Fulfilled
        </span>
        <div
          className="!mt-[0.5rem] flex font-bold border-1 border-black !rounded-[1rem] h-[2rem] w-[80%] md:w-[25%] items-center"
          onClick={() => dispatch(CartActions.REMOVE(product))}
        >
          <AiOutlineDelete className="inline" size={20} /> Remove
        </div>
      </div>
      <div className="text-[0.8rem] w-[30%] flex flex-col justify-center">
        <span className="btn btn-danger !text-[0.5rem] md:!text-sm">
          Limited time deal
        </span>
        <span>
          -{product.item.discount}
          <BsPercent className="inline" />
        </span>
        <span className="text-sm md:text-xl">
          <FaRupeeSign className="inline" />
          {product.item.price}
        </span>
        <span className="text-[0.6rem] md:text-xl">
          M.R.P : <FaRupeeSign className="inline" />
          <span style={{ textDecoration: "line-through" }}>
            {parseInt(
              eval(`product.item.price/(1-(product.item.discount/100))`)
            )}
          </span>
        </span>
        <span>Quantity:{product.Quantity}</span>
        <p>Upto 5% Cashback with Amazon Pay ICICI card</p>
      </div>
    </div>
  );
};
export default CartItems;
