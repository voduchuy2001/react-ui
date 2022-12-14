import React from 'react'
import { Link } from 'react-router-dom'

const ProductDetail = () => {
  return (
    <>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="images/cloth_1.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2 className="text-black">Tank Top T-Shirt</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, vitae, explicabo? Incidunt facere, natus soluta dolores iusto! Molestiae expedita veritatis nesciunt doloremque sint asperiores fuga voluptas, distinctio, aperiam, ratione dolore.</p>
              <p className="mb-4">Ex numquam veritatis debitis minima quo error quam eos dolorum quidem perferendis. Quos repellat dignissimos minus, eveniet nam voluptatibus molestias omnis reiciendis perspiciatis illum hic magni iste, velit aperiam quis.</p>
              <p><strong className="text-primary h4">$50.00</strong></p>
             
              <div className="mb-5">
              <div className="input-group mb-3" style={{maxWidth: 120}}>
              <div className="input-group-prepend">
                <button className="btn btn-outline-primary js-btn-minus" type="button">-</button>
              </div>
              <input type="text" className="form-control text-center" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
              <div className="input-group-append">
                <button className="btn btn-outline-primary js-btn-plus" type="button">+</button>
              </div>
            </div>

            </div>
              <p><Link to="/cart" className="buy-now btn btn-sm btn-primary">Add To Cart</Link></p>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail