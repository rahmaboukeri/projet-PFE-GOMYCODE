import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../JS/actions/actionProduct";
import  ProductCard  from "../ProductCard/ProductCard";

import { Spinner,Form,FormControl } from "react-bootstrap";

import "./productList.css"

const ProductList = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.productReducer.products)
    const isLoading = useSelector(state => state.productReducer.isLoading)

    useEffect (() =>{
            dispatch(getProduct())
    }, [dispatch])


    const [filterName, setFilterName] = useState("");
    
    return (
        

                        <div className="contacts-content"> 
    <Form inline style={{padding:"4% 30%"}} >
                    <FormControl 
                    onChange={(e) => setFilterName(e.target.value)}
                    value={filterName}
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    />
            </Form>
                <div className="card-headerr">
        
            </div>

           { isLoading ?   <Spinner animation="border" style={{width:"300px",height:"300px"}} variant="danger" />

            :
             <div className="contacts-content">
                 {products.filter((category) =>
                    category.name.toLowerCase().includes(filterName.toLowerCase())
                )
                
                 .map(product => 
                    <ProductCard product={product} key={product._id} />
                    ) }
             </div>
            }                         
        </div>

        
    )
}

export default ProductList
