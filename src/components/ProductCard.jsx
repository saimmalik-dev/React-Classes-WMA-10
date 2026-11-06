import React from 'react'
import Button from './Button';

// function ProductCard(props) { //directly getting props object
function ProductCard({ product }) { // product -> prop


    console.log("product", product);
    const addToCart = () => {
        console.log("product");

    }
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
                <Button onClick={addToCart} btnText="Add to Cart" />
                {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
            </div>

        </div>
    )
}

export default ProductCard