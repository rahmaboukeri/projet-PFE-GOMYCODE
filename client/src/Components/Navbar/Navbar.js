import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../JS/actions/user";
import logo from "../../assets/logo.jpg";
import "./Navbar.css";
const Navbar = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
    const user = useSelector((state) => state.userReducer.user);

  const dispatch = useDispatch();

  return (

<nav style={{backgroundColor:"black"}} className="navbar navbar-dark navbar-expand-md fixed-top navbar-collapse">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/" style={{fontFamily:"Lucida Handwriting"}}>TURKISH TIME</Link> 
   {/* <a className="navbar-brand" href="/" style={{fontFamily:"Lucida Handwriting"}}>TURKISH TIME</a> */}
        <button data-toggle="collapse" 
        className="navbar-toggler" data-target="#navcol-1">
            <span className="sr-only">Toggle navigation</span>
             <span className="navbar-toggler-icon" /></button>
    <div className="collapse navbar-collapse" id="navcol-1">
      <ul className="nav navbar-nav text-right text-white ml-auto">
        <li className="nav-item" role="presentation">
          {/* <a className="nav-link active" href="http://www.anteprestaurant.co.uk/wp-content/uploads/2014/05/antep-birmingham-turkish-restaurant.pdf">Menu PDF</a> */}
          <Link className="nav-link active" to="http://www.anteprestaurant.co.uk/wp-content/uploads/2014/05/antep-birmingham-turkish-restaurant.pdf">Menu PDF</Link>
          </li>
        <li className="nav-item" role="presentation">
          {/* <a className="nav-link" href="/productList">Our FOOD</a> */}
              <Link className="nav-link" to="/productList" >Our FOOD</Link>
          </li>
    
                <li className="nav-item" role="presentation">
                  {/* <a className="nav-link" href="/contactUS">CONTACT</a> */}
                  <Link className="nav-link" to="/contactUS">CONTACT</Link>
                  </li>


        {
            isAuth && !( user && user.role===0 )?
            <Link to="/Admindashbored">
           <li className="nav-item" role="presentation">
             {/* <a className="nav-link" href="#">DashboredAdmin</a> */}
             <Link className="nav-link" to="/Admindashbored" >DashboredAdmin</Link>
             </li>
        </Link>
        : null

        }
        
       
      </ul>


 <ul className="nav navbar-nav ml-auto">
          <div>
         <Link to="/">
        <image src={logo} alt="logo" />
      </Link>
      {isAuth ? (
        <div>
          <Link to="/" onClick={() => dispatch(logout())}>
          {" "}
          <a href="#" className="btn-area">
            Logout
          </a>
        </Link> 
        <Link to="/profile">
            <span style={{color:"white"}}>{ user && user.name }</span> 
        </Link>
       
      
        </div>
        
     
      ) : (
        <div className="btns">
          <Link to="/signup" className="btn-area">
            {" "}
            {/* <a href="#" className="btn-area"> */}
              SignUp
            {/* </a> */}
          </Link>

          <Link to="/signin">
            <a href="#" className="btn-area">
              SignIn
            </a>
          </Link>
        </div>
      )}
    </div>
</ul>

    </div>

  </div>

</nav>


  );
};

export default Navbar;
