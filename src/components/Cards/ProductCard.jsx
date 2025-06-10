import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FullcardActions } from "../../store/Fullcardstore";
import { BsCart3 } from "react-icons/bs";
import Ratings from "./ratings";

const SingleCard = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Generate random rating if not provided
  const rating = item.rating || (Math.random() * 2 + 3).toFixed(1); // 3-5 stars
  
  // Format price
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(item.price || Math.floor(Math.random() * 20000) + 1000);

  return (
    <div
      className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 
                flex flex-col relative h-auto w-full max-w-[160px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[280px]
                m-2 border border-gray-100"
      onClick={() => {
        dispatch(FullcardActions.CLICKED(item));
        navigate("/fullcard");
      }}
    >
      {/* Product image - constrained height, allow proper aspect ratio */}
      <div className="h-[120px] sm:h-[160px] md:h-[200px] w-full bg-gray-50 flex items-center justify-center p-2 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Content area */}
      <div className="p-3 flex flex-col flex-grow">
        {/* Title with ellipsis for long names */}
        <h5 className="text-sm sm:text-base font-medium line-clamp-2 text-gray-800 min-h-[40px]">
          {item.name}
        </h5>
        
        {/* Rating stars using Ratings component */}
        <div className="flex mt-1 text-xs sm:text-sm">
          <Ratings rating={rating} />
          <span className="text-gray-500 ml-1 text-xs">({Math.floor(Math.random() * 1000) + 100})</span>
        </div>
        
        {/* Prime badge (random display) */}
        {Math.random() > 0.5 && (
          <div className="mt-1">
            <span className="text-[10px] sm:text-xs bg-gradient-to-b from-blue-400 to-blue-600 text-white px-1 py-0.5 rounded-sm">
              Prime
            </span>
          </div>
        )}
        
        {/* Price */}
        <div className="mt-auto pt-2">
          <div className="flex items-baseline">
            <span className="text-lg sm:text-xl font-bold text-gray-800">{formattedPrice}</span>
            {Math.random() > 0.3 && (
              <span className="text-xs text-red-600 ml-2 line-through">
                ₹{Math.floor(item.price * 1.25 || Math.random() * 25000 + 1500)}
              </span>
            )}
          </div>
          
          {/* Delivery info */}
          <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
            FREE Delivery by {new Date(Date.now() + 86400000 * 3).toLocaleDateString('en-IN', {day: 'numeric', month: 'short'})}
          </p>
        </div>
      </div>
      
      {/* Add to Cart Button */}
      <div className="px-3 pb-3 pt-1">
        <button className="w-full bg-[#febd69] hover:bg-[#f3a847] py-1.5 rounded text-xs sm:text-sm font-medium flex items-center justify-center">
          <BsCart3 className="mr-1" /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleCard;
