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
      <div className="bg-gradient-to-b from-transparent via-white to-white pb-8">
        <div className="max-w-[1400px] mx-auto px-2 sm:px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
            Featured Products
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
            {productsMemory.map((item) => (
              <SingleCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full py-8 text-center">
        <p className="text-red-600">
          Something went wrong. Please try again later.
        </p>
      </div>
    );
  }
};

export default Cards;
