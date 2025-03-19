import { useSelector } from "react-redux";
import MiddleBox from "./middlebox";
import RightBox from "./rightbox";

const FullCard = () => {
  const { item } = useSelector((store) => store.fullcard);
  return (
    <div className="w-screen h-max bg-white md:flex z-10">
      <div className="h-max lg:h-[130vh] md:w-[30vw] border-gray-500 !justify-items-center">
        <img src={item.image} className="h-1/2 !sticky !top-15"></img>
      </div>
      <MiddleBox item={item} />
      <RightBox item={item} />
    </div>
  );
};
export default FullCard;
