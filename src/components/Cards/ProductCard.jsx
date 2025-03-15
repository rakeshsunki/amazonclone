import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FullcardActions } from "../../store/Fullcardstore";

const SingleCard = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div
      className="bg-white h-[260px] w-[160px] md:h-[450px] md:w-[310px] p-[1rem] !m-[0.7rem]"
      style={{ boxShadow: "10px 10px 10px gray" }}
      onClick={() => {
        dispatch(FullcardActions.CLICKED(item));
        navigate("/fullcard");
      }}
    >
      <h5>
        <b>{item.name}</b>
      </h5>
      <center className="justify-items-center w-full object-cover">
        <img
          src={item.image}
          alt={item.name}
          className="h-[10rem] md:h-[20rem]"
        />
      </center>
      <Link className="w-full">
        <small>See more</small>
      </Link>
    </div>
  );
};
export default SingleCard;
