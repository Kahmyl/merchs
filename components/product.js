import React from 'react';

function Product() {
    return (
        <>
        <div className="product">
            <div className="product-img">
                <img src="../img/image1.webp" alt="log" />
            </div>
            <div className="product-body">
                <p className="product-category">Category</p>
                <h3 className="product-name"><a href="#">Product name goes here</a></h3>
            </div>
            <div className="add-to-cart">
                <h4 className="product-price">$980.00</h4>
                <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> Add to cart</button>
            </div>
        </div>
        </>
    )
}

export default Product