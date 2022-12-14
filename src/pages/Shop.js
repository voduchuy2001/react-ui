import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs';
import FilterBy from '../components/FilterBy';
import LeftSideBar from '../components/LeftSideBar';
import Pagination from '../components/Pagination';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  return (
    <>
      <BreadCrumbs />

      <div className="site-section">
        <div className="container">

          <div className="row mb-5">
            <div className="col-md-9 order-2">

              <FilterBy />
              <div className="row mb-5">

                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

              </div>
              <Pagination />
            </div>

            <LeftSideBar />
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop