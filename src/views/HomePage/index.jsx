import React, { useEffect } from "react";
import { getCustomer } from "../../api/product";

function HomePage({}) {
  useEffect(() => {
    try {
      const res = getCustomer();
      console.log(res);
    } catch (error) {
      console.log("error");
    }
  }, []);
  return (
    <>
      <h2>HomePage</h2>
    </>
  );
}

export default HomePage;
