import { Link } from "react-router-dom";
import errorImg from "../../assets/Img/404.jpg";
const Error = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 w-full">
        <img src={errorImg} className="w-[80%] md:w-[40%]"/>
        <Link
          to="/"
          className="hover:text-gray-800 font-semibold relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono  tracking-tighter text-white bg-gray-800 rounded-lg group"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-400 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
          <span className="relative px-5 ">Back To Home</span>
        </Link>
      </div>
    );
};

export default Error;