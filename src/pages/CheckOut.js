import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumbs from '../components/BreadCrumbs'

const CheckOut = () => {
  return (
    <>
      <BreadCrumbs />

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <span className="icon-check_circle display-3 text-success"></span>
              <h2 className="display-3 text-black">Thank you!</h2>
              <p className="lead mb-5">You order was successfuly completed.</p>
              <p><Link to="/" className="btn btn-sm btn-primary">Back to home</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckOut