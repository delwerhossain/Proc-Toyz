import React from "react";

const Gallery = () => {
  return (
    <div className="">
      <h1 className="mb-12  text-4xl font-extrabold leading-none tracking-tight text-gray-900 text-primary md:text-5xl lg:text-6xl text-center ">
        Gallery Toys{" "}
      </h1>
      <section className="overflow-hidden text-gray-700">
        <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://artoyz.com/cdn/shop/files/bandeau-desk-dunny_d52678eb-5a17-4010-87ac-00a8809213f2_2000x.jpg?v=1680524895"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://artoyz.com/cdn/shop/files/lookbook-desk-disney_1000x.progressive.jpg?v=1679739619"
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://artoyz.com/cdn/shop/files/lookbook-desk-WOOD_1000x.progressive.jpg?v=1680525230"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://artoyz.com/cdn/shop/files/bandeau-desk-udfolivetom_2000x.jpg?v=1679739322"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://artoyz.com/cdn/shop/files/bandeau-desk-mightyjaxx_2000x.jpg?v=1680525114"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://artoyz.com/cdn/shop/files/lookbook-desk-disney_1000x.progressive.jpg?v=1679739619"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
