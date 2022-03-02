import React from 'react' 
import '/styles/product.css'

function product() {
    return (
        <div class="card">
            <img src="{{ image.url }}">
            <h5>{{ title }}</h5>
            <button class="toggle-cart">Add to cart</button>
        </div>
    )
}

export default product