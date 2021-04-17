import React from 'react'
import { Link } from 'react-router-dom'
import './Admindashbored.css'

const Admindashbored = () => {

    return (
        <div style={{marginTop:"5%"}}>
        

            
            <>

  <div className="container mt-4">
    <div className="row">
      <div className="col-lg-4 my-lg-0 my-md-1">
        <div id="sidebar" className="bg-purple">
          <div className="h4 text-white">Account</div>
          <ul>
    
            <li> <a href="#" className="text-decoration-none d-flex align-items-start">
                <div className="fas fa-box-open pt-2 me-3" />
                <div className="d-flex flex-column">
                  <div className="link">My Orders</div>
                  <div className="link-desc">View &amp; Manage orders and returns</div>
                </div>
              </a> </li>
        
      
        
          </ul>
        </div>
      </div>
      <div className="col-lg-8 my-lg-0 my-1">
        <div id="main-content" className="bg-white border">
          <div className="d-flex flex-column">
            <div className="h5">Hello Admin</div>
            <div>Logged in as:  </div>
          </div>
          <div className="d-flex my-4 flex-wrap">
            <div className="box me-4 my-1 bg-light"> <img src="https://www.freepnglogos.com/uploads/box-png/cardboard-box-brown-vector-graphic-pixabay-2.png" alt />
              <div className="d-flex align-items-center mt-2">
                <div className="tag">commande</div>
                <div className="ms-auto number">10</div>
              </div>
            </div>
            <Link to="/productListAdmin">
            <div className="box me-4 my-1 bg-light"> <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-campus-recreation-university-nebraska-lincoln-30.png" alt />
              <div className="d-flex align-items-center mt-2">
                <div className="tag">Gerer prodcut</div>
                <div className="ms-auto number">10</div>
              </div>
              
            </div>
            </Link>
            <div className="box me-4 my-1 bg-light"> <img src="https://www.freepnglogos.com/uploads/love-png/love-png-heart-symbol-wikipedia-11.png" alt />
              <div className="d-flex align-items-center mt-2">
                <div className="tag">Gerer category</div>
                <div className="ms-auto number">10</div>
              </div>
            </div>
          </div>
         
         
     
        </div>
      </div>
    </div>
  </div>
</>


        </div>
    )
}

export default Admindashbored
