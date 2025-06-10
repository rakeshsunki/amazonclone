const SecondHeader = () => {
  const List = [
    "Mx player",
    "Best Seller",
    "SellMobiles",
    "Today's Deals",
    "Customer Service",
    "Prime",
    "Electronics",
    "Home & Kitchen",
    "Amazon Pay",
    "New Releases",
    "Fashion",
    "Computers",
  ];

  return (
    <div className="h-[1rem] md:h-[2rem] bg-[#232F3E] text-white flex items-center z-20 fixed top-[4.3rem] md:top-[4rem] left-0 right-0 overflow-x-auto whitespace-nowrap px-2">
      {List.map((item, index) => (
        <span
          key={index}
          className="border !border-transparent hover:!border-white h-[1.5rem] text-[0.3rem] md:text-[0.6rem] lg:text-[0.8rem] flex items-center font-semibold p-1 cursor-pointer mx-1"
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default SecondHeader;
