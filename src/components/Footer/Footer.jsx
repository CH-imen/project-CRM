import React from 'react';
import './footer.css'

import{Link} from "react-router-dom";
//import logo from '../../Images/logo.svg';
function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className='"footer'>
      <div className="container">
        <div className="row">
          <div className="col-lg-4  mb-4 md-3">
            <div className='logo'>
                      <h5>CRM & Marketing</h5>
            </div>
            <p className="footer__text mt-4">
                    Lorem ipsum dolor sit, amet consectetur
                     adipisicing elit. Optio assumenda at in consectetur dolor.
                   </p>
          </div>
          <div className="col-lg-3 mb-4 md-3">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">
                  Top Categories
              </h4>
              <div className="link-footer">

                  <Link to='#'>Clothing </Link>
                  </div>
                  <div className="link-footer">
                  <Link to='#'>Sofa </Link>
                  </div>
                  <div className="link-footer">
                  <Link to='#'>Appartments </Link>
                  </div>
                  <div className="link-footer">
                  <Link to='#'>vehicles  </Link>
                  </div>
              </div>
          </div>
          <div className="col-lg-2 mb-4 md-3">
          <div className="footer__quick-links">
              <h4 className="quick__links-title">
                  Usefull Links
              </h4>
              <div className="link-footer">

                  <Link to='/products'>Products </Link>
                  </div>
                  <div className="link-footer">
                  <Link to='/cart'>Cart</Link>
                  </div>
                  <div className="link-footer">
                  <Link to='/aboutus'>About Us </Link>
                  </div>
                  <div className="link-footer">
                  <Link to='/signinus'>Sign in us </Link>
                  </div>
                  <div className="link-footer">
                  <Link to='/#'>Privacy policy </Link>
                  </div>
              </div>
          </div>
          <div className="col-lg-3 mb-4 md-3">
          <div className="footer__quick-links">
              <h4 className="quick__links-title">
                 Contact
              </h4>
              <div className='footer__contact'>
              <div className="link-footer d-flex align-items-center gap-2">
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>123 Zindabazar, Sylhet, Bangladesh</p>
                  </div>
                  <div className="link-footer d-flex align-items-center gap-2">
                  <span><i class="ri-phone-line"></i></span>
                  <p>+088123456789</p>
                  </div>
                  <div className="link-footer d-flex align-items-center gap-2">
                  <span><i class="ri-mail-line"></i></span>
                  <p>example123@gmail.com</p>
                  </div>
                  </div>
          </div></div>
          <div className="col-lg-12">
            <p className="footer__copyright">
              Copyright {year} developped by Imen CHARFI. All rights reserved.
            </p>
          </div>
          </div>
          
        </div>
    </footer>
  )
}

export default Footer