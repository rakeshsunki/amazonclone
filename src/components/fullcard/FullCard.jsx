import { useSelector } from "react-redux";
import MiddleBox from "./middlebox";
import RightBox from "./rightbox";

const FullCard = () => {
  const { item } = useSelector((store) => store.fullcard);
  
  return (
    <>
      {/* Spacer to account for headers - using 6.9vh for mobile view as specified */}
      <div className="w-full h-[6.9vh] md:h-[6rem]"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-6 bg-white">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Image Column */}
          <div className="w-full md:w-[40%] lg:w-1/3">
            <div className="sticky top-[8rem] bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-center justify-center min-h-[250px] md:min-h-[400px]">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="max-h-[300px] md:max-h-[400px] max-w-full object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Middle Column - Product Info */}
          <div className="w-full md:w-[60%] lg:w-[42%]">
            <MiddleBox item={item} />
          </div>
          
          {/* Right Column - Buy Options */}
          <div className="w-full md:w-full lg:w-1/4 mt-6 lg:mt-0">
            <RightBox item={item} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FullCard;
