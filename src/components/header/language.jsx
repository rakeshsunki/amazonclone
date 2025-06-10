import { useDispatch, useSelector } from "react-redux";
import { headerActions } from "../../store/Store";

const Language = () => {
  const { langStatus } = useSelector((store) => store.header);
  const dispatch = useDispatch();
  
  return (
    <>
      {langStatus === "True" && (
        <>
          <div className="w-full h-screen bg-black fixed opacity-50 z-[30]"></div>
          <div
            className="w-max h-max flex flex-col gap-y-2 justify-center bg-white z-[50] fixed top-[5%] md:top-[8%] left-[65%] p-3 rounded shadow-lg"
            onMouseEnter={() => dispatch(headerActions.LANGIN())}
            onMouseLeave={() => dispatch(headerActions.LANGOUT())}
          >
            {[
              "తెలుగు - TE",
              "हिन्दी - HI", 
              "English - EN",
              "தமிழ் - TA",
              "ಕನ್ನಡ - KN",
              "മലയാളം - ML",
              "বাংলা - BN",
              "বাংলা - MR"
            ].map((lang, index) => (
              <label key={index} className="flex items-center hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                <input type="radio" name="lang" className="mr-2" />
                <span className="text-sm">{lang}</span>
              </label>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Language;
