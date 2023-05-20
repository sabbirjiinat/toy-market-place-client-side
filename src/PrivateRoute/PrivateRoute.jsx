import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loader } = useContext(AuthContext);
  if (loader) {
    return (
      <div className="flex justify-center items-center">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    );
  } else if (!user) {
    return <Navigate state={{ from: location }} replace to="/login"></Navigate>;
  } else {
    return children;
  }
};

export default PrivateRoute;
