import React from "react";
import Banner from "../Banner/Banner";
import Benefits from "../Benefits/Benefits";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Products from "../Products/Products";

const Home = () => {
  return (
    <>
      <Banner />
      <Products />
      <FeaturedProducts />
      <Benefits />
    </>
  );
};

export default Home;
