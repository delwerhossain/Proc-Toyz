import { useEffect, useState } from "react";
import ToyRow from "./ToyRow";
import useTitle from "../../hook/useTitle";


const ToyTables = () => {
    useTitle("all Toys");
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://server-toy-marketplace.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data.slice(0,20));
      });
  }, []);

  const handleSearch = () => {
    fetch(`https://server-toy-marketplace.vercel.app/toySearch/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };

  ////////// sort ////////

   useEffect(() => {
     fetchToys();
   }, []);

   const fetchToys = async () => {
     try {
       const response = await fetch(
         "https://server-toy-marketplace.vercel.app/toys/all"
       ); // Modify the URL as per your backend API endpoint
       const data = await response.json();
       setToys(data);
     } catch (error) {
       console.error(error);
     }
   };

   const sortToys = async (sortOrder) => {
     try {
       const response = await fetch(
         `https://server-toy-marketplace.vercel.app/toys/all?sortOrder=${sortOrder}`
       ); // Modify the URL as per your backend API endpoint
       const data = await response.json();
       setToys(data);
     } catch (error) {
       console.error(error);
     }
   };

  return (
    <div className="overflow-x-auto mt-10">
      <div className="form-control my-8">
        <div className="input-group flex justify-center">
          <input
            type="text"
            placeholder="Search…"
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleSearch}
            className="input text-primary font-semibold input-bordered"
          />
          <button onClick={handleSearch} className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        <button className="btn hidden" onClick={() => sortToys("ascending")}>Sort Ascending</button>
        <button className="btn hidden" onClick={() => sortToys("descending")}>Sort Descending</button>
      </div>
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy, index) => (
            <ToyRow key={toy._id} toy={toy} index={index}></ToyRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToyTables;