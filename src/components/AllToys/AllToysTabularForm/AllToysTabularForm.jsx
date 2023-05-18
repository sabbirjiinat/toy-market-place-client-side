
const AllToysTabularForm = ({ toys }) => {
    console.log(toys);
    const { SubCategory,sellerName,name,price,quantity} = toys;
    return (
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
            <td>{sellerName}</td>
            <td>{ name}</td>
            <td>{ SubCategory}</td>
            <td>{ price}</td>
            <td>{ quantity}</td>
        <th>
          <button className="bg-sky-400 px-2 py-1 rounded-md hover:bg-sky-600 hover:text-gray-200 duration-300 text-sm ">View Details</button>
        </th>
      </tr>
    );
};

export default AllToysTabularForm;