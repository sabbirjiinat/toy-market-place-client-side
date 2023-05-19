import { FaGithub } from 'react-icons/fa';
import googleLogo from '../../../assets/google.png'
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const LoginWithGoogleOrGithub = () => {
    const { loginWithGoogle } = useContext(AuthContext);
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            }).catch(error => {
            console.log(error);
        })
    }
    return (
        <>
             <div className="divider">OR</div>
                  <div className="flex justify-between">
                  <button onClick={handleGoogleLogin} className="flex items-center gap-2 border p-1 text-xl rounded-sm hover:bg-sky-600 hover:text-gray-100 duration-300">Login With Google
                  <img className="h-6" src={googleLogo} alt="" />
                  </button>
                  <button className="flex items-center gap-2 border p-1 text-xl rounded-sm hover:bg-sky-600 hover:text-gray-100 duration-300">Login With Github
                  <FaGithub className="h-6"></FaGithub>
                  </button>
                 </div>
        </>
    );
};

export default LoginWithGoogleOrGithub;