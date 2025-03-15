import { useDispatch } from "react-redux";
import styles from "./header.module.css";
import { headerActions } from "../../store/Store";
const HeaderLanguage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={`flex items-center justify-center gap-1 h-[70%] ${styles.headercomponents}`}
        onMouseEnter={() => {
          dispatch(headerActions.LANGIN());
        }}
        onMouseLeave={() => {
          dispatch(headerActions.LANGOUT());
        }}
      >
        <img src="./indianflag.png" className="h-[40%]"></img>
        <b> EN</b>
      </div>
    </>
  );
};
export default HeaderLanguage;
