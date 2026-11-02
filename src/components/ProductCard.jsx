import React from 'react'

// function ProductCard(props) { //directly getting props object
function ProductCard({ product }) {
    console.log("product", product);

    return (
        <div>
            <div>
                <img src={product.image} alt="" />
            </div>
            <div>
                {/* <h6>{product.sale}</h6> */}
                <h1>{product.title}</h1>
                <h4>{product.price}</h4>
                <span>
                    {product.description}
                </span>
            </div>
            <div>
                <button>Order now</button>
            </div>

        </div>
    )
}

export default ProductCard