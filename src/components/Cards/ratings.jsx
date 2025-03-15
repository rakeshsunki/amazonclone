import { FaStar } from "react-icons/fa";
const Ratings = ({ rating }) => {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <span key={index} style={{ color: index < rating ? "gold" : "gray" }}>
          <FaStar />
        </span>
      ))}
    </>
  );
};
export default Ratings;
