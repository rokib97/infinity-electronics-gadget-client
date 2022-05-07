import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  return (
    <div>
      <h3>Prodduct Details: {productId}</h3>
    </div>
  );
};

export default ProductDetails;