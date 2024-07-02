import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthProvider } from "../../ContextProvider/ContextProvider";
import { toast } from "react-toastify";

const LogIn = () => {
  const { signInUser, loginWithGoogle, loginWithGithub } =
    useContext(AuthProvider);
  const navigate = useNavigate();
  const location = useLocation();
  const locationPath = location?.state ? `${location.state}` : "/";
  const handelSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.pass.value;
    console.log(email, password);
    signInUser(email, password)
      .then(() => {
        e.target.reset();
        toast.success("Log in successfully");
        navigate(locationPath);
      })
      .catch(() => toast.error("Log in failed"));
  };

  const handelgoogle = () => {
    loginWithGoogle()
      .then(() => {
        toast.success("Log in successfully");
        navigate(locationPath);
      })
      .catch(() => toast.error("Log in failed"));
  };
  const handelgithub = () => {
    loginWithGithub()
      .then(() => {
        toast.success("Log in successfully");
        navigate(locationPath);
      })
      .catch(() => toast.error("Log in failed"));
  };
  const [open, setOpen] = useState(false);
  const openEye = () => {
    setOpen(false);
  };
  const closeEye = () => {
    setOpen(true);
  };

  return (
    <div>
      <h1 className="text-4xl font-banner2 font-medium text-center my-5">
        Log <span className="text-green-700">In</span>
      </h1>
      <form
        onSubmit={handelSubmit}
        className="flex flex-col justify-center items-center  "
      >
        <div className="w-96 flex flex-col justify-center items-center  my-5 gap-3 bg-[#00000026] p-5 rounded shadow">
          <label className="input input-bordered rounded flex items-center gap-2 grow w-full">
            <MdOutlineEmail className=" opacity-70" />
            <input
              type="email"
              className="grow"
              name="email"
              placeholder="Email"
              required
            />
          </label>
          <label className="relative input input-bordered rounded flex items-center gap-2 grow w-full">
            <RiLockPasswordLine className="w-4 h-4 opacity-70" />
            <input
              type={open ? "text" : "password"}
              className="grow "
              name="pass"
              placeholder="Password"
              required
            />
            <div className=" flex flex-row justify-center items-center ">
              <FaRegEye
                onClick={openEye}
                className={`${!open && "hidden"} cursor-pointer`}
              />
              <FaRegEyeSlash
                onClick={closeEye}
                className={`${open && "hidden"} cursor-pointer`}
              />
            </div>
          </label>
          <button
            type="submit"
            className="w-full relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              Log In
            </span>
          </button>
        </div>
      </form>
      <p className="text-center text-sm font-header2">
        Are you new here ? Then{" "}
        <Link
          to="/register"
          className="text-blue cursor-pointer"
        >
          register now!
        </Link>
      </p>
      <div className="divider w-96 mx-auto font-header2 font-semibold">OR</div>
      <h1></h1>
      <div className="flex flex-row justify-center items-center gap-4 text-3xl">
        <FcGoogle onClick={handelgoogle} className="cursor-pointer" />
        <BsGithub onClick={handelgithub} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default LogIn;
