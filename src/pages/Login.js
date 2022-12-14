import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs'

const Login = () => {
  return (
    <>
      <BreadCrumbs />
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form action="#" method="post">
                <div className="p-3 p-lg-5 border">
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label htmlFor="c_email" className="text-black">Email <span className="text-danger">*</span></label>
                      <input type="email" className="form-control" id="c_email" name="c_email" placeholder="" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label htmlFor="c_subject" className="text-black">Password <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" id="c_subject" name="c_subject" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-lg-6">
                      <button type="submit" className="btn btn-primary btn-lg btn-block" >Login</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6 ml-auto">
            <form action="#" method="post">
                <div className="p-3 p-lg-5 border">
                <div className="form-group row">
                    <div className="col-md-6">
                      <label htmlFor="c_fname" className="text-black">First Name <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" id="c_fname" name="c_fname" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="c_lname" className="text-black">Last Name <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" id="c_lname" name="c_lname" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label htmlFor="c_email" className="text-black">Email <span className="text-danger">*</span></label>
                      <input type="email" className="form-control" id="c_email" name="c_email" placeholder="" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label htmlFor="c_subject" className="text-black">Password <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" id="c_subject" name="c_subject" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-lg-6">
                      <button type="submit" className="btn btn-primary btn-lg btn-block" >Register</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login