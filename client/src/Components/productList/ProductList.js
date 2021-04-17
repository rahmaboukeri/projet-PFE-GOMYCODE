import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../JS/actions/actionProduct";
import  ProductCard  from "../ProductCard/ProductCard";

import { Spinner } from "react-bootstrap";

import "./productList.css"

const ProductList = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.productReducer.products)
    const isLoading = useSelector(state => state.productReducer.isLoading)

    useEffect (() =>{
            dispatch(getProduct())
    }, [dispatch])
    
    return (
        

                        <div className="contacts-content"> 
           { isLoading ?   <Spinner animation="border" style={{width:"300px",height:"300px"}} variant="danger" />

            :
             <div className="contacts-content">
                 {products.map(product => 
                    <ProductCard product={product} key={product._id} />
                    ) }
             </div>
            }                         
        </div>

            //  <div className="products-content"  style={{flexDirection:"column"}}>
            //      {products.map(product => 
            //         <ProductCard  product={product} key={product._id} />
            //         // <h1>hello liste</h1>
            //         ) }
            //  </div>
                                     
        
    )
}

export default ProductList
