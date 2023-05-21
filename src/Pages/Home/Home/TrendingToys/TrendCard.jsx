import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const TrendCard = ({ trend }) => {
  const { image, price, quantity, name, rating } = trend;
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      className="card md:h-96 bg-base-300 shadow-xl"
    >
      <figure>
        <img className="md:h-40 w-full object-cover" src={image} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title ">{name}</h2>
        <p>
          <span className="font-semibold text-gray-600">Quantity : </span>
          {quantity}
        </p>
        <p>
          {" "}
          <span className="font-semibold text-gray-600">Price : </span>
          {price}
        </p>
        <p className="flex">
          <span className="font-semibold text-gray-600">Rating : </span>
          <Rating style={{ maxWidth: 100 }} value={rating} readOnly />

          {rating}
        </p>
      </div>
      <button className="bg-sky-400 hover:bg-sky-600  hover:text-gray-100 duration-300 px-2 py-1 font-semibold rounded-sm text-xl">
        Place Order
      </button>
    </div>
  );
};

export default TrendCard;
