import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const HomeCategory = () => {
  const [cateData, setCateData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((response) => response.json())
      .then((data) => setCateData(data));
  }, []);
  // all sub categories
  const herosCategory = cateData.filter((data) => data.subCategory == "Heroes");
  const artCategory = cateData.filter((data) => data.subCategory == "Art toys");
  const essentialsCategory = cateData.filter(
    (data) => data.subCategory == "Essentials"
  );
  const artBookCategory = cateData.filter(
    (data) => data.subCategory == "Art & Books"
  );
  return (
    <div className="my-16">
      <h1 className="md:text-6xl text-4xl text-primary text-center my-8 font-bold underline">
        Our Category
      </h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-items-center ">
        <div className="border p-4 rounded-xl mb-6 bg-[#FFF8EA] text-center text-3xl ">
          <h2 className="my-4 text-yellow-950 border rounded-3xl w-1/2 border-yellow-700 bg-yellow-50 font-bold">Heroes Toys</h2>
          <div className="grid gap-8">
            {herosCategory.slice(0, 2).map((card) => (
              <Card key={card._id} card={card}></Card>
            ))}

            <Link to={`category/1`} className="btn bg-yellow-950 text-slate-50 font-bold text-2xl">
              {" "}
              See all{" "}
            </Link>
          </div>
        </div>
        <div className="border p-4 rounded-xl mb-6 bg-[#FFF8EA] text-center text-3xl ">
          <h2 className="my-4 text-yellow-950 border rounded-3xl w-1/2 border-yellow-700 bg-yellow-50 font-bold">Art & Books</h2>
          <div className="grid gap-8">
            {artCategory.slice(0, 2).map((card) => (
              <Card key={card._id} card={card}></Card>
            ))}

            <Link to={`category/2`} className="btn bg-yellow-950 text-slate-50 font-bold text-2xl">
              {" "}
              See all{" "}
            </Link>
          </div>
        </div>
        <div className="border p-4 rounded-xl mb-6 bg-[#FFF8EA] text-center text-3xl ">
          <h2 className="my-4 text-yellow-950 border rounded-3xl w-1/2 border-yellow-700 bg-yellow-50 font-bold">Art & Books</h2>
          <div className="grid gap-8">
            {essentialsCategory.slice(0, 2).map((card) => (
              <Card key={card._id} card={card}></Card>
            ))}

            <Link to={`category/3`} className="btn bg-yellow-950 text-slate-50 font-bold text-2xl">
              {" "}
              See all{" "}
            </Link>
          </div>
        </div>
        <div className="border p-4 rounded-xl mb-6 bg-[#FFF8EA] text-center text-3xl ">
          <h2 className="my-4 text-yellow-950 border rounded-3xl w-1/2 border-yellow-700 bg-yellow-50 font-bold">Art & Books</h2>
          <div className="grid gap-8">
            {artBookCategory.slice(0, 2).map((card) => (
              <Card key={card._id} card={card}></Card>
            ))}

            <Link to={`category/4`} className="btn bg-yellow-950 text-slate-50 font-bold text-2xl">
              {" "}
              See all{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
