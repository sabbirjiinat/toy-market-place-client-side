import { useLoaderData } from "react-router-dom";
import UseTitle from "../../../../Hooks/UseTitle";

const SingleRobot = () => {
    const singleRobot = useLoaderData()
    const { SubCategory, description, name, photoURL, price, quantity, rating, sellerEmail, sellerName, } = singleRobot;
    UseTitle('Robot')
    return (
        <div className="card lg:card-side bg-base-200 shadow-xl my-10">
        <figure>
          <img className="md:w-[40vw] h-full object-cover"
            src={photoURL}
            alt="Album"
          />
        </figure>
        <div className="card-body p-3">
                <h2 className="card-title font-bold md:text-4xl">{ name}</h2>
                <p className="text-gray-700 md:text-xl"><span className="font-semibold">Description :</span> {description}</p>
                <p className="text-gray-700 md:text-xl"><span className="font-semibold">Price :</span> { price}</p>
                <p className="text-gray-700 md:text-xl"><span className="font-semibold">AvailAble Quantity :</span> { quantity}</p>
                <p className="text-gray-700 md:text-xl"><span className="font-semibold">Rating :</span> { rating}</p>
                <p className="text-gray-700 md:text-xl"><span className="font-semibold">Seller name :</span> { sellerName}</p>
                <p className="text-gray-700 md:text-xl"><span className="font-semibold">Seller Email :</span> { sellerEmail}</p>
                <p className="text-gray-700 md:text-xl"><span className="font-semibold">Sub-Category :</span> { SubCategory}</p>
          <div className="card-actions justify-end">
            <button className="bg-sky-400 hover:bg-sky-600 text-base rounded-sm hover:text-gray-100 duration-300 px-2 py-1 font-semibold">Book Order</button>
          </div>
        </div>
      </div>
    );
};

export default SingleRobot;