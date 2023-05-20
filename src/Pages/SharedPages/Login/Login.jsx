import { useContext, useState } from "react";
import login from "../../../../public/login.json";
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginWithGoogleOrGithub from "../LoginWithGoogleOrGithub/LoginWithGoogleOrGithub";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import UseTitle from "../../../Hooks/UseTitle";

const Login = () => {
  const { loginWithEmail } = useContext(AuthContext);
  const [userError, setUserError] = useState(null);
  const [userSuccess, setUserSuccess] = useState(null);
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/';
  UseTitle('Login')
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    setUserError("");
    setUserSuccess("");
    if (password.length < 6) {
      return setUserError("Type at least six character");
    } else {
      loginWithEmail(email, password)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          setUserSuccess("You have Login successfully");
          Swal.fire("Good job!", "You have login successfully!", "success");
          navigate(from, {replace:true})
        })
        .catch((error) => {
          setUserError(error.message);
          console.log(error);
        });
    }
  };

  return (
    <div className="mb-5">
      <h1 className="text-center text-3xl md:text-5xl  text-gray-700">
        Please Login
      </h1>
      <div className="md:flex items-center gap-4 p-7  shadow-2xl">
        <form onSubmit={handleLogin} className="md:w-1/2">
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className="py-1 px-1 rounded-md border-gray-300 border-2 w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              required
              type="password"
              name="password"
              placeholder="Password"
              className="py-1 px-1 rounded-md border-gray-300 border-2 w-full"
            />
            <p className="text-red-700">
              <small>{userError}</small>
            </p>
            <p className="text-green-700">
              <small>{userSuccess}</small>
            </p>
          </div>

          <input
            className="py-1 px-1 rounded-md bg-sky-400 text-xl font-semibold hover:bg-sky-600 hover:text-gray-200 cursor-pointer duration-300  border-gray-200 border-2 w-full my-3"
            type="submit"
            value="Login"
          />
          <p className="font-bold text-gray-700">
            <small>
              New To Kids Toys ?{" "}
              <Link to="/registration" className="text-red-700">
                Sign Up
              </Link>
            </small>
          </p>
          <LoginWithGoogleOrGithub></LoginWithGoogleOrGithub>
        </form>
        <div className="md:w-1/2">
          <Lottie animationData={login} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Login;
