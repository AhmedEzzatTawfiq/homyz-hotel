import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div className="f-wrapper">
        <div className="container footer">
          {/* left side */}
          <div className="flexColStart f-left">
            <img src="../../../logo2.png" alt="" width={120} />
            <span className="secondaryText">
              Our vision is to make all people <br />
              the best place to live for them
            </span>
          </div>
          {/* right side */}
          <div className="f-right flexColStart">
            <div className="text flexColStart">
            <span className='primaryText'>Information</span>
            <span className='secondaryText'>145 New York, FL 4571, USA</span>
            </div>

            <div className="f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>


          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Footer
