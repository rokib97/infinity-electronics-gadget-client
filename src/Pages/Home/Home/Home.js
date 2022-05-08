import React from "react";
import Banner from "../Banner/Banner";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Products from "../Products/Products";

const Home = () => {
  return (
    <>
      <Banner />
      <Products />
      <FeaturedProducts />
    </>
  );
};

export default Home;
