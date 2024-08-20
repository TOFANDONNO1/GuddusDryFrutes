import React from 'react'
import Footer from '../Footer'
import Navbar from '../../component/Navbar'

import logo from "../../Images/logo.jpg";
import "../../CSS/Policy/Privacy.css"
const Contact_Us = () => {
  return (
    <div>
   

        <div className="privacy_policy">
            <div className="logo_about_section">
            <img  src={logo} alt="Guddus Dryfruits" />
            <h5>Contact Us
</h5>
            </div>
        
     <p>If you have questions or concerns about your privacy, please contact us at:
</p>
<p>Guddus Dryfruits Grocery Delivery
</p>

<p>+91 0000000000</p>
<p>Guddus Dryfruitsonline@gmail.com</p>
<p>By using our services, you agree to the terms outlined in this Privacy Policy. </p>
<p>Last updated:09/11/2023</p>
        </div>
        
    </div>
  )
}

export default Contact_Us