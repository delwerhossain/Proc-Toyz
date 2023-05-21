import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import HomeCategory from "./HomeCategory";
import ProductView from "./ProductView";
import HeaderSection from "./HeaderSection";
import Loading from "../../Components/Loading/Loading";
import Gallery from "./Gallery";
import AOS from "aos";
import "aos/dist/aos.css"; 
import useTitle from "../../hook/useTitle";
const Home = () => {
  useTitle('home')
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init();
  }, []);
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
      <div data-aos="flip-left">
        <Carousel></Carousel>
      </div>
      <div data-aos="flip-right">
        <ProductView></ProductView>
      </div>
      <div data-aos="flip-down">
        <HomeCategory></HomeCategory>
      </div>
      <div >
        <HeaderSection></HeaderSection>
      </div>
      <div>
        <Gallery></Gallery>
      </div>
    </div>
  );
};

export default Home;
