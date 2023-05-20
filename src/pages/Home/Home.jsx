import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import HomeCategory from "./HomeCategory";
import ProductView from "./ProductView";
import HeaderSection from "./HeaderSection";
import Loading from "../../Components/Loading/Loading";

const Home = () => {
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
      <Carousel></Carousel>
      <ProductView></ProductView>
      <HomeCategory></HomeCategory>
      <HeaderSection></HeaderSection>
    </div>
  );
};

export default Home;
