import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const ProductUpsert = () => {
  const { user } = useContext(AuthContext);

  //state

    const [value, setValue] = useState(0);
    //rating
     const handleInputChange = (event) => {
       const rating = event.target.value;
       if (rating >= 0 && rating <= 5) {
         setValue(rating);
       }
     };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    //   const vCategory = event.target.subCategory.value;
    const name = form.name.value;
    const pictureURL = form.pictureURL.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availableQuantity = form.availableQuantity.value;
    const description = form.description.value;

    const toys = {
      name,
      pictureURL,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      availableQuantity,
      description,
    };
    // sent data to backend
    fetch(`https://server-toy-marketplace.vercel.app/toys`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toys),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success",
            text: "toys Added Successfully",
            showDenyButton: true,
            showCancelButton: true,
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="md:w-6/12 w-10/12 mx-auto my-16">
      <h1 className="mb-12  text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl  text-center lg:text-6xl ">
        Toy Add{" "}
      </h1>
      <form onSubmit={handleSubmit}>
        {/* email */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            required
            defaultValue={user.email}
            type="text"
            name="sellerEmail"
            id="sellerEmail"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            disabled
          />
          <label
            htmlFor="sellerEmail"
            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        {/* seller name */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            required
            defaultValue={user.displayName}
            type="text"
            name="sellerName"
            id="sellerName"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            disabled
          />
          <label
            htmlFor="sellerName"
            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Seller Name
          </label>
        </div>
        {/* toy name */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            required
            type="text"
            name="name"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Toy Name
          </label>
        </div>
        {/* toy URL */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            required
            type="text"
            name="pictureURL"
            id="pictureURL"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="pictureURL"
            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Toy Url
          </label>
        </div>
        {/* Sub Category */}
        <div className="my-3 form-control w-full text-black max-w-xs">
          <label className="label">
            <span className="label-text text-black ml-2">Sub Category </span>
          </label>
          <select
            required
            id="subCategory"
            name="subCategory"
            className="select select-bordered"
          >
            <option disabled selected>
              Pick one
            </option>

            <option value={"Heroes"}>Heroes</option>
            <option value={"Art toys"}>Art toys</option>
            <option value={"Essentials"}>Essentials</option>
            <option value={"Art & Books"}>Art & Books</option>
          </select>
        </div>
        <div className="grid md:grid-cols-3 md:gap-6">
          {/* price */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              required
              type="number"
              name="price"
              id="price"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="price"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              price
            </label>
          </div>
          {/* rating */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              required
              type="number"
              name="rating"
              id="rating"
              min="1"
              max="5"
              value={value}
              onChange={handleInputChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="rating"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Rating
            </label>
          </div>
          {/* availableQuantity */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              required
              type="number"
              name="availableQuantity"
              id="availableQuantity"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="availableQuantity"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Available Quantity
            </label>
          </div>
        </div>
        {/* description */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            required
            type="textarea"
            name="description"
            id="description"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="description"
            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Toys Description
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center   "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductUpsert;
