import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img
          className="h-[80vh] w-[90vw] object-cover"
          src="https://i.ibb.co/hB944TD/162-1622413-4chan-404-pages-hd-png-download.png"
          alt=""
        />
      </div>
      <div className="text-center">
        <Link>
          <button
            className=" w-[50vw] text-2xl bg-sky-400 hover:bg-sky-600  rounded-sm hover:text-gray-100 duration-300 px-2 py-1 font-semibold"
            to="/"
          >
            {" "}
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
