import { useDispatch } from "react-redux";
import { headerActions } from "../../store/Store";

const HeaderLanguage = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="flex items-center h-[70%] border-0 hover:border hover:border-white p-1 cursor-pointer"
      onMouseEnter={() => {
        dispatch(headerActions.LANGIN());
      }}
      onMouseLeave={() => {
        dispatch(headerActions.LANGOUT());
      }}
    >
      <img
        src="./indianflag.png"
        alt="Indian flag"
        className="h-4 w-6 object-cover mr-1"
      />
      <span className="font-bold">EN</span>
    </div>
  );
};
export default HeaderLanguage;
