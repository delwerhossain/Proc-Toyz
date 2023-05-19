import React from 'react';

const Card = ({ card }) => {
    const { name, price, pictureURL, description } = card;
    return (
      <div className="">
        <div className="card w-[400px] h-[350px] bg-base-100 shadow-xl image-full">
          <figure>
            <img className="" src={pictureURL} alt={name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[#bdbab5] text-3xl underline">
              {name}
            </h2>
            <p className="mt-14 text-[#bdbab5]">
              {description.slice(0, 45)}...
            </p>
            <p className="absolute bottom-10 text-2xl py-1  w-1/3 inline-block text-slate-50 rounded-3xl bg-[#9e6a03]">
              {price}$
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">See More</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Card;