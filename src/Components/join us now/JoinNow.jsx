import shadow from "../../assets/Img/join us/shadow.jpg";
import img from "../../assets/Img/join us/background.jpg";
import icon from "../../assets/Img/join us/icon.png";
import { RiPresentationLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Slide, Zoom } from "react-awesome-reveal";

const JoinNow = () => {
  const bgImg = {
    backgroundImage: `url(${shadow}) , url(${img})`,
    backgroundPosition: "center ,center",
    backgroundRepeat: "no-repeat , no-repeat",
    backgroundSize: "cover",
    width: "100%",
  };
  return (
    <div
      className="mt-20 w-full h-72 p-10 lg:p-20 bg-fixed text-white flex flex-row justify-between items-center gap-5"
      style={bgImg}
    >
      <Zoom>
        <div className="">
          <h1 className="font-display4 font-semibold text-2xl md:text-4xl lg:text-6xl text-white">
            Join us now <span className="text-green-400">free!</span>
          </h1>
          <p>
            Great opportunity to join with us . We are painthouse.com here you
            find the exclusive painting and drawing items for all time in a
            cheap rate .
          </p>
          <Link
            to="/register"
            className=" mt-5 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-green-400 transition duration-300 ease-out border-2 border-green-400 rounded-lg shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-400 border-green-400 group-hover:translate-x-0 ease gap-1">
              <RiPresentationLine /> Register Now
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-green-400 border-green-400 transition-all duration-300 transform group-hover:translate-x-full ease">
              Register
            </span>
            <span className="relative invisible">Register now</span>
          </Link>
        </div>
      </Zoom>
      <div className=" hidden absolute sm:relative sm:block">
        <Slide direction="right" duration={"1500"} delay="30">
          <img src={icon} alt="" className="w-full object-cover" />
        </Slide>
      </div>
    </div>
  );
};

export default JoinNow;
