import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import "./Footer.css";
const Footer = () => {
  return (

          <MDBFooter  color="black" className="font-small pt-4 mt-4 Fixed-bottom">
      <MDBContainer fluid className="text-center text-md-left ">
        <MDBRow>
          <MDBCol md="4">
            <h3 className="title">TURKISH FOOD</h3>
            <p>
              Welcome to OUR RESTAURANT
            </p>
            
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title">OPENING HOURS</h5>
            <ul>
               <li className="list-unstyled">
                Monday -    -------------- 08h - 16h
              </li>
              <li className="list-unstyled">
                Tuesday     -------------- 08h - 16h
              </li>
              <li className="list-unstyled">
                Wednesday   -------------- 08h - 16h
              </li>
              <li className="list-unstyled">
                Thursday    -------------- 08h - 16h
              </li>
                <li className="list-unstyled">
                Friday      -------------- 08h - 16h
              </li>
              <li className="list-unstyled">
                Saturday    -------------- 08h - 17h
              </li>
              <li className="list-unstyled">
                Sunday      -------------- Closed
              </li>         
           
            </ul>
          </MDBCol>       
          <MDBCol md="4">
            <h5 className="title">CONTACT US</h5>
            <ul>
               <li className="list-unstyled">
                <a href="#!">Phone : (216) 71223335</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Mail: turkishheart145@gmail.com</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Menu</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.gomycode.io"> Rahma BOUKERI </a>
        </MDBContainer>
      </div>
    </MDBFooter>

    
      
   
  );
};

export default Footer;
