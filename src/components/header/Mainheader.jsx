import Header from "./header";
import Language from "./language";
import Signin from "./signin";
import MobileNav from "./MobileNav";  // Import the new component

const Mainheader = () => {
  return (
    <>
      <Header />
      <Language />
      <Signin />
      <MobileNav />  {/* Add this line */}
    </>
  );
};
export default Mainheader;
