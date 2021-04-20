import React, { useEffect, useState } from 'react'
// import { Button,Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


import "./ProductDetails.css"
import Details from './Details'
import { addOrder } from '../../JS/actions/actionOrder'


const ProductDetails = ({history}) => {

  const [sumTotal, setSumTotal] = useState(0)
  const [qty, setQty] = useState(1)

 
    // const product = useSelector(state => state.productReducer.product)
    const dispatch = useDispatch()

    const products=useSelector((state)=>state.orderReducer.products)

    const user=useSelector((state)=>state.userReducer.user)

     const order=useSelector((state)=>state.orderReducer.orders)

     const sumPrice=useSelector((state)=>state.orderReducer.sumPrice)
     const qtySum=useSelector((state)=>state.orderReducer.qty)
     

     const [productData, setProductData] = useState([])

     console.log(products)
    useEffect(() => {
      setProductData(products)
    }, [products])


useEffect(() => {
 setSumTotal(sumPrice)
}, [sumPrice])



    return (
        <div>

            {/* <h1>hello</h1>
            <h1>{Productt?.name}</h1> */}
            <div>
              <Link to="/productList"> Back to result</Link>
            </div>


                    <div className="cart_section">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-lg-10 offset-lg-1">
                            <div className="cart_container">
                              <div className="cart_title">Food Cart</div>
                            
                            {
                              productData.length &&
                              productData.map(product =>
                               <Details product={product} key={product._id} order={order}  /> )
                            }
                              <div className="order_total">
                                <div className="order_total_content text-md-right">
                                  <div className="order_total_title">Order Total:</div>
                                  <div className="order_total_amount">{sumTotal}</div>
                                </div>
                              </div>
                              <div className="cart_buttons">
                                <Link to="/productList"><button type="button" className="button cart_button_clear">
                                  Continue Shopping</button></Link> 
                                  <Link to="/Bienvenue" >
                                   <button type="button" className="button cart_button_checkout"
                                   onClick={() => dispatch(addOrder({userId:user?._id,product:productData,sum:sumPrice,qty:qtySum}) , history.push("/Bienvenue") )}
                                   >Add to Cart</button> 
                                   </Link>
                                   </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


           




        </div>
    )
}

export default ProductDetails
