import { useDispatch, useSelector } from "react-redux";
import { headerActions } from "../../store/Store";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import SignInList from "../../store/headerlist";

const MobileNav = () => {
  const { mobileNavOpen } = useSelector((store) => store.header);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      {/* Hamburger menu button for mobile */}
      <button 
        className="h-full flex items-center md:hidden ml-2"
        onClick={() => dispatch(headerActions.TOGGLE_MOBILE_NAV())}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      {/* Mobile sidebar navigation */}
      {mobileNavOpen && (
        <>
          {/* Background overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => dispatch(headerActions.CLOSE_MOBILE_NAV())}
          ></div>
          
          {/* Sidebar */}
          <div className={`fixed top-0 left-0 h-full w-[80%] max-w-[350px] bg-white z-50 overflow-y-auto transition-all duration-300 ease-in-out ${
            mobileNavOpen ? "translate-x-0" : "-translate-x-full"
          }`}>
            {/* Header with close button */}
            <div className="bg-[#232F3E] text-white p-4 flex justify-between items-center shadow-md">
              <div className="flex items-center space-x-2">
                <img src="./AmazonLogo.png" className="h-8" alt="Amazon Logo" />
              </div>
              <button 
                onClick={() => dispatch(headerActions.CLOSE_MOBILE_NAV())}
                className="text-white"
              >
                <IoMdClose size={24} />
              </button>
            </div>
            
            {/* User section */}
            <div className="p-4 border-b">
              <div 
                className="flex items-center space-x-2"
                onClick={() => {
                  navigate('/login');
                  dispatch(headerActions.CLOSE_MOBILE_NAV());
                }}
              >
                <p className="font-bold">Hello, sign in</p>
              </div>
            </div>
            
            {/* Navigation sections */}
            <div className="p-4 border-b">
              <h2 className="font-bold text-lg mb-3">Shop By Department</h2>
              <ul>
                <li className="py-2">All Categories</li>
                <li className="py-2">Deals</li>
                <li className="py-2">Electronics</li>
                <li className="py-2">Books</li>
                <li className="py-2">Fashion</li>
              </ul>
            </div>
            
            {/* Account & Lists */}
            <div className="p-4 border-b border-gray-200">
              <h2 className="font-bold text-lg mb-3">Your Lists</h2>
              <ul>
                {SignInList.Your_Lists.map((item, index) => (
                  <li key={index} className="py-2">{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="p-4 border-b border-gray-200">
              <h2 className="font-bold text-lg mb-3">Your Account</h2>
              <ul>
                {SignInList.Your_Account.map((item, index) => (
                  <li 
                    key={index}
                    className="py-2 hover:bg-gray-100 active:bg-gray-200 cursor-pointer transition-colors duration-150 rounded px-2"
                    onClick={() => {
                      navigate('/account');
                      dispatch(headerActions.CLOSE_MOBILE_NAV());
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-4">
              <button 
                className="w-full bg-[#febd69] text-black py-2 rounded hover:bg-[#f0ad4e] active:bg-[#eea236] transition-colors duration-150"
                onClick={() => {
                  navigate('/login');
                  dispatch(headerActions.CLOSE_MOBILE_NAV());
                }}
              >
                Sign In
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MobileNav;
