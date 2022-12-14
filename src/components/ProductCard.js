import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = () => {
    return (
        <>
            <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                <div className="block-4 text-center border">
                    <figure className="block-4-image">
                        <Link to="/product-detail"><img src="images/cloth_2.jpg" alt="" className="img-fluid" /></Link>
                    </figure>
                    <div className="block-4-text p-4">
                        <h3><Link to="/product-detail">Polo Shirt</Link></h3>
                        <p className="mb-0">Finding perfect products</p>
                        <p className="text-primary font-weight-bold">$50</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard