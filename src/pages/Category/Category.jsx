import React from "react";
import { useLoaderData } from "react-router-dom";
import CateCard from "./CateCard";

const Category = () => {
  const cateID = useLoaderData();

console.log(cateID);
  return (
    <div>
      {!(cateID.length > 15) && (
        <h1 className="md:text-6xl text-4xl text-primary text-center my-8 font-bold underline">
          Category - {cateID.slice(0,1).map((product) => product.subCategory)}
        </h1>
      )}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3  xl:gap-x-8">
            {cateID.map((product) => (
              <CateCard key={product._id} product={product}></CateCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
