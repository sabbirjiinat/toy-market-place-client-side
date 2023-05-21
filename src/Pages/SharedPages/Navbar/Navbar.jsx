import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);


  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const navigationItems = (
    <div className="md:flex items-center md:space-x-4">
      <NavLink
        className={({ isActive }) => (isActive ? "text-blue-700" : "")}
        to="/"
      >
        <li className="font-semibold">Home</li>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-blue-700" : "")}
        to="/blog"
      >
        <li className="font-semibold">Blog</li>
      </NavLink>
      {user && (
        <>
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-700" : "")}
            to="/addAToy"
          >
            <li className="font-semibold">Add A Toy</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-700" : "")}
            to="/allToys"
          >
            <li className="font-semibold">All Toy</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-700" : "")}
            to="/myToys"
          >
            <li className="font-semibold">My Toy</li>
          </NavLink>
        </>
      )}
      {user ? (
        <button
          onClick={handleLogOut}
          className="bg-sky-400 hover:bg-sky-600  hover:text-gray-100 duration-300 px-2 py-1 font-semibold rounded-sm"
        >
          Log Out
        </button>
      ) : (
        <NavLink
          className="bg-sky-400 hover:bg-sky-600 text-base rounded-sm hover:text-gray-100 duration-300 px-2 py-1 font-semibold"
          to="/login"
        >
          Login
        </NavLink>
      )}
    </div>
  );
  return (
    <div className="navbar bg-[#d1dadf] mb-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navigationItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img
            className="h-10"
            src="https://i.ibb.co/ccyx5bm/logo.png"
            alt=""
          />
        </Link>
        <p className="font-semibold">
          Electronic Toy
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navigationItems}</ul>
      </div>
     {user &&  <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              title={user && user?.displayName}
              className=""
              src={user && user?.photoURL}
            />
          </div>
        </label>
      </div>}
    </div>
  );
};

export default Navbar;
