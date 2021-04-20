import React ,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import image from "../../assets/product/prod2.jpg";
import { sumTotal } from '../../JS/actions/actionOrder';


const Details = ({product}) => {

const [qty, setQty] = useState(1)
const [oldQty, setOldQty] = useState(1)

const dispatch = useDispatch()

const HandlSum = (e) =>{
        // dispatch(sumTotal(e.target.value, product.Price))
        setQty(e.target.value)
}

useEffect(() => {
        dispatch(sumTotal(qty, product.Price,oldQty))
        setOldQty(qty)

}, [qty])


    return (
          <div className="cart_items">
                                <ul className="cart_list">
                                  <li className="cart_item clearfix">
                                    <div className="cart_item_image"><img src={image} alt /></div>
                                    <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                      <div className="cart_item_name cart_info_col">
                                        <div className="cart_item_title"> Name </div>
                                        <div className="cart_item_text">{product?.name} </div>
                                      </div>
                                
                                      <div className="cart_item_quantity cart_info_col">
                                        <div className="cart_item_title">Quantity</div>
                                        <div className="cart_item_text">
                                            <input type="Number" min="1" max="100" value={qty} onChange={HandlSum} />   
                                        </div>
                                      </div>
                                      <div className="cart_item_price cart_info_col">
                                        <div className="cart_item_title">Price</div>
                                        <div className="cart_item_text"> {product?.Price}  </div>
                                      </div>
                                      
                                    </div>
                                  </li>
                                </ul>
                              </div>
    )
}

export default Details
