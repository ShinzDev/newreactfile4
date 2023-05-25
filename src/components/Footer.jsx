import React from 'react'
import './footer.css'



const Footer = () => {
  return (
    <div>
        <div className="foot_contain">
          <div className="paddbox">

          </div>
            <div className="foot">
            <div className="footerLinks">
            <li>
         
                Shinz store
            </li>
              <p className='text_footer'>
              Welcome to our financial tech company! We specialize in providing cutting-edge financial technology
              </p>
            </div>
            <div className="footerLinks links">
                <li className='link_names'>Links</li>
                <li>Home</li>
                <li>Features</li>
                <li>About</li>
                <li>Contact</li>
            </div>
            <div className="footerLinks">
            <li className='link_names'>Supports</li>
                <li>FACs</li>
                <li>Help Center</li>
                <li>Security</li>
                <li>Accomodation</li>
            </div>
            <div className="footerLinks">
                <li className='link_names'>Legal</li>
                <li>Privacy Policy</li>
                <li>Terms and Condition</li>
                <li>Security</li>
                <li>Accomodation</li>
            </div>
        </div>
            <div>
                 <hr />
           </div>

          <div className="copyright">
          <div>Shinz store</div>    <span>&copy;copyright ShinDev</span>
          </div>
      </div>
    </div>
  )
}

export default Footer
