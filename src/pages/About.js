import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs'

const About = () => {
  return (
    <>
      <BreadCrumbs />
      <div className="site-section border-bottom" data-aos="fade">
        <div className="container">
        <div className="site-section-heading pt-3 mb-4">
              <h2 className="text-black">Members</h2>
            </div>
          <div className="row">
            <div className="col-md-6 col-lg-3">

              <div className="block-38 text-center">
                <div className="block-38-img">
                  <div className="block-38-header">
                    <img src="images/person_1.jpg" alt='' className="mb-4" />
                    <h3 className="block-38-heading h4">Elizabeth Graham</h3>
                    <p className="block-38-subheading">CEO/Co-Founder</p>
                  </div>
                  <div className="block-38-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="block-38 text-center">
                <div className="block-38-img">
                  <div className="block-38-header">
                    <img src="images/person_2.jpg" alt='' className="mb-4" />
                    <h3 className="block-38-heading h4">Jennifer Greive</h3>
                    <p className="block-38-subheading">Co-Founder</p>
                  </div>
                  <div className="block-38-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="block-38 text-center">
                <div className="block-38-img">
                  <div className="block-38-header">
                    <img src="images/person_3.jpg" alt="" className="mb-4" />
                    <h3 className="block-38-heading h4">Patrick Marx</h3>
                    <p className="block-38-subheading">Marketing</p>
                  </div>
                  <div className="block-38-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="block-38 text-center">
                <div className="block-38-img">
                  <div className="block-38-header">
                    <img src="images/person_4.jpg" alt="" className="mb-4" />
                    <h3 className="block-38-heading h4">Mike Coolbert</h3>
                    <p className="block-38-subheading">Sales Manager</p>
                  </div>
                  <div className="block-38-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About