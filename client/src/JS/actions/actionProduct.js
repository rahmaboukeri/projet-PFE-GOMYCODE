

import axios from "axios";

import { 
    GET_PRODUCT_LOAD,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAIL,
    GET_ONE_PRODUCT,
    TOGGLE_TRUE,
    TOGGLE_FALSE
} from "../actionTypes/typeProduct";

//get all contacts
export const getProduct = () => async (dispatch) => {
        dispatch({type : GET_PRODUCT_LOAD})

    try {
        const res = await axios.get('/api/product')
        dispatch({ type : GET_PRODUCT_SUCCESS,payload : res.data.listProducts })
        
    } catch (error) {
        dispatch({type : GET_PRODUCT_FAIL,payload: error})
        console.log(error)
            
    }
}


//DELET contact
export const deleteProduct =(id)=> async(dispatch)=>
{
    dispatch({type: GET_PRODUCT_LOAD})
    try {
        await axios.delete(`/api/product/${id}`)
        // dispatch({type: GET_CONTACTS_SUCCESS })
        dispatch(getProduct())
    } catch (error) {
        console.log(error)
    }
}

//ADD contact
export const addProduct =(newProduct)=> async(dispatch)=>
{
    dispatch({type: GET_PRODUCT_LOAD})
    try {
        await axios.post(`/api/product/`,newProduct)
        dispatch(getProduct())
    } catch (error) {
        console.log(error)
    }
}


//update contact
export const updateProduct =(id,newProduct)=> async(dispatch)=>
{
    dispatch({type: GET_PRODUCT_LOAD})
    try {
        await axios.put(`/api/product/${id}`,newProduct)
        dispatch(getProduct())
    } catch (error) {
        console.log(error)
    }
}

//getOne contact
export const getOneProduct =(id)=> async(dispatch)=>
{
    dispatch({type: GET_PRODUCT_LOAD})
    try {
        const res = await axios.get(`/api/product/${id}`)
        dispatch({type : GET_ONE_PRODUCT,payload : res.data})
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

// toggle false
export const ToggleFalse =() =>
{
    return {type:TOGGLE_FALSE}
      
}

//toggle true
export const ToggleTrue =() =>
{
    return {type:TOGGLE_TRUE } 
}