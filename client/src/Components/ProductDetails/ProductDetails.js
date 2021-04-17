import React, { useEffect } from 'react'
import { Button,Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getOneProduct } from '../../JS/actions/actionProduct'

import "./ProductDetails.css"


const ProductDetails = () => {
    // const product = useSelector(state => state.productReducer.product)
    const {id} = useParams()
    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(getOneProduct(id))
    },[id,dispatch])
    const product=useSelector((state)=>state.productReducer.product.productToFind)


    return (
        <div style={{paddingTop:"5%"}}>

            {/* <h1>hello</h1>
            <h1>{Productt?.name}</h1> */}

                    // <Table striped bordered hover variant="light" >
                    //     <thead>
                    //         <tr>
                    //         <th>#</th>
                    //         <th>Name Food</th>
                    //         <th>Price</th>
                    //         <th>Description</th>
                    //         <th></th>
                    //         </tr>
                    //     </thead>
                    //     <tbody>
                    //         <tr>
                    //         <td>1</td>
                    //         <td>{product?.name}</td>
                    //         <td>{product?.Price}</td>
                    //         <td>{product?.description}</td>
                    //             <td> <Button> Confirme</Button>  </td>
                    //         </tr>

                    //     </tbody>
                    // </Table>

                    {/* <div className="cart_section">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <div className="cart_container">
          <div className="cart_title">Shopping Cart<small> (1 item in your cart) </small></div>
          <div className="cart_items">
            <ul className="cart_list">
              <li className="cart_item clearfix">
                <div className="cart_item_image"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560924153/alcatel-smartphones-einsteiger-mittelklasse-neu-3m.jpg" alt /></div>
                <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                  <div className="cart_item_name cart_info_col">
                    <div className="cart_item_title">Name</div>
                    <div className="cart_item_text">{product?.name}</div>
                  </div>
                  <div className="cart_item_color cart_info_col">
                    <div className="cart_item_title">Color</div>
                    <div className="cart_item_text"><span style={{backgroundColor: '#999999'}} />Silver</div>
                  </div>
                  <div className="cart_item_quantity cart_info_col">
                    <div className="cart_item_title">Quantity</div>
                    <div className="cart_item_text">1</div>
                  </div>
                  <div className="cart_item_price cart_info_col">
                    <div className="cart_item_title">Price</div>
                    <div className="cart_item_text">{product?.Price}</div>
                  </div>
                  <div className="cart_item_total cart_info_col">
                    <div className="cart_item_title">Total</div>
                    <div className="cart_item_text">22000Dt</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="order_total">
            <div className="order_total_content text-md-right">
              <div className="order_total_title">Order Total:</div>
              <div className="order_total_amount">₹22000</div>
            </div>
          </div>
          <div className="cart_buttons"> <button type="button" className="button cart_button_clear">Continue Shopping</button> <button type="button" className="button cart_button_checkout">Add to Cart</button> </div>
        </div>
      </div>
    </div>
  </div>
</div> */}

            




        </div>
    )
}

export default ProductDetails
