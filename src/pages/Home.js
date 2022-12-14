import React from 'react'

const Home = () => {
  return (
    <>
      <div className="site-section site-blocks-2">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos="fade" data-aos-delay="">
              <a className="block-2-item" href="!!#">
                <figure className="image">
                  <img src="images/women.jpg" alt="" className="img-fluid" />
                </figure>
                <div className="text">
                  <span className="text-uppercase">Collections</span>
                  <h3>Women</h3>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
              <a className="block-2-item" href="!!#">
                <figure className="image">
                  <img src="images/children.jpg" alt="" className="img-fluid" />
                </figure>
                <div className="text">
                  <span className="text-uppercase">Collections</span>
                  <h3>Children</h3>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200">
              <a className="block-2-item" href="!!#">
                <figure className="image">
                  <img src="images/men.jpg" alt="" className="img-fluid" />
                </figure>
                <div className="text">
                  <span className="text-uppercase">Collections</span>
                  <h3>Men</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section site-section-sm site-blocks-1">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="">
              <div className="icon mr-4 align-self-start">
                <span className="icon-truck"></span>
              </div>
              <div className="text">
                <h2 className="text-uppercase">Free Shipping</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="100">
              <div className="icon mr-4 align-self-start">
                <span className="icon-refresh2"></span>
              </div>
              <div className="text">
                <h2 className="text-uppercase">Free Returns</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="200">
              <div className="icon mr-4 align-self-start">
                <span className="icon-help"></span>
              </div>
              <div className="text">
                <h2 className="text-uppercase">Customer Support</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home