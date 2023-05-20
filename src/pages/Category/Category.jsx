import { useLoaderData } from "react-router-dom";
import SingleToys from "../SingleToys/SingleToys";

const Category = () => {
  const cateID = useLoaderData();
  return (
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
                <SingleToys key={product._id} product={product}></SingleToys>
              ))}
          </div>
        </div>
      </body>
    </div>
  );
};

export default Category;
