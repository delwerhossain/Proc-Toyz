import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const HomeCategory = () => {
  const [cateData, setCateData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((response) => response.json())
      .then((data) => setCateData(data));
  }, []);
  // all sub categories
  const herosCategory = cateData.filter((data) => data.subCategory == "Heroes");
  const essentialsCategory = cateData.filter(
    (data) => data.subCategory == "Essentials"
  );
  const artCategory = cateData.filter((data) => data.subCategory == "Art toys");
  const artBookCategory = cateData.filter(
    (data) => data.subCategory == "Art & Books"
  );
  return (
    <div className="my-16">
      <h1 className="md:text-6xl text-4xl text-primary text-center my-8 font-bold ">
        Our Category
      </h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-items-center ">
        <div className="border p-4 rounded-xl mb-6 bg-[#FFF8EA] text-center text-3xl ">
          <h2 className="my-4 text-black">Art & Books</h2>
          <div className="grid gap-8">
            {herosCategory.slice(0, 2).map((card) => (
              <Card key={card._id} card={card}></Card>
            ))}
            
                      <button className="btn bg-yellow-950 text-slate-50 font-bold text-2xl"> See all </button>
          </div>
        </div>
        <div className="border p-4 rounded-xl mb-6 bg-[#FFF8EA] text-center text-3xl ">
          <h2 className="my-4 text-black">Art & Books</h2>
          <div className="grid gap-8">
            {artCategory.slice(0, 2).map((card) => (
              <Card key={card._id} card={card}></Card>
            ))}
            
                      <button className="btn bg-yellow-950 text-slate-50 font-bold text-2xl"> See all </button>
          </div>
        </div>
        <div className="border p-4 rounded-xl mb-6 bg-[#FFF8EA] text-center text-3xl ">
          <h2 className="my-4 text-black">Art & Books</h2>
          <div className="grid gap-8">
            {essentialsCategory.slice(0, 2).map((card) => (
              <Card key={card._id} card={card}></Card>
            ))}
            
                      <button className="btn bg-yellow-950 text-slate-50 font-bold text-2xl"> See all </button>
          </div>
        </div>
        <div className="border p-4 rounded-xl mb-6 bg-[#FFF8EA] text-center text-3xl ">
          <h2 className="my-4 text-black">Art & Books</h2>
          <div className="grid gap-8">
            {artBookCategory.slice(0, 2).map((card) => (
              <Card key={card._id} card={card}></Card>
            ))}
            
                      <button className="btn bg-yellow-950 text-slate-50 font-bold text-2xl"> See all </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
