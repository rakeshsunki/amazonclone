import { IoLocationOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiCartDownload } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { headerActions } from "../../store/Store";
import HeaderLanguage from "./headerlanguage";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="h-[1.5rem] md:h-[4rem] text-[0.3rem] md:text-[0.6rem] lg:text-[0.85rem] w-[100vw] bg-stone-900 text-white flex items-center justify-evenly fixed top-0 left-0 right-0 z-20">
      <span
        className="h-[70%] flex items-center border-1 border-transparent hover:border-white"
        onClick={() => Navigate("/")}
      >
        <img src="./AmazonLogo.png" className="h-[2rem] md:h-[4rem] "></img>
        <span>.in</span>
      </span>
      <span className="w-[max-content] h-[70%] justify-items-center content-center border-1 border-transparent hover:border-white">
        <small>Delivering to</small>
        <b className="flex font-bold ">
          <IoLocationOutline className="text-[0.5rem] md:text-[1.5rem]" />
          Siddipet, 502103
        </b>
      </span>
      <div className="w-[30%] md:w-[45%] h-[65%] flex  text-gray-600 ">
        <span className="bg-[#e6e5e5] h-[100%] w-[10%] content-center text-center rounded-l-[10%]">
          All
        </span>
        <input
          placeholder="Search Amazon.in"
          className="w-full h-[100%] bg-white"
        />

        <button className="w-[10%] h-[100%] bg-[#fedb68] content-center justify-items-center text-black !rounded-r-[10%]">
          <GoSearch className="text-[0.5rem] md:text-[1.5rem] " />
        </button>
      </div>

      <HeaderLanguage></HeaderLanguage>

      <span
        className="h-[70%] w-[max-content] content-center flex flex-col border-1 border-transparent hover:border-white"
        onMouseEnter={() => {
          dispatch(headerActions.IN());
        }}
        onMouseLeave={() => {
          dispatch(headerActions.OUT());
        }}
        onClick={() => Navigate("/account")}
      >
        <small>Hello, sign in</small>
        <b className="flex items-center">
          Accounts & lists
          <IoMdArrowDropdown />
        </b>
      </span>
      <span
        className="h-[70%] content-center flex flex-col border-1 border-transparent hover:border-white"
        onClick={() => Navigate("/orders")}
      >
        <small>Returns</small>
        <b>& Orders</b>
      </span>
      <span
        className="h-[70%] content-center flex items-center border-1 border-transparent hover:border-white"
        onClick={() => {
          Navigate("/cart");
        }}
      >
        {/* <span className={styles.badge}>{cartlist.length}</span> */}
        <BiCartDownload className="text-[1rem] md:text-[2.5rem]" />
        <b>Cart</b>
      </span>
    </div>
  );
};
export default Header;
