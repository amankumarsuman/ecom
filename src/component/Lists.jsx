import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function List() {
  return (
    <>
      <Link className="link" to="electronics">
        <li>Electronics</li>
      </Link>
      <Link className="link" to="furniture">
        <li>Furniture</li>
      </Link>
      <Link className="link" to="mensFashion">
        <li>Mens</li>
      </Link>
    </>
  );
}
export default List;
