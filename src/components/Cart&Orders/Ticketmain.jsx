import { FaRupeeSign } from "react-icons/fa";
import Ratings from "../Cards/ratings";
const TicketMain = ({ product }) => {
  console.log("ticket product", product);
  return (
    <div className="flex !mb-4">
      <div className="w-[30%]">
        <img className=" md:h-40" src={product.item.image} />
      </div>
      <div>
        <pre>
          PRODUCT ID: {product.UID} <br />
          PRODUCT NAME: {product.item.name}
          <br />
          PRICE: <FaRupeeSign className="inline" />
          {product.item.price}
          <br />
          <span className="flex">
            Ratings :<Ratings rating={product.item.rating} />
          </span>
          <pre>QUANTITY:{product.Quantity}</pre>
        </pre>
      </div>
    </div>
  );
};
export default TicketMain;
