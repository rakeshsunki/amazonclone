import { useDispatch, useSelector } from "react-redux";
import { headerActions } from "../../store/Store";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const { headList, signinstatus } = useSelector((store) => store.header);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  return (
    <>
      {signinstatus === "True" && (
        <>
          <div className="w-full h-screen bg-black fixed opacity-50 z-[30]"></div>
          <div
            className="flex flex-col justify-center bg-white w-[90%] md:w-[40%] h-max fixed top-[5%] md:top-[8%] md:left-[55%] p-4 rounded shadow-lg z-40"
            onMouseEnter={() => {
              dispatch(headerActions.IN());
            }}
            onMouseLeave={() => {
              dispatch(headerActions.OUT());
            }}
          >
            <button
              className="bg-[#febd69] w-[13rem] h-[2rem] rounded text-sm font-medium hover:bg-[#f0ad4e]"
              onClick={() => navigate("/login")}
            >
              Sign in
            </button>
            <p className="text-xs mt-2">
              New customer?<Link to={"/login"} className="text-blue-600 hover:text-red-600 hover:underline"> Start here.</Link>
            </p>
            <hr className="my-3" />
            
            <div className="w-full flex justify-between">
              <div className="w-[60%]">
                <h6 className="font-bold mb-2">Your Lists</h6>
                {headList.Your_Lists && headList.Your_Lists.map((item, index) => (
                  <span className="text-sm block py-1 hover:text-red-600 hover:underline cursor-pointer" key={index}>
                    {item}
                  </span>
                ))}
              </div>
              
              <div className="w-[40%] border-l border-gray-200 pl-3">
                <h6 className="font-bold mb-2">Your Account</h6>
                {headList.Your_Account && headList.Your_Account.map((item, index) => (
                  <p className="text-sm block py-1 hover:text-red-600 hover:underline cursor-pointer" key={index}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Signin;
