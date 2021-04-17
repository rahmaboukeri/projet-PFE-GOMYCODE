import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import Errors from "../../Components/Errors";
import Errors from "../Errors";

import { register, videErrors } from "../../JS/actions/user";

import "./SignUp.css";
import { Button } from "react-bootstrap";

const SignUp = ({ history }) => {
const [user, setuser] = useState({});
 const errors = useSelector((state) => state.userReducer.errors);
 const dispatch = useDispatch();

  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    return () => {
      dispatch(videErrors());
    };
  }, []);
  return (
    //
    <div className="container d-flex justify-content-center" >
                <div className="row my-5">
                  <div className="col-md-6 text-left text-white lcol">
                    <div className="greeting">
                      <h3>Welcome to <span className="txt">OUR</span></h3>
                    </div>
                    <h6 className="mt-3">RESTAURANT...</h6>
                  
                  </div>
                  <div className="col-md-6 rcol">
                    <form className="sign-up">
                      <h2 className="heading mb-4">Sign up</h2>
                                  {errors.length > 0 ? errors.map((el) => <Errors error={el} />) : null}


                      <div className="form-group fone mt-2"> <i className="fas fa-user" /> {" "}

                            <input
                                className="form-control"
                                type="text"
                                name="name"
                                onChange={handleChange}
                                placeholder="Enter a valid Name"
                              />
                            
                      </div>

                      <div className="form-group fone mt-2"> <i className="fas fa-user" /> {" "}
                                <input
                                className="form-control"
                                type="text"
                                name="lastName"
                                onChange={handleChange}
                                placeholder="Enter a valid LastName"
                              />
                      </div>

                      <div className="form-group fone mt-2"> <i className="fas fa-envelope" /> {" "}
                            <input
                                className="form-control"
                                type="text"
                                name="email"
                                onChange={handleChange}
                                placeholder="Enter a valid email address"
                              />
                      </div>


                        <div className="form-group fone mt-2"> <i className="fas fa-phone" /> {" "}
                                <input
                                className="form-control"
                                type="text"
                                name="phone"
                                onChange={handleChange}
                                placeholder="Enter a valid phone"
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
                                onClick={() => dispatch(register(user, history))}
                              >
                                Get satrted now
                              </Button>
                            </div>

                    <h5 className="exist mt-4">Existing user?   
                              <Link to="/signin"> <span>Log in</span></Link> 
                    </h5>
                    {/* <span>      {errors.length > 0 ? errors.map(el => <errors={ el } />) : null}</span> */}
                  </div>
                </div>
</div>
  );
};

export default SignUp;
