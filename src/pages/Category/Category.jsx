import React from "react";
import { useLoaderData } from "react-router-dom";
import CateCard from "./CateCard";

const Category = () => {
  const cateID = useLoaderData();


  return (
    <div>
      <h1 className="text-6xl text-red-600">this is categories</h1>
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
