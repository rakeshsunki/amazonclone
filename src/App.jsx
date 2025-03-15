import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SecondHeader from "./components/header/secondheader";
import Mainheader from "./components/header/Mainheader";
import Footer from "./components/Footer/footer";
import ScrollTop from "./scrolltop.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Mainheader />
      <SecondHeader />
      <ScrollTop />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
