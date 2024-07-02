import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import Navber from "./Components/Navbar/Navber";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/footer/Footer";
import { MutatingDots } from "react-loader-spinner";

function App() {
  const loader = useNavigation();
  return (
    <>
      <Navber />
      <div className="container mx-auto p-2">
      {loader.state === "loading" ? <span className="h-[90vh] w-fill flex justify-center items-center">
        <MutatingDots
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          secondaryColor="#4fa94d"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </span> : <Outlet />}
        <ToastContainer />
      </div>
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default App;
