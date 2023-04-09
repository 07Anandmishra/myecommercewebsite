import React from 'react'
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import HomeIcon from '@mui/icons-material/Home';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div>



<footer className="text-center text-lg-start bg-light text-muted">

  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
 


    <div>
      <a to="" className="me-4 text-reset">
        <FacebookIcon />
      </a>
     
      <a to="" className="me-4 text-reset">
      <InstagramIcon />
      </a>
      <a to="" className="me-4 text-reset">
        <LinkedInIcon />
      </a>
      <a to="" className="me-4 text-reset">
      <TwitterIcon />
      </a>
    </div>
  
  </section>


 
  <section className="">
    <div className="container text-center text-md-start mt-5">
   
      <div className="row mt-3">
    
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
   
          <h6 className="text-uppercase fw-bold mb-4">
            <img src={'../image/logo.png' } alt="logo" style={{width:'50px'}}/> Company name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" style={{cursor:'pointer'}}>
  
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a to="#!" className="text-reset">Angular</a>
          </p>
          <p>
            <a to="#!" className="text-reset">React</a>
          </p>
          <p>
            <a to="#!" className="text-reset">Vue</a>
          </p>
          <p>
            <a to="#!" className="text-reset">Laravel</a>
          </p>
        </div>
       
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
     
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a to="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a to="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a to="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a to="#!" className="text-reset">Help</a>
          </p>
        </div>
    
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
      
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><HomeIcon className='me-3'/> New York, NY 10012, US</p>
          <p>
          <MarkEmailReadIcon className='me-3'/>
            info@example.com
          </p>
          <p><PhoneForwardedIcon className='me-3'/> + 01 234 567 88</p>
          <p><PhoneForwardedIcon className='me-3'/> + 01 234 567 89</p>
        </div>
     
      </div>
     
    </div>
  </section>
 


  <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2023 Copyright:
    <a className="text-reset fw-bold" to="">Design & Developed by Anand Mishra</a>
  </div>

</footer>


    </div>
  )
}

export default Footer