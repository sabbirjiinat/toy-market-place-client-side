import { FaGithub } from "react-icons/fa";
import googleLogo from "../../../assets/google.png";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const LoginWithGoogleOrGithub = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { loginWithGoogle, loginWithGithub } = useContext(AuthContext);
  const from = location.state?.from?.pathname || "/";
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        Swal.fire("Good job!", "You have login successfully by Google!", "success");
        navigate(from, { replace: true });
      })
      .catch(() => {});
  };

  const handleGithubLogin = () => {
    loginWithGithub()
      .then(() => {
        Swal.fire(
          "Good job!",
          "You have login successfully by Github!",
          "success"
        );
        navigate(from, { replace: true });
      })
      .catch(() => {});
  };
  return (
    <>
      <div className="divider">OR</div>
      <div className="md:flex justify-between space-y-3 md:space-y-0">
        <button
          onClick={handleGoogleLogin}
          className="flex items-center gap-2 border p-1 text-xl rounded-sm hover:bg-sky-600 hover:text-gray-100 duration-300"
        >
          Login With Google
          <img className="h-6" src={googleLogo} alt="" />
        </button>
        <button
          onClick={handleGithubLogin}
          className="flex items-center gap-2 border p-1 text-xl rounded-sm hover:bg-sky-600 hover:text-gray-100 duration-300"
        >
          Login With Github
          <FaGithub className="h-6"></FaGithub>
        </button>
      </div>
    </>
  );
};

export default LoginWithGoogleOrGithub;
