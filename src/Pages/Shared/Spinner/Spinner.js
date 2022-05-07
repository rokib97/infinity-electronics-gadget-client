import React from "react";

const Spinner = () => {
  return (
    <div
      style={{ height: "400px" }}
      className="w-100 d-flex justify-content-center align-items-center"
    >
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Spinner;
