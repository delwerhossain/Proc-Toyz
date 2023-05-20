import { useEffect, useState } from "react";

const ProductView = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    try {
      fetch(`http://localhost:5000/toys`)
        .then((res) => res.json())
        .then((data) => setToys(data.slice(18, 21)));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {toys.map((toys) => (
              <div key={toys.name} className="group relative">
                <div className="relative  w-full overflow-hidden rounded-lg bg-white  sm:aspect-w-2  lg:aspect-w-1 group-hover:opacity-75 ">
                  <img
                    src={toys.pictureURL}
                    alt={toys.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={toys.href}>
                    <span className="absolute inset-0" />
                    {toys.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {toys.description.slice(0, 60)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
