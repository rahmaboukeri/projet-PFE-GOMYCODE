const { GET_ALL_ORDER, ADD_PRODUCT, LOAD_ORDER, DELETE_PRODUCT, SUM_TOTAL } = require("../actionTypes/TypeOrder");


const initialState ={
    orders :[],
    products: [],
    sumPrice : 0,
    loadOrder : false
}

const orderReducer = (state=initialState,{ type, payload })=>{
    switch (type) {
        case LOAD_ORDER:
            return {...state,loadOrder : true};
        case GET_ALL_ORDER:
            return {
                ...state,
                orders : payload.Orders,
                products : [],
                sumPrice : 0,
                loadOrder : false
            };
        case ADD_PRODUCT:
            return {
                ...state,
                products : [...state.products, payload],
                sumPrice : state.sumPrice + payload.Price ,
                loadOrder : false
            };
        case DELETE_PRODUCT : 
        const product=state.products.find(product=> product._id === payload.id)
            return{
                ...state,
                products: state.products.filter(product=> product._id !== payload.id ? product : null),
                sumPrice : state.sumPrice > (product.Price * payload.qty) ? state.price - (product.Price * payload.qty) : 0 ,
                loadOrder : false
            }  ;

             case SUM_TOTAL : 
            return{
                ...state,
                sumPrice : payload.oldQty>payload.qty ? state.sumPrice - (payload.Price * (payload.oldQty - (payload.qty))):
                state.sumPrice + (payload.Price * ((payload.qty) - payload.oldQty))
              
            }    
           
        default:
            return state
    }
}

export default orderReducer;