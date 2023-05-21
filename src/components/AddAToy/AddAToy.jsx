import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UseTitle from "../../Hooks/UseTitle";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  const { displayName, email } = user || {};
  UseTitle("Add a Toy");
  const {
    register,
    handleSubmit,
    // watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
   
    fetch(`https://electronic-toy-world-server-site.vercel.app/toys`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast("You have added a Toy Successfully");
          reset();
        }
      
      });
  };

  return (
    <div
      data-aos="fade-left"
      data-aos-anchor="#example-anchor"
      data-aos-duration="1000"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}

        {/* Toy url & Toy name  */}
        <div className="w-full space-y-3 md:space-y-0 md:flex gap-4 mb-3 ">
          <input
            className="border-2 w-full px-2 py-1 rounded-md"
            defaultValue=""
            type="url"
            placeholder="Toy URL"
            {...register("photoURL")}
          />

          <input
            className="border-2 w-full  px-2 py-1 rounded-md"
            defaultValue=""
            type="text"
            placeholder="Toy Name"
            {...register("name")}
          />
        </div>

        {/* seller name & seller email  */}
        <div className="w-full space-y-3 md:space-y-0 md:flex gap-4 mb-3">
          <input
            className="border-2 w-full px-2 py-1 rounded-md"
            defaultValue={displayName}
            type="text"
            placeholder="Seller Name"
            {...register("sellerName")}
          />

          <input
            className="border-2 w-full  px-2 py-1 rounded-md"
            defaultValue={email}
            type="email"
            placeholder="Seller Email"
            {...register("sellerEmail")}
          />
        </div>

        {/* sub category & price  */}
        <div className="w-full space-y-3 md:space-y-0 md:flex gap-4 mb-3">
          <select
            className="border-2 w-full px-2 py-1 rounded-md"
            {...register("SubCategory")}
          >
            <option value="Electronic Pets">Electronic Pets</option>
            <option value="Dance Mats">Dance Mats</option>
            <option value="Robots">Robots</option>
          </select>

          <input
            className="border-2 w-full  px-2 py-1 rounded-md"
            defaultValue=""
            type="text"
            placeholder="Price"
            {...register("price")}
          />
        </div>

        {/* rating & quantity  */}
        <div className="w-full space-y-3 md:space-y-0 md:flex gap-4 mb-3">
          <input
            className="border-2 w-full px-2 py-1 rounded-md"
            defaultValue=""
            type="text"
            placeholder="Rating"
            {...register("rating")}
          />

          <input
            className="border-2 w-full  px-2 py-1 rounded-md"
            defaultValue=""
            type="text"
            placeholder="Available Quantity"
            {...register("quantity")}
          />
        </div>

        {/* include validation with required or other standard HTML validation rules */}
        <input
          className="border-2 w-full h-10 px-2 py-1 rounded-md"
          defaultValue=""
          type="text"
          placeholder="Toy Description"
          {...register("description", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input
          className="border-2 w-full h-10 px-2 py-1 rounded-md my-4 text-xl bg-sky-400 font-semibold hover:bg-sky-600 hover:text-gray-200 duration-300"
          type="submit"
        />
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddAToy;
