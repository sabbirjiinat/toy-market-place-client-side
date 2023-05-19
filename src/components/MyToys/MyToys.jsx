import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToyTable from "./MyToyTable";
import Swal from "sweetalert2";
import UseTitle from "../../Hooks/UseTitle";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  const { user } = useContext(AuthContext);
  UseTitle('My Toys')

  useEffect(() => {
    fetch(`http://localhost:5000/toys?sellerEmail=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user?.email]);

  // delete toy by id
  const handleDeleteToy = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to see this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = myToys.filter((myToy) => myToy._id !== id);
              setMyToys(remaining);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto w-full mb-5">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>Delete</label>
            </th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Sub-Category</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {myToys.map((myToy) => (
            <MyToyTable
              key={myToy._id}
              myToy={myToy}
              handleDeleteToy={handleDeleteToy}
            ></MyToyTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
