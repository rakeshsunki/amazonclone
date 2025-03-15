import { useDispatch, useSelector } from "react-redux";
import { headerActions } from "../../store/Store";
const Language = () => {
  const { langStatus } = useSelector((store) => store.header);
  const dispatch = useDispatch();
  return (
    <>
      {langStatus == "True" ? (
        <>
          <div className="w-full h-screen bg-black fixed opacity-50 z-[3]"></div>
          <div
            className="w-max h-max flex flex-col gap-y-2 justify-center bg-white z-[50] fixed top-[5%] md:top-[8%] left-[65%] p-2 rounded-[0.2rem]"
            onMouseEnter={() => dispatch(headerActions.LANGIN())}
            onMouseLeave={() => dispatch(headerActions.LANGOUT())}
          >
            <label>
              <input type="radio" name="lang" /> <small>తెలుగు - TE</small>
            </label>
            <label>
              <input type="radio" name="lang" /> <small>हिन्दी - HI</small>
            </label>
            <label>
              <input type="radio" name="lang" /> <small>English - EN</small>
            </label>
            <label>
              <input type="radio" name="lang" /> <small>தமிழ் -TA</small>
            </label>
            <label>
              <input type="radio" name="lang" /> <small>ಕನ್ನಡ - KN</small>
            </label>
            <label>
              <input type="radio" name="lang" /> <small>മലയാളം - ML</small>
            </label>

            <label>
              <input type="radio" name="lang" /> <small>বাংলা - BN</small>
            </label>

            <label>
              <input type="radio" name="lang" /> <small>বাংলা - MR</small>
            </label>
          </div>
        </>
      ) : null}
    </>
  );
};
export default Language;
