import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Loader = () => {
  return (
    <>
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </>
  );
};

export default Loader;
