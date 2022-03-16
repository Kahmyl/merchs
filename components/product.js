import React from "react";
import useCart from "../hooks/useCart";

function Product({ product }) {
  const { addToCart } = useCart();

  return (
    <>
      <div className="product">
        <div className="product-img">
          <img src={product.image} alt="{props.id}" />
        </div>
        <div className="product-body">
          <p className="product-category">Category</p>
          <h3 className="product-name">
            <a href="#">{product.name}</a>
          </h3>
        </div>
        <div className="add-to-cart">
          <h4 className="product-price">${product.price}</h4>
          <button
            className="add-to-cart-btn"
            onClick={() => addToCart(product.id, "add", product)}
          >
            <i className="fa fa-shopping-cart"></i> Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
