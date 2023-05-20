import { useLoaderData } from "react-router-dom";
import ToysCard from "../ToysCard/ToysCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Loading from "../../Components/Loading/Loading";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const cateID = useLoaderData();

  const myToysFilter = cateID.filter((toys) => user.email === toys.sellerEmail);
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
      <body className="antialiased bg-gray-200 text-gray-900 font-sans p-6">
        <h2 className="text-4xl font-bold text-center my-6 text-primary ">
          My Toyz
        </h2>
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            {cateID &&
              myToysFilter.map((product) => (
                <ToysCard key={product._id} product={product}></ToysCard>
              ))}
          </div>
        </div>
      </body>
    </div>
  );
};

export default MyToys;
