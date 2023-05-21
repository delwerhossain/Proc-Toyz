import {  useParams } from "react-router-dom";
import ToysCard from "../ToysCard/ToysCard";
import { useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";
import useTitle from "../../hook/useTitle";

const Category = () => {
    useTitle("category");
  // const cateID = useLoaderData();
  const [cateID, setCateID] = useState([]);
  const idParams = useParams();
  useEffect(() => {
if (idParams.id) {
  fetch(`https://server-toy-marketplace.vercel.app/category/${idParams.id}`)
    .then((response) => response.json())
    .then((data) => setCateID(data));
} else {
   fetch("https://server-toy-marketplace.vercel.app/toys")
     .then((response) => response.json())
     .then((data) => setCateID(data));
}
     
  }, []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 400);
    }
  }, []);

  return loading ? (
    <div className="grid justify-center items-center">
      <Loading></Loading>
    </div>
  ) : (
    <div>
      {!(cateID.length > 15) && (
        <h1 className="md:text-6xl text-4xl text-primary text-center my-8 font-bold underline">
          Category -{" "}
          {cateID && cateID.slice(0, 1).map((product) => product.subCategory)}
        </h1>
      )}
      <h2 className="sr-only">Products</h2>

      <body className="antialiased bg-gray-200 text-gray-900 font-sans p-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            {cateID &&
              cateID.map((product) => (
                <ToysCard key={product._id} product={product}></ToysCard>
              ))}
          </div>
        </div>
      </body>
    </div>
  );
};

export default Category;
