import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./style.css";

import { Link } from "react-router-dom";
function Navbar({ cart }) {
  return (
    <div className="navbar">
      <Link className="link" to="categories">
        <div>Categories</div>
      </Link>
      <div>
        <span>
          <Link className="link" to="/cartItem">
            <ShoppingCartIcon />
          </Link>
        </span>
        <span>{cart}</span>
      </div>
    </div>
  );
}
export default Navbar;
