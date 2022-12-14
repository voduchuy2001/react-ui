import React from 'react'

const LeftSideBar = () => {
  return (
    <>
      <div className="col-md-3 order-1 mb-5 mb-md-0">
        <div className="border p-4 rounded mb-4">
          <h3 className="mb-3 h6 text-uppercase text-black d-block">Categories</h3>
          <ul className="list-unstyled mb-0">
            <li className="mb-1"><a href="!#" className="d-flex"><span>Men</span> <span className="text-black ml-auto">(2,220)</span></a></li>
            <li className="mb-1"><a href="!#" className="d-flex"><span>Women</span> <span className="text-black ml-auto">(2,550)</span></a></li>
            <li className="mb-1"><a href="!#" className="d-flex"><span>Children</span> <span className="text-black ml-auto">(2,124)</span></a></li>
          </ul>
        </div>

        <div className="border p-4 rounded mb-4">
          <div className="mb-4">
            <h3 className="mb-3 h6 text-uppercase text-black d-block">Filter by Price</h3>
            <div id="slider-range" className="border-primary"></div>
            <input type="text" name="text" id="amount" className="form-control border-0 pl-0 bg-white" disabled="" />
          </div>

          <div className="mb-4">
            <h3 className="mb-3 h6 text-uppercase text-black d-block">Size</h3>
            <label htmlFor="s_sm" className="d-flex">
              <input type="checkbox" id="s_sm" className="mr-2 mt-1" /> <span className="text-black">Small (2,319)</span>
            </label>
            <label htmlFor="s_md" className="d-flex">
              <input type="checkbox" id="s_md" className="mr-2 mt-1" /> <span className="text-black">Medium (1,282)</span>
            </label>
            <label htmlFor="s_lg" className="d-flex">
              <input type="checkbox" id="s_lg" className="mr-2 mt-1" /> <span className="text-black">Large (1,392)</span>
            </label>
          </div>

          <div className="mb-4">
            <h3 className="mb-3 h6 text-uppercase text-black d-block">Color</h3>
            <a href="!#" className="d-flex color-item align-items-center" >
              <span className="bg-danger color d-inline-block rounded-circle mr-2"></span> <span className="text-black">Red (2,429)</span>
            </a>
            <a href="!#" className="d-flex color-item align-items-center" >
              <span className="bg-success color d-inline-block rounded-circle mr-2"></span> <span className="text-black">Green (2,298)</span>
            </a>
            <a href="!#" className="d-flex color-item align-items-center" >
              <span className="bg-info color d-inline-block rounded-circle mr-2"></span> <span className="text-black">Blue (1,075)</span>
            </a>
            <a href="!#" className="d-flex color-item align-items-center" >
              <span className="bg-primary color d-inline-block rounded-circle mr-2"></span> <span className="text-black">Purple (1,075)</span>
            </a>
          </div>

        </div>
      </div>
    </>
  )
}

export default LeftSideBar