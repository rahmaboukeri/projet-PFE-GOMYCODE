import { 
    GET_PRODUCT_LOAD,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAIL,
    GET_ONE_PRODUCT,
    TOGGLE_TRUE,
    TOGGLE_FALSE
} from "../actionTypes/typeProduct";


const initState ={
    products: [],
    errors: [],
    isLoading: false,
    product: {},
    isEdit :false
}

const productReducer = (state=initState ,{type,payload} ) => {

    switch (type) {
        case GET_PRODUCT_LOAD : return{ ...state, isLoading: true}
        case GET_PRODUCT_SUCCESS : return{ ...state, isLoading: false, products: payload}
        case GET_PRODUCT_FAIL : return{ ...state, isLoading: false, errors: payload}
        case GET_ONE_PRODUCT : return{ ...state,product: payload}
        case TOGGLE_TRUE : return{ ...state,isEdit:true}
        case TOGGLE_FALSE : return{ ...state,isEdit:false}
        default: return state;
        
    }
}

export default productReducer