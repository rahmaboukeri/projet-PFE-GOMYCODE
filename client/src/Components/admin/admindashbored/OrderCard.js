import React from 'react'
// import { useDispatch } from "react-redux";
// import { Card,Button } from "react-bootstrap";

// import { getAllOrder, sumTotal } from '../../../JS/actions/actionOrder';
// import { Link } from "react-router-dom";
// import prod1 from "../../../assets/product/prod1.jpg";

const OrderCard = ({order}) => {
    

    return (
   <div>



<div className="container ">
  <div className="row" style={{width:"80%"}}>
    <div className="col-md-8 mx-auto">
      <table className="table bg-white rounded border">
      
        <tbody>
          <tr>
            <th scope="row">random()</th>
            <td>{order.userId && order.userId.name}</td>
            <td>{order.userId && order.userId.lastName}</td>
            <td>{order.userId && order.userId.phone}</td>
            <td>{order.createdAt}</td>
             <td>{order.sum}</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  </div>
</div>





  {/* <div className="d-md-flex d-sm-block justify-content-md-between justify-content-sm-center text-center border-bottom border-2 my-2 bg-light p-2 rounded-3">
    <div className="col-md-2 text-sm-center text-md-start align-self-center my-2">
      <h1 className="h6">{order._id}</h1>
    </div>
    <div className="col-md-2 text-sm-center text-md-start align-self-center my-2">
      <h1 className="h6"> {order.createdAt} </h1>
    </div>
    <div className="col-md-2 text-sm-center text-md-start align-self-center my-2">
      <h1 className="h6"> {order.userId && order.userId.name} </h1>
    </div>
    <div className="col-md-2 text-sm-center text-md-start align-self-center my-2">
      <h1 className="h6">{order.sum}</h1>
    </div>

  </div> */}


</div>

    )
}

export default OrderCard
