import React from "react";
import { Carousel } from 'react-responsive-carousel';
import slide1 from "../assets/slide/slide1.jpg";
import slide2 from "../assets/slide/slide2.jpg";
import slide3 from "../assets/slide/slide3.jpg";
import  prod1  from "../assets/product/prod1.jpg";
import  prod2  from "../assets/product/prod2.jpg";
import  prod3  from "../assets/product/prod3.jpg";




import "./Acceuil.css"

const Acceuil = () => {
 
    return (
  <main>
<section>
  <div>
<>
  {/* <nav id="mainNavbar" className="navbar navbar-dark navbar-expand-md py-0 fixed-top"> 
  <a href="#" className="navbar-brand">BRANDNAME</a> 
  <button className="navbar-toggler" data-toggle="collapse" data-target="#navLinks"> 
  <span className="navbar-toggler-icon" /> </button>
  
  </nav> */}
  <header>
  
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

   
    
   


    
      
      
       </header>
  {/* Page Content */}

  <section>
            <div>
              
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
</>

 
  </div>
</section>




<section>
 
     <div style={{margin:"0 30%"}} className="container">
     <span style={{fontSize:"100px",fontFamily:"Brush Script MT",color:"#c79c60",lineHeight:"65px",margin:"0 20%",letterSpacing:"0em"}} className="display-4">
       Discover</span>

      <div style={{ fontFamily: "OpenSans-Bold !important", color: "#c79c60", fontSize: "36px"}}>
        TURKISH 
        <span style={{color: "#c79c60", fontFamily: "OpenSans-Light !important"}}>TIME</span> 
          <span style={{fontSize: "24px", color: "#333", fontFamily: "OpenSans-Light !important"}}>
              Restaurant our most powerful restaurant</span>
            </div>
      {/* <span style={{}} >AHMETCHEF</span> <span style={{fontFamily:"Lucida Handwriting",fontSize:"30px"}}>restaurant our most powerful restaurant</span>  */}
  </div>
</section>






<section>
 <div className="container">
     
     <div className="container d-flex r">
</div>
  <div className="row" >
    <div className="col-md-4" style={{height:"200px"}}>
      <div className="card p-3 py-4 mt-5 mb-5">
        <div className="text-center"> <img src={prod1} width={300} alt="prod1" className="rounded" />
          <h3 className="mt-2">Mantı: Mini Ravioli</h3>  
          {/* <small className="mt-4">It is the Turkish version of Italian dishes that you will definitely find pleasing to your taste buds</small> */}
          {/* <div className="social-buttons mt-5"> 20 DT</div> */}
          
        </div>
        <span style={{fontWeight:"bold",fontSize:"20px"}} className="text-center" >20 DT</span>
      </div>
    </div>
     <div className="col-md-4">
      <div className="card p-3 py-4 mt-5 mb-5">
        <div className="text-center"> <img src={prod2} width={300} alt="prod2" className="rounded" />
          <h3 className="mt-2">Şiş Kebap: Seekh Kebab</h3>  
          {/* <small className="mt-4"> Turkey is the country that introduced the world with the skewered meat or kebabs.</small> */}
          
        </div>
        <span style={{fontWeight:"bold",fontSize:"20px"}} className="text-center" >20 DT</span>
      </div>
    </div>
     <div className="col-md-4" >
      <div className="card p-3 py-4 mt-5 mb-5">
        <div className="text-center"> <img src={prod3} width={300} alt="prod3" className="rounded" />
          <h3 className="mt-2">Pide: Turkish Patty</h3>  
          {/* <small className="mt-4"> This dish is so well prepared that its appearance would be enough to entice you to have a bite.</small> */}
          {/* <div className="social-buttons mt-5"> 20 DT</div> */}
          
        </div>
        <span style={{fontWeight:"bold",fontSize:"20px"}} className="text-center" >20 DT</span>
      </div>
    </div>
  </div>
</div>
</section>
</main>

  );
};

export default Acceuil;
