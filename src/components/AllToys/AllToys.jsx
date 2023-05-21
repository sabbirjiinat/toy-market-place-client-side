// import { useState } from "react";
import AllToysTabularForm from "./allToysTabularForm/allToysTabularForm";
import UseTitle from "../../Hooks/UseTitle";
import { useEffect, useRef, useState } from "react";


const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [ascending, setAscending] = useState(true)
  const searchRef = useRef()
  const [search,setSearch] = useState('')
  useEffect(() => {
    fetch(`https://electronic-toy-world-server-site.vercel.app/toys?search=${search}&sort=${ascending ? 'asc' : 'dec'}`)
      .then(res => res.json())
      .then(data => {
      setAllToys(data)
    })
  }, [ascending,search])
  
  const handleSearch = () => {
 
    setSearch(searchRef.current.value)
  }
 
 
  const handleSearchByName = (event) => {
    event.preventDefault();
    const search = event.target.search.value;
    fetch(
      `https://electronic-toy-world-server-site.vercel.app/searchByName/${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  };
  UseTitle("All Toys");
  return (
    <div className="overflow-x-auto w-full">
      <form
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        onSubmit={handleSearchByName}
        className="text-center my-6"
      >
        <input
          ref={searchRef}
          required
          placeholder="Search By Name or Word"
          className="border-sky-300 border-2 rounded-md py-1 px-2"
          type="text"
          name="search"
          id=""
        />
        <input
          onClick={handleSearch}
          className=" mx-2 bg-sky-400 hover:bg-sky-600 rounded-sm hover:text-gray-100 duration-300 px-2 py-1 font-semibold"
          type="submit"
          value="Search"
        />
        <button onClick={()=>setAscending(!ascending)} className="bg-[rgb(69,159,217)] hover:bg-sky-600 rounded-sm hover:text-gray-100 duration-300 px-2 py-1 font-semibold">{ ascending ? 'Price High To Low' : 'Price Low To High'}</button>
      </form>
      <table
        data-aos="zoom-out-down"
        data-aos-duration="500"
        className="table w-full"
      >
        {/* head */}
        <thead>
          <tr>
            <th>Seller-Name</th>
            <th>Toy Name</th>
            <th>Sub-Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>View-Details</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {allToys.map((toys) => (
            <AllToysTabularForm key={toys._id} toys={toys}></AllToysTabularForm>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
