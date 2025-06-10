import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();

  const accountOptions = [
    {
      title: "Your Orders",
      description: "Track, return or buy things again",
      image: "../Orders/yourorders.png",
      route: "/orders",
    },
    {
      title: "Login & Security",
      description: "Edit login, name, and mobile number",
      image: "../Orders/loginlock.png",
      route: "/login",
    },
    {
      title: "Prime",
      description: "View benefits and payment settings",
      image: "../Orders/prime.png",
      route: "/",
    },
    {
      title: "Your Addresses",
      description: "Edit addresses for orders and gifts",
      image: "../Orders/youraddresses.png",
      route: "/",
    },
    {
      title: "Your Business Account",
      description:
        "Sign up for free to save up to 28% with GST invoice and bulk discounts and purchase on credit",
      image: "../Orders/yourbusinessaccount.jpg",
      route: "/",
    },
    {
      title: "Payment Options",
      description: "Edit or add payment methods",
      image: "../Orders/payment.png",
      route: "/",
    },
    {
      title: "Amazon Pay Balance",
      description: "Add money to your balance",
      image: "../Orders/amazonpay.png",
      route: "/",
    },
    {
      title: "Contact Us",
      description: "Contact our customer services via phone or chat",
      image: "../Orders/contactus.png",
      route: "/",
    },
  ];

  return (
    <>
      {/* Spacer for header */}
      <div className="w-full h-[6.9vh] md:h-[6rem]"></div>

      <div className="bg-gray-100 min-h-screen py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            Your Account
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {accountOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => navigate(option.route)}
              >
                <div className="flex items-start">
                  <img
                    src={option.image}
                    alt={option.title}
                    className="w-12 h-12 object-contain mr-4"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      {option.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {option.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
