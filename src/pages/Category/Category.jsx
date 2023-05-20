import { useLoaderData } from "react-router-dom";
import ToysCard from "../ToysCard/ToysCard";
import { useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";

const Category = () => {
  const cateID = useLoaderData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 200);
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
