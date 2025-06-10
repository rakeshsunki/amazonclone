import { IoLocationOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiCartDownload } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { headerActions } from "../../store/Store";
import HeaderLanguage from "./headerlanguage";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { mobileNavOpen } = useSelector((store) => store.header);

  return (
    <>
      {/* Main Header */}
      <div className="h-[2.5rem] md:h-[4rem] text-[0.4rem] md:text-[0.6rem] lg:text-[0.85rem] w-full bg-stone-900 text-white flex items-center justify-evenly fixed top-0 left-0 right-0 z-20">
        {/* Mobile hamburger menu - only show on small screens */}
        <div className="block md:hidden">
          <button
            className="h-full flex items-center"
            onClick={() => dispatch(headerActions.TOGGLE_MOBILE_NAV())}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Amazon Logo - always visible */}
        <div
          className="h-[75%] flex items-center border !border-transparent hover:!border-white cursor-pointer p-1"
          onClick={() => Navigate("/")}
        >
          <img
            src="./AmazonLogo.png"
            alt="Amazon"
            className="h-[1.8rem] md:h-[2.5rem]"
          />
          <span className="text-xs md:text-sm">.in</span>
        </div>

        {/* Location - hide on small screens */}
        <div className="hidden md:flex flex-col h-[70%] items-start justify-center border !border-transparent hover:!border-white p-1 cursor-pointer">
          <span className="text-xs text-gray-300">Delivering to</span>
          <div className="flex items-center">
            <IoLocationOutline className="text-[1rem] mr-1" />
            <span className="font-bold">Siddipet, 502103</span>
          </div>
        </div>

        {/* Search Bar - make responsive */}
        <div className="w-[45%] md:w-[45%] h-[65%] flex text-gray-600">
          <span className="hidden sm:flex items-center justify-center bg-[#e6e5e5] h-full w-[10%] text-xs text-black rounded-l-md">
            All
          </span>
          <input
            placeholder="Search Amazon.in"
            className="w-full h-full bg-white rounded-l-md sm:rounded-l-none px-2 text-xs md:text-sm"
          />
          <button className="w-[12%] h-full bg-[#febd69] flex items-center justify-center text-black rounded-r-md hover:bg-[#f3a847]">
            <GoSearch className="text-base md:text-lg" />
          </button>
        </div>

        {/* Language - hidden on small screens */}
        <div className="hidden md:block">
          <HeaderLanguage />
        </div>

        {/* Accounts & Lists - hidden on small screens */}
        <div
          className="hidden md:flex flex-col h-[70%] justify-center border !border-transparent hover:!border-white p-1 cursor-pointer"
          onMouseEnter={() => {
            dispatch(headerActions.IN());
          }}
          onMouseLeave={() => {
            dispatch(headerActions.OUT());
          }}
          onClick={() => Navigate("/account")}
        >
          <span className="text-xs text-gray-300">Hello, sign in</span>
          <div className="flex items-center">
            <span className="font-bold">Accounts & lists</span>
            <IoMdArrowDropdown />
          </div>
        </div>

        {/* Returns & Orders - hidden on small screens */}
        <div
          className="hidden md:flex flex-col h-[70%] justify-center border !border-transparent hover:!border-white p-1 cursor-pointer"
          onClick={() => Navigate("/orders")}
        >
          <span className="text-xs text-gray-300">Returns</span>
          <span className="font-bold">& Orders</span>
        </div>

        {/* Cart - always visible */}
        <div
          className="h-[70%] flex items-center border !border-transparent hover:!border-white p-1 cursor-pointer"
          onClick={() => {
            Navigate("/cart");
          }}
        >
          <BiCartDownload className="text-[1.2rem] md:text-[2rem]" />
          <span className="hidden xs:inline font-bold ml-1">Cart</span>
        </div>
      </div>

      {/* Mobile Delivery Location Bar - only visible on mobile */}
      <div className="md:hidden flex items-center justify-between px-3 bg-[#232f3e] text-white fixed top-[2.5rem] left-0 right-0 z-20 h-[1.8rem] border-t border-gray-700">
        <div className="flex items-center text-xs">
          <IoLocationOutline className="text-lg mr-1" />
          <span>Deliver to Siddipet 502103</span>
        </div>
        <div
          className="flex items-center text-xs border !border-transparent hover:!border-white p-1"
          onClick={() => Navigate("/orders")}
        >
          <span>Orders</span>
        </div>
      </div>
    </>
  );
};

export default Header;
