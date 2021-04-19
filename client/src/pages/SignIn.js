import React, { useState, useEffect } from "react";
import "./SignUp/SignUp.css";
import { useDispatch, useSelector } from "react-redux";
import { login, videErrors } from "../JS/actions/user";
import Errors from "../Components/Errors";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const SignIn = ({ history }) => {
  const [user, setuser] = useState({});

  const dispatch = useDispatch();
  const errors = useSelector((state) => state.userReducer.errors);
  console.log(errors);
  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    return () => {
      dispatch(videErrors());
    };
  }  );

  return (
    // <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
    //   {errors.length > 0 ? errors.map((el) => <Errors error={el} />) : null}
    //   <div className="card card0 border-0">
    //     <div className="row d-flex">
    //       {/* <div className="col-lg-6">
    //         <div className="card1 border-0 px-4 py-1">
    //           <img src="https://i.imgur.com/uNGdWHi.png" className="image" />{" "}
    //         </div>
    //       </div> */}
    //       <div className="col-lg-6">
    //         <div className="card2 card border-0 px-4 py-5 mt-3 ">
    //           <div className="row mb-4 px-3">
    //             <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
    //             <div className="facebook text-center mr-3">
    //               <i class="fab fa-facebook-f"></i>
    //             </div>
    //             <div className="twitter text-center mr-3">
    //               <i class="fab fa-twitter"></i>
    //             </div>
    //             <div className="linkedin text-center mr-3">
    //               <i class="fab fa-linkedin"></i>
    //             </div>
    //           </div>
    //           <div className="row px-3 mb-4">
    //             <div className="line" />{" "}
    //             <small className="or text-center">Or</small>
    //             <div className="line" />
    //           </div>

    //           <div className="row px-3">
    //             {" "}
    //             <label className="mb-1">
    //               <h6 className="mb-0 text-sm">Email Address</h6>
    //             </label>{" "}
    //             <input
    //               className="mb-4"
    //               type="text"
    //               name="email"
    //               onChange={handleChange}
    //               placeholder="Enter a valid email address"
    //             />{" "}
    //           </div>

    //           <div className="row px-3">
    //             {" "}
    //             <label className="mb-1">
    //               <h6 className="mb-0 text-sm">Password</h6>
    //             </label>{" "}
    //             <input
    //               type="password"
    //               name="password"
    //               onChange={handleChange}
    //               placeholder="Enter password"
    //             />{" "}
    //           </div>
    //           <div className="row mb-3 px-3">
    //             {" "}
    //             <button
    //               type="submit"
    //               className="btn btn-blue text-center"
    //               onClick={() => dispatch(login(user, history))}
    //             >
    //               SignIn
    //             </button>{" "}
    //           </div>
    //           <div className="row mb-4 px-3">
    //             {" "}
    //             <small className="font-weight-bold">
    //               Don't have an account?{" "}
    //               <a className="text-danger ">
    //                 <Link to="/signup">Register</Link>{" "}
    //               </a>
    //             </small>{" "}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>


     <div className="container d-flex justify-content-center" >
                <div className="row my-5">
                  <div className="col-md-6 text-left text-white lcol">
                    <div className="greeting">
                      <h3>Welcome ... </h3>
                    </div>
                    <h3 className="mt-3"><span className="txt">SignIn...</span></h3>
                  
                  </div>
                  <div className="col-md-6 rcol">
                    <form className="sign-up">
                      <h2 className="heading mb-4">Sign up</h2>
                                  {errors.length > 0 ? errors.map((el) => <Errors error={el} />) : null}


                                      

                      <div className="form-group fone mt-2"> <i className="fas fa-envelope" /> {" "}
                            <input
                                className="form-control"
                                type="text"
                                name="email"
                                onChange={handleChange}
                                placeholder="Enter a valid email address"
                              />
                      </div>


                        

                      
                      <div className="form-group fone mt-2"> <i className="fas fa-lock" /> {" "}
                            <input
                                className="form-control"
                                type="password"
                                name="password"
                                onChange={handleChange}
                                placeholder="Enter password"
                              />
                      </div>
                      
                    </form> 
                    
                    {/* <button type="button" className="btn btn-success mt-5"  onClick={() => dispatch(register(user, history))} >
                    Get satrted now</button> */}

                          <div className="row mb-3 px-3">
                              {" "}
                              <Button
                                type="submit"
                                className="btn btn-success mt-5"
                               onClick={() => dispatch(login(user, history))}
                              >
                                Login
                              </Button>
                            </div>

                    <h5 className="exist mt-4">Existing user?   
                              <Link to="/signup"> <span>Sign Up</span></Link> 
                    </h5>
                    {/* <span>      {errors.length > 0 ? errors.map(el => <errors={ el } />) : null}</span> */}
                  </div>
                </div>
</div>
  );
};

export default SignIn;
