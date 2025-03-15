import { useDispatch, useSelector } from "react-redux";
import { FetchProducts } from "../../store/products.js";
import { useEffect, useMemo } from "react";
import SingleCard from "./ProductCard.jsx";
import Loader from "../Loader/loader.jsx";
const Cards = () => {
  const dispatch = useDispatch();

  const { List, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(FetchProducts("products"));
  }, [dispatch]);

  const productsMemory = useMemo(() => List, [List]);

  if (status === "pending") {
    return <Loader />;
  } else if (status === "Fetching Completed") {
    return (
      <>
        <div className="flex flex-wrap z-[1] relative top-[-15rem] justify-center">
          {productsMemory.map((item) => (
            <SingleCard key={item.id} item={item} />
          ))}
        </div>
      </>
    );
  } else {
    <center>
      <p>Some Error Occured</p>
    </center>;
  }
};
export default Cards;
