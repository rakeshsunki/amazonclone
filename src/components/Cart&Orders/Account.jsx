import { useNavigate } from "react-router-dom";
const Account = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen !-m-4 p-0 bg-white">
      <div className="!m-4 w-full content-center justify-items-center bg-white">
        <h3>Your Account</h3>
        <div className="md:flex md:flex-wrap">
          <div
            className="md:w-[30%] h-max lg:h-30 flex p-4 !m-3 !rounded-lg border !border-gray-400 text-sm hover:bg-gray-200"
            onClick={() => navigate("/orders")}
          >
            <img src="../Orders/yourorders.png" className="w-16 h-12" />
            <span>
              <h6>Your Orders</h6>
              <p>Track, return or buy things again</p>
            </span>
          </div>
          <div
            className="md:w-[30%] h-max lg:h-30 flex p-4 !m-3 !rounded-lg border !border-gray-400 text-sm hover:bg-gray-200"
            onClick={() => navigate("/login")}
          >
            <img src="../Orders/loginlock.png" className="w-16 h-12" />
            <span>
              <h6>Login & Security</h6>
              <p>Edit login, name, and mobile number</p>
            </span>
          </div>
          <div className="md:w-[30%] h-max lg:h-30 flex p-4 !m-3 !rounded-lg border !border-gray-400 text-sm hover:bg-gray-200">
            <img src="../Orders/prime.png" className="w-16 h-12" />
            <span>
              <h6>Prime</h6>
              <p>View benifits and payment settings</p>
            </span>
          </div>
          <div className="md:w-[30%] h-max lg:h-30 flex p-4 !m-3 !rounded-lg border !border-gray-400 text-sm hover:bg-gray-200">
            <img src="../Orders/youraddresses.png" className="w-16 h-12" />
            <span>
              <h6>Your Addresses</h6>
              <p>Edit addresses for orders and gifts</p>
            </span>
          </div>
          <div className="md:w-[30%] h-max lg:h-30 flex p-4 !m-3 !rounded-lg border !border-gray-400 text-sm hover:bg-gray-200">
            <img
              src="../Orders/yourbusinessaccount.jpg"
              className="w-16 h-12"
            />
            <span>
              <h6>Your business account</h6>
              <p>
                Sign up for free to save up to 28% with GST invoice and bulk
                discounts and purchase on credit
              </p>
            </span>
          </div>
          <div className="md:w-[30%] h-max lg:h-30 flex p-4 !m-3 !rounded-lg border !border-gray-400 text-sm hover:bg-gray-200">
            <img src="../Orders/payment.png" className="w-16 h-12" />
            <span>
              <h6>Payment options</h6>
              <p>Edit or add payment methods</p>
            </span>
          </div>
          <div className="md:w-[30%] h-max lg:h-30 flex p-4 !m-3 !rounded-lg border !border-gray-400 text-sm hover:bg-gray-200">
            <img src="../Orders/amazonpay.png" className="w-16 h-12" />
            <span>
              <h6>Amazon Pay balance</h6>
              <p>Add money to your balance</p>
            </span>
          </div>
          <div className="md:w-[30%] h-max lg:h-30 flex p-4 !m-3 !rounded-lg border !border-gray-400 text-sm hover:bg-gray-200">
            <img src="../Orders/contactus.png" className="w-16 h-16" />
            <span>
              <h6>Contact Us</h6>
              <p>contact our customer services via phone or chat</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Account;
