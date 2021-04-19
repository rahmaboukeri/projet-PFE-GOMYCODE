import React from "react";
// import { Carousel } from 'react-responsive-carousel';
import { Carousel } from "react-bootstrap";
import slide1 from "../assets/slide/slide1.jpg";
import slide2 from "../assets/slide/slide2.jpg";
import slide3 from "../assets/slide/slide3.jpg";
import  prod1  from "../assets/product/prod1.jpg";
import  prod2  from "../assets/product/prod2.jpg";
import  prod3  from "../assets/product/prod3.jpg";




import "./Acceuil.css"

const Acceuil = () => {
 
    return (
      <div>
                <main>
                    <section>
                      <div>
                                    
                                    {/* <Carousel style={{height:"300px"}} >
                                                  <div >
                                                      <img src={slide1} />
                                                      <p className="legend">kounafa</p>
                                                  </div>
                                                  <div>
                                                      <img src={slide2} />
                                                      <p className="legend"></p>
                                                  </div>
                                                  <div>
                                                      <img src={slide3} />
                                                      <p className="legend"></p>
                                                  </div>
                                      </Carousel> */}

                <Carousel>
                      <Carousel.Item>
                        <img style={{height:"500px"}}
                          className="d-block w-100"
                          src={slide1}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3>First slide label</h3>
                          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={slide2}
                          alt="Second slide"
                        />

                        <Carousel.Caption>
                          <h3>Second slide label</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={slide3}
                          alt="Third slide"
                        />

                        <Carousel.Caption>
                          <h3>Third slide label</h3>
                          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>




                    </div>
                </section>  

                            <section className="py-5">
                              <div className="container">
                                <h1 className="display-4">Delicious Turkish Foods</h1>
                                <p className="lead">
                                  God created man, man created Turkey, and Turkey created cuisines 
                                  for which gluttony can’t be a sin. Rich and savory, not spicy particularly – the delicacies among
                                  the Turkish foods have been littering the menus of restaurants all over the world. 
                                  Heritage of the Ottoman cuisine, a traditional Turkish food menu infamous for its meat-full skewers,
                                    but there is a lot more to it. Be it main course, desserts, appetizers, or juices; Turkish dishes will
                                    surprise your taste buds in a manner that not you’ll be amazed, but you’ll want more of it. Hence, from the whole big world of Turkish delicacies, 
                                    we bring to you a complete menu for everyone’s choice. Turkish food is more than just koftas, kebabs, and doners. You may not be able to pronounce 
                                  the name of the dishes but you are going to love the taste of it.
                                  </p>
                              </div>
                            </section>


                





                <section>
                
                    <div style={{margin:"5% 24%"}} className="container">
                    <span style={{fontSize:"100px",fontFamily:"Brush Script MT",color:"#c79c60",lineHeight:"65px",margin:"0 20%",letterSpacing:"0em"}} className="display-4">
                      Discover</span>

                      <div style={{ fontFamily: "OpenSans-Bold !important", color: "#c79c60", fontSize: "36px"}}>
                        TURKISH 
                        <span style={{color: "#c79c60", fontFamily: "OpenSans-Light !important"}}>TIME</span> 
                          <span style={{fontSize: "24px", color: "#333", fontFamily: "OpenSans-Light !important"}}>
                              Restaurant our most powerful restaurant</span>
                            </div>
                  </div>
                </section>




{/* 


                <section >

                <div  className="container"  style={{flexDirection:"column", padding:"3% 10%"}}>

                        <div className="container d-flex r" >
                          <div className="row">
                            
                          
                                <div className="col-md-4" style={{boxShadow: "20px 20px 60px #cacaca, -20px -20px 60px #ffffff",padding:"15px"}}>
                                  <div className="d-flex sale ">
                                    <div className="btn" style={{backgroundColor:"orange",fontWeight:"bold"}}> 20  <span>DT</span></div>
                                  </div> 
                                  <img className="mx-auto img-thumbnail" src={prod1} width="auto" height="auto" />
                                  <div className="card-body text-center mx-auto">
                                    <h4 className="card-title"> Mantı: </h4>
                                  </div>
                                </div>
                                <div className="col-md-4" style={{boxShadow: "20px 20px 60px #cacaca, -20px -20px 60px #ffffff"}}>
                                  <div className="d-flex sale ">
                                    <div className="btn" style={{backgroundColor:"orange",fontWeight:"bold"}}> 20  <span>DT</span></div>
                                  </div>
                                  <img className="mx-auto img-thumbnail" src={prod2} width="auto" height="auto" />
                                  <div className="card-body text-center mx-auto">
                                    <h4 className="card-title"> Şiş Kebap </h4>
                                  </div>
                                </div>
                                <div className="col-md-4" style={{boxShadow: "20px 20px 60px #cacaca, -20px -20px 60px #ffffff"}} >
                                  <div className="d-flex sale ">
                                    <div className="btn" style={{backgroundColor:"orange",fontWeight:"bold"}}> 20  <span>DT</span>
                                    </div>
                                  </div> 
                                  <img className="mx-auto img-thumbnail" src={prod3} width="auto" height="auto" />
                                  <div className="card-body text-center mx-auto">
                                    <h4 className="card-title"> Pide </h4>
                                  </div>
                                </div>

                        
                                </div>
                        </div>
                </div>


                </section>
 */}

                </main>
</div>

  );
};

export default Acceuil;
