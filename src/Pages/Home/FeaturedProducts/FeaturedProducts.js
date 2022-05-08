import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import FeatureProduct from "../FeaturedProduct/FeatureProduct";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("fakedb.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  if (products.length === 0) {
    return <Loading />;
  }
  return (
    <div className="container mt-5">
      <h2 className="fw-bold text-center my-5">Featured Products</h2>
      <div className="row g-4">
        {products.map((product) => (
          <FeatureProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
