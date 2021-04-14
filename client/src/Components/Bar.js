import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../JS/actions/user";
import logo from "../assets/logo.jpg";

import "./Navbar/Navbar.css"
const Bar = () => {
    const isAuth = useSelector((state) => state.userReducer.isAuth);
  const dispatch = useDispatch();

    return (

// <>
// <nav style={{backgroundColor:"black"}} className="navbar navbar-dark navbar-expand-md fixed-top">
//   <div className="container-fluid"><a className="navbar-brand" href="/" style={{fontFamily:"Lucida Handwriting"}}>TURKISH TIME</a>
//         <button data-toggle="collapse" 
//         className="navbar-toggler" data-target="#navcol-1">
//             <span className="sr-only">Toggle navigation</span>
//              <span className="navbar-toggler-icon" /></button>
//     <div className="collapse navbar-collapse" id="navcol-1">
//       <ul className="nav navbar-nav text-right text-white ml-auto">
//         <li className="nav-item" role="presentation"><a className="nav-link active" href="#">Menu</a></li>
//         <li className="nav-item" role="presentation"><a className="nav-link" href="#">Salé</a></li>
//         <li className="nav-item" role="presentation"><a className="nav-link" href="#">Sucré</a></li>
//         <li className="nav-item" role="presentation"><a className="nav-link" href="#">Plat</a></li>
//       </ul>
//       {/* <ul className="nav navbar-nav ml-auto">
//         <li className="nav-item" role="presentation" />
//         <li className="nav-item" role="presentation"><a className="nav-link" href="#">
//             <i className="fa fa-search" /></a></li>
//         <li className="nav-item" role="presentation" />
//       </ul> */}

//  <ul className="nav navbar-nav ml-auto">
//           <div>
//          <Link to="/">
//         <image src={logo} alt="" />
//       </Link>
//       {isAuth ? (
//         <Link to="/" onClick={() => dispatch(logout())}>
//           {" "}
//           <a href="#" className="btn-area">
//             Logout
//           </a>
//         </Link>
//       ) : (
//         <div className="btns">
//           <Link to="/signup">
//             {" "}
//             <a href="#" className="btn-area">
//               SignUp
//             </a>
//           </Link>

//           <Link to="/signin">
//             <a href="#" className="btn-area">
//               SignIn
//             </a>
//           </Link>
//         </div>
//       )}
//     </div>
// </ul>

//     </div>




//   </div>



// </nav>
// </>

<>

  
</>
        
    )
}

export default Bar
