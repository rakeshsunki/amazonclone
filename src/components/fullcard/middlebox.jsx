import Ratings from "../Cards/ratings";
import { FaRupeeSign } from "react-icons/fa";
import { BsPercent, BsAmazon } from "react-icons/bs";
const MiddleBox = ({ item }) => {
  return (
    <div className="p-[1rem] text-sm">
      <h2>{item.name}</h2>
      <span className="flex">
        Ratings : <Ratings rating={item.rating} />
        <hr />
      </span>
      <span className="btn btn-danger text-sm">Limited time deal</span>
      <span className="flex">
        <span className="text-xl flex">
          -{item.discount}
          <BsPercent />
        </span>

        <FaRupeeSign size={15}></FaRupeeSign>
        <h3>{item.price}</h3>
      </span>
      <p className="flex text-sm">
        M.R.P : <FaRupeeSign size={10} />
        <span style={{ textDecoration: "line-through" }}>
          {Math.round(parseFloat(eval(`item.price/(1-(item.discount/100))`)))}
        </span>
      </p>
      <span
        className="btn btn-danger"
        style={{ fontSize: "smaller", backgroundColor: "#0f1111" }}
      >
        <BsAmazon className="inline" />
        Fulfilled
      </span>
      <hr />
      <div className="flex text-sm gap-[1rem]">
        <div>
          <img
            src="../fullcard/freeshipping.png"
            style={{ width: "3rem" }}
          ></img>
          <p>Free Shipping</p>
        </div>
        <div>
          <img
            src="../fullcard/payondelivery.png"
            style={{ width: "3rem" }}
          ></img>
          <p>Pay On Delivery</p>
        </div>
        <div>
          <img
            src="../fullcard/7daysreplacement.png"
            style={{ width: "3rem" }}
          ></img>
          <p>7 Days Replacement</p>
        </div>
        <div>
          <img
            src="../fullcard/6monthwarrnety.png"
            style={{ width: "3rem" }}
          ></img>
          <p>6 Month Warranty</p>
        </div>
        <div>
          <img src="../fullcard/topbrand.png" style={{ width: "3rem" }}></img>
          <p>Top Brand</p>
        </div>
      </div>
      <hr />
      <b>Details:</b>
      <div>
        <p>
          <b>Sold by :</b> Amazon Clone Owner
        </p>
        <p>
          <b>Products Quality :</b> Amazon's Most Trusted Quality
        </p>
        <p>
          <b>Contact :</b>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
            rakeshsunkiOfficial@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};
export default MiddleBox;
