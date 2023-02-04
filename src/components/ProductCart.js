import React from 'react'

const ProductCart = () => {
  return (
    <>
      <tr>
        <td className="product-thumbnail">
          <img src="images/cloth_1.jpg" alt="" className="img-fluid" />
        </td>
        <td className="product-name">
          <h2 className="h5 text-black">Top Up T-Shirt</h2>
        </td>
        <td>$49.00</td>
        <td>
          <div className="input-group mb-3" style={{ maxWidth: 120 }}>
            <input type="text" className="form-control text-center" />
          </div>

        </td>
        <td>$49.00</td>
        <td><a href="!#" className="btn btn-primary btn-sm">X</a></td>
      </tr>
    </>
  )
}

export default ProductCart