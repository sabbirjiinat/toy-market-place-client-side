import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateMyToy = () => {
  const updateToy = useLoaderData();
    const { price, description, quantity,_id } = updateToy;
    const handleUpdateToy = event => {
        event.preventDefault()
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.details.value;
        const updateDetails = { price, quantity, description }
        console.log(updateDetails);
        fetch(`http://localhost:5000/toys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
                
            },
            body:JSON.stringify(updateDetails)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    Swal.fire(
                        'Success!',
                        'Your toy updated successfully!',
                        'success'
                      )
                }
        })
    }

  return (
    <div>
      <h1 className="text-center text-2xl md:text-4xl font-semibold text-gray-800">
        Update Your Toy
      </h1>
      <div className=" flex  justify-center">
        <form onSubmit={handleUpdateToy} className="md:w-1/2">
          <div>
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              defaultValue={price}
              type="text"
              name="price"
              placeholder="Price"
              className="py-1 px-1 rounded-md border-gray-300 border-2 w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              defaultValue={quantity}
              type="text"
              name="quantity"
              placeholder="Quantity"
              className="py-1 px-1 rounded-md border-gray-300 border-2 w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              defaultValue={description}
              type="text"
              name="details"
              placeholder="Details"
              className="py-1 px-1 rounded-md border-gray-300 border-2 w-full"
            />
          </div>

          <input
            className="py-1 px-1 rounded-md bg-sky-400 text-xl font-semibold hover:bg-sky-600 hover:text-gray-200 cursor-pointer duration-300  border-gray-200 border-2 w-full my-3"
            type="submit"
            value="Update"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateMyToy;
