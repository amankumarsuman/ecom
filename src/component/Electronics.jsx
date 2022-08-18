import React from "react";
import data from "./data.json";
import "./style.css";
function Electronics({ handleAdd }) {
  const mobile = data.electronics;

  return (
    <>
      {mobile.map((items, i) => (
        <div className="products" key={i}>
          <img src={items.image} width="300px" alt={items.title} />
          <h3>{items.title}</h3>
          <h1>{items.Price}</h1>
          <button
            onClick={() =>
              handleAdd({
                title: items.title,
                image: items.image,
                price: items.Price,
              })
            }
          >
            Add to cart
          </button>
          <button>Remove from Cart</button>
        </div>
      ))}
    </>
  );
}
export default Electronics;
