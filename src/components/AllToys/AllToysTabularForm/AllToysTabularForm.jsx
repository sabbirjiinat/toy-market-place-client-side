
const AllToysTabularForm = ({ toys }) => {
    console.log(toys);
    const { SubCategory,sellerName,name,photoURL,price,quantity,_id } = toys;
    return (
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        {/* <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photoURL} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td> */}
        
            <td>{sellerName}</td>
            <td>{ name}</td>
            <td>{ SubCategory}</td>
            <td>{ price}</td>
            <td>{ quantity}</td>
        <th>
          <button className="bg-sky-400 px-2 py-1 rounded-md hover:bg-sky-600 hover:text-gray-200 duration-300 text-sm ">Details</button>
        </th>
      </tr>
    );
};

export default AllToysTabularForm;