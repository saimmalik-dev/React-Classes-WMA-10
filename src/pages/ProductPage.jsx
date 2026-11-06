import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'

function ProductPage() {
    const products = [
        {
            id: 1,
            title: "Product 1",
            category: "Category 1",
            price: 100,
            description: "This is product 1",
            image: "https://via.placeholder.com/150",
            sale: "10% OFF"
        },
        {
            id: 2,
            title: "Product 2",
            category: "Category 2",
            price: 200,
            description: "This is product 2",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 3,
            title: "Product 3",
            category: "Category 3",
            price: 300,
            description: "This is product 3",
            image: "https://via.placeholder.com/150"
        },
    ]


    const [loading, setloading] = useState(true)

    setTimeout(() => {
        setloading(false)
    }, 5000);

    return (
        <div>
            <h1>
                This is Products Page
            </h1>
            {/* here is the jsx */}
            {
                // here i can write js
                loading ? "Loading...." : // conditional rendering
                    products.map((item, index) => {
                        return (
                            <ProductCard product={item}  /> // product -> prop name, item -> prop value
                        )
                    })
            }



        </div>
    )
}

export default ProductPage