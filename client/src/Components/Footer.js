import React from 'react'
// import { Link } from 'react-router-dom'

import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-dark">
        <footer>
            <div className="container" style={{justifyContent:"space-between"}}>
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>CONTACT US</h3>
                        <lu>
                                <li >
                                    Phone : (216) 71223335
                                </li>
                                <li >
                                    Mail: turkishheart145@gmail.com
                                </li>
                                <li >
                                    Menu
                                </li>
                        </lu>        
                    </div>
                    {/* <div className="col-sm-6 col-md-3 item">
                        <h3>OUR TIMES</h3>
                        <ul>
                        <li>Home</li>
                            <li><Link to="/signup">SignUp</Link></li>
                            <li><Link to="/signin">SignIn</Link></li>
                        </ul>
                    </div> */}
                    <div className="col-md-6 item text">
                        <h3>OUR TIMES</h3>
                        <li>     Monday     -------------- 08h - 16h</li>
                        <li className="list-unstyled">
                            Tuesday     -------------- 08h - 16h
                        </li>
                        <li>
                            Wednesday   -------------- 08h - 16h
                        </li>
                        <li >
                            Thursday    -------------- 08h - 16h
                        </li>
                            <li>
                            Friday      -------------- 08h - 16h
                        </li>
                        <li>
                            Saturday    -------------- 08h - 17h
                        </li>
                        <li>
                            Sunday      -------------- Closed
                        </li>         
                            </div>
                    </div>
                    {/* <div className="col-sm-6 col-md-3 item"></div> */}
             
                </div>
                <p className="copyright">copyright@turkish-time.co</p>
            {/* </div> */}
          
        </footer>
    </div>
    )
}

export default Footer
