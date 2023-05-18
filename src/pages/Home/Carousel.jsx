const Carousel = () => {
    const bannerText = (
      <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#09090a] to-[rgba(21, 21, 21, 0)]">
        <div className="text-white  space-y-7 pl-24 md:w-2/3 w-10/12">
          <h2 className="lg:text-6xl md:text-5xl text-2xl font-bold">
            Designer toys expert since 2003
          </h2>
          <p>
            Come and discover the Artoyz creations in our shop!All the latest
            collections of figurines and designer toys are available on our
            site.
          </p>
          <div className="hidden md:block">
            <button className="btn  btn-primary mr-5 mb-2">
              All Toys Zone
            </button>
            <button className="btn btn-outline border-white text-white font-bold">
              My Toys Zone
            </button>
          </div>
        </div>
      </div>
    );
  return (
    <div className="">
      <div className="carousel lg:h-[800px] md:h-[650px]  w-full h-[350px] sm:h-[450px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://artoyz.com/cdn/shop/files/bandeau-desk-MIST_2000x.jpg?v=1683186391"
            className="w-full"
          />
          {/* details part */}
          {bannerText}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide4"
              className=" bg-gray-100/60 text-black hover:text-white  border-none  btn btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className=" bg-gray-100/60 text-black hover:text-white  border-none  btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://artoyz.com/cdn/shop/files/bandeau-desk-lil-helpers-pink_2000x.jpg?v=1683186490"
            className="w-full"
          />
           {/* details part */}
          {bannerText}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className=" bg-gray-100/60 text-black hover:text-white  border-none  btn btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className=" bg-gray-100/60 text-black hover:text-white  border-none  btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://artoyz.com/cdn/shop/files/bandeau-desk-serie45_2000x.jpg?v=1679739149"
            className="w-full"
          />
           {/* details part */}
          {bannerText}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className=" bg-gray-100/60 text-black hover:text-white  border-none  btn btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className=" bg-gray-100/60 text-black hover:text-white  border-none  btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://artoyz.com/cdn/shop/files/bandeau-desk-mightyjaxx_2000x.jpg?v=1680525114"
            className="w-full"
          />
           {/* details part */}
          {bannerText}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className=" bg-gray-100/60 text-black hover:text-white  border-none  btn btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide5"
              className=" bg-gray-100/60 text-black hover:text-white  border-none  btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img
            src="https://artoyz.com/cdn/shop/files/bandeau-desk-dunny3_2000x.jpg?v=1671553825"
            className="w-full"
          />
           {/* details part */}
          {bannerText}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide4"
              className=" bg-gray-100/60 text-black hover:text-white  border-none  btn btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className=" bg-gray-100/60 text-black hover:text-white  border-none  btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
