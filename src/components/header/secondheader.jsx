import styles from "./header.module.css";

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
    <div className={styles.secondheader}>
      {List.map((item, index) => (
        <span key={index} className={styles.secondhlist}>
          {item}
        </span>
      ))}
    </div>
  );
};

export default SecondHeader;
