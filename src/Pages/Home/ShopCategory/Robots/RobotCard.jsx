import { Link } from "react-router-dom";


const RobotCard = ({ robot }) => {
  const { photoURL, price, name, rating,_id } = robot;

  

    return (
        <div className="card card-compact  bg-base-100 shadow-2xl h-80">
        <figure><img className="" src={photoURL} alt="Shoes" /></figure>
        <div className="card-body">
                <h2 className="card-title">Name : {name}</h2>
                <p className="font-semibold">Price : {price}</p>
                <p className="font-semibold">Rating: {rating}</p>
          <div className="">
            <Link to={`/robot/${_id}`}>
            <button className="bg-sky-400 hover:bg-sky-600  rounded-sm hover:text-gray-100 duration-300 px-2 py-1 font-semibold text-xl w-full">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default RobotCard;