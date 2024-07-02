import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlinePhoto } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { AuthProvider } from "../../ContextProvider/ContextProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../../firebase.config";


const Register = () => {

  const { createUser  } = useContext(AuthProvider);
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoUrl = e.target.url.value;
    const password = e.target.pass.value;
    console.log(name , email , photoUrl , password)
    //password validation
    let patten = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!patten.test(password)) {
      toast.error(
        "Enter 6 character password with minimum one uppercase and lowercase letter"
      );
    } else {
      createUser(email, password)
      .then(() => {
        updateProfile(auth.currentUser, { displayName: name });
        //Now reset the input field
        toast.success("Registration Successful")
        e.target.reset();
        navigate("/");
      })
      .catch(() => toast.error("Registration Failed"));
    }
  };
  // password show and hidden
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
        Sign <span className="text-green-700">up</span>
      </h1>
      <form
        onSubmit={handelSubmit}
        className="flex flex-col justify-center items-center  "
      >
        <div className="w-96 flex flex-col justify-center items-center  my-5 gap-3 bg-[#00000026] p-5 rounded shadow">
          <label className="input input-bordered rounded flex items-center gap-2 grow w-full">
            <GrUserManager className=" opacity-70" />
            <input
              type="text"
              className="grow"
              name="name"
              placeholder="Name"
              required
            />
          </label>
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
          <label className="input input-bordered rounded flex items-center gap-2 grow w-full">
            <MdOutlinePhoto className=" opacity-70" />
            <input
              type="text"
              className="grow"
              name="url"
              placeholder="Photo URL"
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
              Register
            </span>
          </button>
        </div>
      </form>
      <p className="text-center text-sm font-header2">
        Are you already register ? Then{" "}
        <Link to="/login" className="text-blue cursor-pointer">
          log in now!
        </Link>
      </p>
    </div>
  );
};

export default Register;
