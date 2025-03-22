import { useDispatch, useSelector } from "react-redux";
import { headerActions } from "../../store/Store";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const { headList, signinstatus } = useSelector((store) => store.header);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      {signinstatus == "True" ? (
        <>
          <div className="w-full h-screen bg-black fixed opacity-50 z-[3]"></div>
          {/* //background blur */}
          <div
            className="flex flex-col justify-center bg-white w-[90%] md:w-[40%] h-max fixed top-[5%] md:top-[8%] md:left-[55%] p-[1rem] rounded-[0.2rem] z-30"
            onMouseEnter={() => {
              dispatch(headerActions.IN());
            }}
            onMouseLeave={() => {
              dispatch(headerActions.OUT());
            }}
          >
            <button
              className="bg-[var(--button-color)] w-[13rem] h-[2rem]"
              style={{ borderRadius: "0.3rem" }}
              onClick={() => navigate("/login")}
            >
              <small>Sign in</small>
            </button>
            <p style={{ fontSize: "smaller" }}>
              New customer?<Link to={"/login"}> Start here.</Link>
            </p>
            <hr />
            <div className="w-full flex justify-between">
              <div className="w-[60%]">
                <h6>
                  <b>Your Lists</b>
                </h6>
                {headList.Your_Lists.map((item, index) => (
                  <span className="text-sm m-0 block" key={index}>
                    {item}
                  </span>
                ))}
              </div>
              <div className="w-[40%] border-l-blue-300 p-1">
                <h6>
                  <b>Your Account</b>
                </h6>
                {headList.Your_Account.map((item, index) => (
                  <p className="text-sm m-0 block" key={index}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
export default Signin;
