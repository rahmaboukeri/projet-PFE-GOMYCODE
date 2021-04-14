import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getOneProduct } from '../../JS/actions/actionProduct'

const ProductDetails = () => {

    const {id} = useParams()
    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(getOneProduct(id))
    },[id,dispatch])
    const Productt=useSelector((state)=>state.productReducer.product.productToFind)
    return (
        <div>

            <h1>hello</h1>
            <h1>{Productt?.name}</h1>
        </div>
    )
}

export default ProductDetails
