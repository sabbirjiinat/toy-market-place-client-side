import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const RobotCard = ({ robot }) => {
  const { photoURL, price, name, rating,_id } = robot;

  

    return (
      <div data-aos="fade-down-right" data-aos-duration="1000" 
        className="card card-compact  bg-[rgb(227,244,233)] shadow-2xl h-80">
        <figure><img className="" src={photoURL} alt="Shoes" /></figure>
        <div className="card-body">
                <h2 className="card-title">Name : {name}</h2>
                <p className="font-semibold">Price : {price}</p>
                <p  className="font-semibold flex"><span>Rating : </span>  <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
 {rating}</p>
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