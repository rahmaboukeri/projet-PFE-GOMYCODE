import React from 'react'
// import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Card,Button } from "react-bootstrap";

// import  deleteBtn  from "../../assets/delete.png";
// import img1  from "../../assets/1.jpg";
import editBtn from "../../../assets/logo.jpg";
import { deleteProduct, getOneProduct, ToggleTrue } from '../../../JS/actions/actionProduct';
import { Link } from "react-router-dom";
import prod1 from "../../../assets/product/prod1.jpg";



// import "./.css"


const ProductCardAdmin = ({product}) => {
    const dispatch = useDispatch()
    return (
        // <div className="contact-card">
        //     <img className="avatar" src={ img1 } alt="avatar" />
        //     <Card className="sousCard">
                    
        //         <Card.Body style={{width:"175px",justifyContent:"center"}}>
        //             <Card.Title>{product.name}</Card.Title>
        //             {/* <Card.Text>
        //                 <span>{product.mail}</span><br />
        //                 <span>{product.phone}</span>
        //             </Card.Text> */}
        //                <div>
                             
        //                 {/* <img src={deleteBtn} className="btn-icon"
        //                 alt="edit-icon" 
        //                 onClick={ ()=>dispatch(deleteContact(contact._id)) }
        //                  />  */}

        //                <Link to={`/ProductDetails/${product._id}`}>
        //             <img src={editBtn} className="btn-icon"
        //                 alt="edit-icon" onClick={ ()=>{dispatch(ToggleTrue()); dispatch(getOneProduct(product._id) ) } } />   
        //                 </Link> 
        //                 </div>              
        //         </Card.Body>
        //     </Card>
        // </div>


<div>
{/* <h1>hello rahma</h1> */}

  <Card className="contact-card" style={{ width: '18rem' }}>
  <Card.Img variant="top" className="imgProd" src={prod1} />
  <Card.Body>
    <Card.Title > {product.name} </Card.Title>
    <h3>
    <Card.Text style={{fontWeight:"bold",fontSize:"18px",color:"red"}}>  {product.Price} <span >DT</span>
    </Card.Text>
    </h3>
    <Card.Text >{product.description}</Card.Text>
      
              {/* <Link to={`/ProductDetails/${product._id}`}>
                    <Button className="btn-icon" 
                        alt="edit-icon" onClick={ ()=>{dispatch(ToggleTrue()); dispatch(getOneProduct(product._id) ) } } >Command NOW</Button>   
                        </Link>  */}
       

  </Card.Body>
       <div>
                             
                        <Button  className="btn-icon"
                       style={{width:"100px"}}
                        onClick={ ()=>dispatch(deleteProduct(product._id)) }
                         > delete </Button> 

                        <Link to="/editProduct" >
                    <Button  className="btn-icon"
                    style={{width:"100px"}}
                        onClick={ ()=>{dispatch(ToggleTrue()); dispatch(getOneProduct(product._id) ) } } >  edit 
                        </Button> 
                        </Link>
                        </div> 
</Card>
</div>

     



//         <div className="container" style={{width:"800px"}} >
//   <figure className="card card-product-grid">
//        <a href="#" className="img-wrap" data-abc="true">
//            <img src={prod1} /></a>
//     <figcaption className="info-wrap">
//       <div className="row">
//           <span> {product.category} </span>
//         <div className="col-md-9"> 
//                 <a href="#" className="title" data-abc="true">{product.name}</a> </div>
//         <div className="col-md-3">
//           <div className="rating text-right"> <i className="fa fa-star" /> 
//                     <i className="fa fa-star" /> <i className="fa fa-star" /> </div>
//         </div>
//       </div>
//     </figcaption>
//     <div className="bottom-wrap"> 
//         <Link to={`/ProductDetails/${product._id}`}>
//             <a href="#" className="btn btn-primary float-right" data-abc="true"> Command NOW </a>
//         </Link>
//       <div className="price-wrap"> 
//                 <span className="price h5">{product.Price}</span><span className="price h5">DT</span> <br /> 
//                     {/* <small className="text-success">Free shipping</small>  */}
//                     </div>
//     </div>
//   </figure>
// </div>

    )
}

export default ProductCardAdmin
