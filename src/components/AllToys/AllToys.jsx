// import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllToysTabularForm from "./allToysTabularForm/allToysTabularForm";
import UseTitle from "../../Hooks/UseTitle";

const AllToys = () => {
  const allToysData = useLoaderData();
 UseTitle('All Toys')
    return (
        <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
                    {/* row 1 */}
                  
      {allToysData.map((toys) => (
        <AllToysTabularForm key={toys._id} toys={toys}></AllToysTabularForm>
      ))}
  
          
         
          
          
          </tbody>
       
          
        </table>
      </div>
  
  );
};

export default AllToys;
