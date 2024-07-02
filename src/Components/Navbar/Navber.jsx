import { Link, NavLink } from "react-router-dom";
import { CgLoadbarDoc } from "react-icons/cg";
import { BiLogInCircle } from "react-icons/bi";
import { GrLogout } from "react-icons/gr";
import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../ContextProvider/ContextProvider";
import { Tooltip } from "react-tooltip";
const Navber = () => {
  const [onHover, setOnHover] = useState(false);
  const { user, logOut } = useContext(AuthProvider);
  const [theme, setTheme] = useState("light");
  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  // set theme state in localStorage on mount & also update localStorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");

    // add custom data-theme attribute
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  return (
    <div id="nav" className="navbar bg-white shadow-md sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  w-52 font-display4 font-medium"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/items">All Art & craft Items</NavLink>
            </li>
            <li>
              <NavLink to="/addItem">Add Craft Item</NavLink>
            </li>
            <li>
              <NavLink to="/list">My Art&Craft List</NavLink>
            </li>
          </ul>
        </div>
        <Link
         data-tooltip-id="my-tooltip"
         data-tooltip-content="We are painthouse.com"
          className="btn btn-ghost gap-0 text-red-600 text-lg font-banner"
          to="/"
        >
          Paint<span className="text-green-600">house</span>.com
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-display4 font-medium">
          <li>
            <NavLink
              to="/"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Home"
            >
              Home
            </NavLink>
            <Tooltip id="my-tooltip" place="top" />
          </li>
          <li>
            <NavLink
              to="/items"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="All Items"
            >
              All Art & craft Items
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addItem"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Add Items"
            >
              Add Craft Item
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/list"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Your Added Items"
            >
              My Art&Craft List
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <label
          className="swap swap-rotate mr-2"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Theme Control"
        >
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            onChange={handleToggle}
            className="theme-controller "
            value="synthwave"
          />

          {/* sun icon */}
          <svg
            className="swap-off fill-current w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on fill-current w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        {user ? (
          <div className="dropdown dropdown-end flex flex-row justify-center items-center gap-1 ">
            <div
              tabIndex={0}
              role="button"
              className="rounded-full avatar relative"
            >
              <div
                className=" w-10 rounded-full"
                onMouseOver={() => setOnHover(true)}
                onMouseOut={() => setOnHover(false)}
              >
                <img src={user.photoURL} />
                {onHover && (
                  <div className="z-50 bg-white absolute right-0 min-w-40 text-center border rounded-lg px-5 flex flex-col justify-start items-start gap-0">
                    <p className="text-center font-display1 font-medium p-2 text-xl w-full">
                      Welcome
                    </p>
                    <span className=" pt-2 w-full overflow-hidden text-nowrap text-center font-medium">
                      {user.displayName}
                    </span>
                    <div className="divider"></div>
                    <button
                     data-tooltip-id="my-tooltip-denger"
                     data-tooltip-content="Careful! Want to logout"
                      onClick={() => logOut()}
                      className="font-medium mb-3 outline-none shadow-none w-full flex flex-row justify-center items-center gap-2 border-none bg-transparent hover:text-red-500 hover:bg-transparent hover:border-none"
                    >
                      Log out <GrLogout />
                    </button>
                    <Tooltip id="my-tooltip-denger" place="top" style={{background : "red"}} />
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="relative inline-flex items-center px-5 py-2 overflow-hidden text-sm font-medium text-green-600 border-2 border-green-600 rounded-lg hover:text-white group hover:bg-gray-50"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-green-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-4 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease text-2xl">
                <BiLogInCircle />
              </span>
              <span className="relative">Log in</span>
            </Link>
            <Link
              to="/register"
              className=" ml-2 relative inline-flex items-center px-5 py-2 overflow-hidden text-sm font-medium text-green-600 border-2 border-green-600 rounded-lg hover:text-white group hover:bg-gray-50"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-green-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-4 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease text-2xl">
                <CgLoadbarDoc />
              </span>
              <span className="relative">Register</span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navber;
