import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "../ContextProvider/ContextProvider";
import PropTypes from "prop-types";
import { MutatingDots } from "react-loader-spinner";

const ProtectedRouter = ({ children }) => {
  const location = useLocation(); //here location means the previous page where it comes

  const { user, isLoading } = useContext(AuthProvider);
  if (isLoading) {
    return (
      <span className="h-[90vh] w-fill flex justify-center items-center">
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
      </span>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>; //here use navigate not NavLink
};
ProtectedRouter.propTypes = {
  children: PropTypes.any,
};
export default ProtectedRouter;
