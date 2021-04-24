import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Spinner } from "react-bootstrap";
// import { Link } from 'react-router-dom'

import { getAllOrder } from '../../../JS/actions/actionOrder'
// import OrderCard from './OrderCard';

const OrderList = () => {

    const orders = useSelector(state => state.orderReducer.orders)
    
    // const product = useSelector(state => state.productReducer.product)

    const loadOrder = useSelector(state => state.orderReducer.loadOrder)

    //  const user = useSelector(state => state.userReducer.user)

     const [ordersData, setOrdersData] = useState([])


    const dispatch = useDispatch()

    useEffect (() =>{
            dispatch(getAllOrder())
    }, [dispatch])
   
    useEffect(() => {
      setOrdersData(orders)
    }, [orders])


      console.log(ordersData)
    

    return (
        

         <div className="contacts-content" style= {{paddingTop:"5%"}}> 
                                      
             { loadOrder ?   <Spinner animation="border" style={{width:"300px",height:"300px"}} variant="danger" />
            :
             <div className="contacts-content">

                 
{/*  
   <div className="d-md-flex d-none justify-content-md-between justify-content-sm-center align-content-center border-bottom border-2 my-2 bg-dark text-light p-3 rounded-3">
    <div className="col-2 text-sm-center text-md-start align-self-center">
      <h1 className="h5 fw-bold">Order ID</h1>
    </div>
    <div className="col-2 align-self-center">
      <h1 className="h5 fw-bold">Created</h1>
    </div>
    <div className="col-3 align-self-center">
      <h1 className="h5 fw-bold">Customer</h1>
    </div>
    <div className="col-2 align-self-center">
      <h1 className="h5 fw-bold">Show details</h1>
    </div>
    <div className="col-2 align-self-center">
      <h1 className="h5 fw-bold">Status</h1>
    </div>
  </div> */}
                 
                 
                 {/* <div className="container "> */}
  <div className="row" >
    <div className="col-md-16 mx-auto">
      <table className="table bg-white rounded border">
        <thead>
          <tr>
            <th scope="col-3">#</th>
            <th scope="col-4">FirstName</th>
            <th scope="col-4">LastName</th>
            <th scope="col-4">Phone</th>
            <th scope="col-4">Created AT</th>
            <th scope="col-4">SUM TOTAL</th>
          </tr>
        </thead>


        <tbody>
                 
                 
                 {ordersData.length && ordersData.map((order) => 
                 
                    // <OrderCard order={order}  key={order._id}  product={product} user={user} />
                    

          <tr>
            <th scope="row"></th>
            <td>{order.userId && order.userId.name}</td>
            <td>{order.userId && order.userId.lastName}</td>
            <td>{order.userId && order.userId.phone}</td>
     
            <td>{order.createdAt}</td>
             <td>{order.sum}</td>
          </tr>
          

                    ) }
                    
        </tbody>
      </table>
    </div>
  </div>
{/* </div> */}

             </div>
            }        
        </div>

    )
}

export default OrderList
