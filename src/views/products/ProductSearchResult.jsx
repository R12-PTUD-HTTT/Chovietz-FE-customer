import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

ProductSearchResult.propTypes = {};

function ProductSearchResult(props) {
  const { key } = useParams();
  console.log(key);
  return <div>{key}</div>;
}

export default ProductSearchResult;
