const Carousel = () => {
  return (
    <div className="">
      <div className="carousel lg:h-[800px] md:h-[600px] h-[250px]  w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://artoyz.com/cdn/shop/files/bandeau-desk-MIST_2000x.jpg?v=1683186391"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className=" bg-gray-100/60 text-black hover:text-white  border-none  btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className=" bg-gray-100/60 text-black hover:text-white  border-none  btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://artoyz.com/cdn/shop/files/bandeau-desk-lil-helpers-pink_2000x.jpg?v=1683186490"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className=" bg-gray-100/60 text-black hover:text-white  border-none  btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className=" bg-gray-100/60 text-black hover:text-white  border-none  btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://artoyz.com/cdn/shop/files/bandeau-desk-serie45_2000x.jpg?v=1679739149"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className=" bg-gray-100/60 text-black hover:text-white  border-none  btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className=" bg-gray-100/60 text-black hover:text-white  border-none  btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://artoyz.com/cdn/shop/files/bandeau-desk-mightyjaxx_2000x.jpg?v=1680525114"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className=" bg-gray-100/60 text-black hover:text-white  border-none  btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className=" bg-gray-100/60 text-black hover:text-white  border-none  btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img
            src="https://artoyz.com/cdn/shop/files/bandeau-desk-dunny3_2000x.jpg?v=1671553825"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className=" bg-gray-100/60 text-black hover:text-white  border-none  btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className=" bg-gray-100/60 text-black hover:text-white  border-none  btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
