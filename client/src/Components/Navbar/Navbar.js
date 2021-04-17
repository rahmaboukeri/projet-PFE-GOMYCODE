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
  <div className="container-fluid"><a className="navbar-brand" href="/" style={{fontFamily:"Lucida Handwriting"}}>TURKISH TIME</a>
        <button data-toggle="collapse" 
        className="navbar-toggler" data-target="#navcol-1">
            <span className="sr-only">Toggle navigation</span>
             <span className="navbar-toggler-icon" /></button>
    <div className="collapse navbar-collapse" id="navcol-1">
      <ul className="nav navbar-nav text-right text-white ml-auto">
        <li className="nav-item" role="presentation"><a className="nav-link active" href="http://www.anteprestaurant.co.uk/wp-content/uploads/2014/05/antep-birmingham-turkish-restaurant.pdf">Menu PDF</a></li>
        <li className="nav-item" role="presentation"><a className="nav-link" href="/productList">Our FOOD</a></li>
                <li className="nav-item" role="presentation"><a className="nav-link" href="/contactUS">CONTACT</a></li>


        {
            isAuth && !( user && user.role===0 )?
            <Link to="/Admindashbored">
           <li className="nav-item" role="presentation"><a className="nav-link" href="#">DashboredAdmin</a></li>
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
          <Link to="/signup">
            {" "}
            <a href="#" className="btn-area">
              SignUp
            </a>
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
