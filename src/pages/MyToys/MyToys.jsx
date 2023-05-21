import { useLoaderData } from "react-router-dom";
import ToysCard from "../ToysCard/ToysCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Loading from "../../Components/Loading/Loading";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const cateID = useLoaderData();

  const FilterByMail = cateID.filter((toys) => user.email === toys.sellerEmail);
  
  const [myToysFilter, setMyToysFilter] = useState(FilterByMail); 
  const [loading, setLoading] = useState(true);
  const handleDeleteFilter = (id) => {
  
          const deleteFilter = myToysFilter.filter(data=> data._id !== id);
          setMyToysFilter(deleteFilter);
        
  } 

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
        <h1 className="mb-12  text-4xl font-extrabold leading-none tracking-tight text-gray-900  text-center md:text-5xl lg:text-6xl ">
          My Toy{" "}
        </h1>
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            {cateID &&
              myToysFilter.map((product) => (
                <ToysCard
                  key={product._id}
                  product={product}
                  handleDeleteFilter={handleDeleteFilter}
                ></ToysCard>
              ))}
          </div>
        </div>
      </body>
    </div>
  );
};

export default MyToys;
