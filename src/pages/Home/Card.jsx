import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { _id, name, price, pictureURL, description } = card;
  return (
    <div className=" my-4">
      <div className="card md:w-[400px] w-[340px] mx-auto  md:h-[350px] bg-base-100 shadow-xl image-full">
        <figure>
          <img className="" src={pictureURL} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#bdbab5] text-3xl underline">
            {name}
          </h2>
          <p className="mt-14 text-[#bdbab5]">{description.slice(0, 45)}...</p>
          <p className="absolute bottom-10 text-2xl text-center py-1  w-1/3 inline-block text-slate-50 rounded-3xl bg-[#9e6a03]">
            {price}$
          </p>
          <div className="card-actions justify-end">
            <Link to={`/toy/${_id}`} className="btn btn-primary">
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
