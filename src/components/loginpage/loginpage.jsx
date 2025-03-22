import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-start">
      <span>
        <img src="./AmazonBlacklogo.webp" className="h-[7rem] inline"></img>
        <span>.in</span>
      </span>

      <div className="p-[1.5rem] bg-white w-[22rem] rounded-[0.5rem] border-1 border-gray-300 text-sm">
        <form>
          <h5>Sign in or create account</h5>
          <label>
            <p>
              <b>Enter mobile number or email</b>
            </p>
            <input
              type="text"
              className="w-full h-[2rem] rounded-[5px] border-1 border-gray-300"
            />
            <button className="w-full bg-[var(--button-color)] mt-2 h-[2rem] !rounded-[1rem]">
              Continue
            </button>
            <p>
              By continuing, you agree to Amazon's Conditions of Use and Privacy
              Notice.
            </p>
          </label>
        </form>
        <p>
          <b>Buying for work? </b>
        </p>
        <Link to={"/"}>Shop on Amazon Business</Link>
      </div>
      <div className="flex flex-col justify-center text-sm m-[1rem]">
        <p>New to Amazon ?</p>
        <button className="border-1 border-gray-500 w-[15rem] h-[1.5rem] !rounded-lg">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};
export default Login;
