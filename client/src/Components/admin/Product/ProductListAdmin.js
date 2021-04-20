import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../JS/actions/actionProduct";
import  ProductCardAdmin  from "./ProductCardAdmin";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ToggleFalse } from "../../../JS/actions/actionProduct";


import "./ProductListAdmin.css"

const ProductListAdmin = () => {

    const products = useSelector(state => state.productReducer.products)
    const isLoading = useSelector(state => state.productReducer.isLoading)

    const dispatch = useDispatch()

    useEffect (() =>{
            dispatch(getProduct())
    }, [dispatch])
    
    return (
        

                        <div className="contacts-content"> 
                                      
           { isLoading ?   <Spinner animation="border" style={{width:"300px",height:"300px"}} variant="danger" />
           

            :
             <div className="contacts-content">
                 <Link to="/addProduct" >
						<Button className="app-button" size="lg" 
							onClick={()=> dispatch(ToggleFalse())}	>Add Product </Button>
					</Link>	
                 
                 {products.map((product) => 
                 
                    <ProductCardAdmin product={product} key={product._id} />
                    ) }
             </div>
            }        
        </div>

        
    )
}

export default ProductListAdmin
