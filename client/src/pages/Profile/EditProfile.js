import React, { useEffect, useState } from "react";
import { Button,Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { updateUser } from "../../JS/actions/user";
import "./Profile.css"

const EditProfile = ({history}) => {

     const handlChange = (e) =>
    {
        setUser({ ...user, [e.target.name]: e.target.value})
    }

    const userReducer = useSelector(state => state.userReducer.user)

    const dispatch = useDispatch()
    const [user, setUser] = useState({ name:"",lastName:"", email:"", phone:0 });


    useEffect(() => {
          setUser(userReducer)
    }, [ userReducer]);

    

    return (
         <div className="container" style={{paddingTop:"5%"}}>
            <Form>
                <Form.Group >
                    <Form.Label>Name</Form.Label>

                    <Form.Control type="text" placeholder="Enter name"
                    name="name" value={user?.name} 
                    onChange={ handlChange } 
                    />
                    <Form.Text className="text-muted">
                        name is required
                    </Form.Text>
                </Form.Group>

                <Form.Group >
                    <Form.Label>LastName</Form.Label>

                    <Form.Control type="text" placeholder="Enter  lastname"
                    name="lastName" value={user.lastName} 
                    onChange={ handlChange } 
                    />
                    <Form.Text className="text-muted">
                        lastname is required
                    </Form.Text>
                </Form.Group>

                <Form.Group >
                    <Form.Label>Email address</Form.Label>

                    <Form.Control type="text" placeholder="Enter email"
                    name="mail" value={user.email} 
                    onChange={handlChange} 
                    />
             

                    <Form.Text className="text-muted">
                        mail is required
                    </Form.Text>
                </Form.Group>

                
                <Form.Group>
                    <Form.Label>Enter phone </Form.Label>

                    <Form.Control type="number" placeholder="enter phone"
                    name="phone" value={user.phone} 
                    onChange={handlChange} 
                    />

                </Form.Group>
                    <div>
                   
                        <Button style={{width:"100px"}}
                        onClick={()=>{ dispatch(updateUser(user._id, user)) ; history.push("/Profile")} } > Update</Button>    
                         
                          
                    </div>              
            </Form>
        </div>
    )
}

export default EditProfile
