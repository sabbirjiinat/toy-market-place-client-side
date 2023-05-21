import Lottie from "lottie-react";
import signUp from "../../../../public/signUp.json";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import LoginWithGoogleOrGithub from "../LoginWithGoogleOrGithub/LoginWithGoogleOrGithub";
import { updateProfile } from "firebase/auth";
import UseTitle from "../../../Hooks/UseTitle";


const Registration = () => {
  const { registerWithEmail } = useContext(AuthContext);
  const [userError, setUserError] = useState(null);
  const [userSuccess, setUserSuccess] = useState(null);
  UseTitle('Sign Up')
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    const photo = form.photo.value;
  

    setUserError("");
    setUserSuccess("");

    if (password.length < 6) {
      return setUserError("Please type at least six character");
    } else if (password !== confirm) {
      setUserError("Password did't Match");
    } else {
      registerWithEmail(email, password)
        .then((result) => {
            const registeredUser = result.user;
            updateUserProfile(registeredUser,name,photo)
        
          setUserSuccess("You have Registered Successfully");
          toast("You have Registered successfully");
        })
        .catch((error) => {
      
          setUserError(error.message);
        });
    }
    };
    
    const updateUserProfile = (user,name,photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        }).then(() => { }).catch(error => {
            console.log(error);
        })
    }
  return (
    <div data-aos="zoom-in-left"  data-aos-duration="1000" className="my-5 bg-[rgb(235,247,250)] " >
      <h1 className="text-center text-3xl md:text-5xl mb-2 text-gray-700">
        Please Sign Up
      </h1>
      <div className="md:flex items-center gap-4 p-7  shadow-2xl">
        <form onSubmit={handleRegister} className="md:w-1/2">
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="py-1 px-1 rounded-md border-gray-300 border-2 w-full"
            />
          </div>

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
          </div>
          <div>
            <label className="label">
              <span className="label-text">Confirm</span>
            </label>
            <input
              required
              type="password"
              name="confirm"
              placeholder="Confirm Password"
              className="py-1 px-1 rounded-md border-gray-300 border-2 w-full"
                      />
                      <p className="text-red-700"><small>{userError}</small></p>
                      <p className="text-green-700"><small>{ userSuccess}</small></p>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="py-1 px-1 rounded-md border-gray-400 border-2 w-full"
            />
          </div>
          <input
            className="py-1 px-1 rounded-md bg-sky-400 text-xl font-semibold hover:bg-sky-600 hover:text-gray-200 cursor-pointer duration-300  border-gray-200 border-2 w-full my-3"
            type="submit"
            value="Sign Up"
          />
                  <p className="font-bold text-gray-700"><small>Already Have an Account? <Link to='/login' className="text-red-700">Login</Link></small></p>
                  <LoginWithGoogleOrGithub></LoginWithGoogleOrGithub>
              </form>
        <div className="md:w-1/2">
          <Lottie animationData={signUp} loop={true} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Registration;
