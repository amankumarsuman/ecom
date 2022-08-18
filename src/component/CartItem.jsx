import React from "react";

function CartItem({ cartItem, removeFromCart }) {
  return (
    <>
      {cartItem.map((items, i) => (
        <div className="products" key={i}>
          <img src={items.image} width="300px" alt={items.title} />
          <h3>{items.title}</h3>
          <h1>{items.price}</h1>
          <button onClick={() => removeFromCart(items.title)}>
            Remove from cart
          </button>
        </div>
      ))}
    </>
  );
}
export default CartItem;
