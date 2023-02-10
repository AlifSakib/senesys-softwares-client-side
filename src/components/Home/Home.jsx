import React from "react";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
const Home = () => {
  return (
    <div>
      <Header />
      <FeaturedProducts />
      <Gallery />
    </div>
  );
};

export default Home;
