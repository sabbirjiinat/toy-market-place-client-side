import { TrashIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const MyToyTable = ({ myToy, handleDeleteToy }) => {
  const { photoURL, SubCategory, price, quantity, name, _id } = myToy;

  return (
    <tr>
      <th>
        <label>
          <TrashIcon
            onClick={() => handleDeleteToy(_id)}
            className="text-red-500 cursor-pointer h-10"
          ></TrashIcon>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photoURL} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{SubCategory}</div>
          </div>
        </div>
      </td>

      <td>{price}</td>
      <td>{quantity}</td>
      <td>{SubCategory}</td>
      <th>
              <Link to={`/updateMyToy/${_id}`}>
              <button className="bg-sky-400 hover:bg-sky-600 text-base rounded-sm hover:text-gray-100 duration-300 px-2 py-1 font-semibold">
          Update
        </button></Link>
      </th>
    </tr>
  );
};

export default MyToyTable;
