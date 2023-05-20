import React from "react";
import Carousel from "./Carousel";
import HomeCategory from "./HomeCategory";
import ProductView from "./ProductView";
import HeaderSection from "./HeaderSection";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <ProductView></ProductView>
      <HomeCategory></HomeCategory>
      <HeaderSection></HeaderSection>
    </div>
  );
};

export default Home;
