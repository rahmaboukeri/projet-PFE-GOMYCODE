import React,{useState,useEffect} from 'react'
import { Form,Button } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
// import { Link } from "react-router-dom";


import { addProduct, updateProduct } from '../../../JS/actions/actionProduct';


import "./GererProduct.css"



const GererProduct = ({ history }) => {


         const handlChange = (e) =>
    {
        setProduct({ ...product, [e.target.name]: e.target.value})
    }

    const isEdit = useSelector(state => state.productReducer.isEdit)
    const productReducer = useSelector(state => state.productReducer.product.productToFind)

    const dispatch = useDispatch()
    const [product, setProduct] = useState({ name:"", Price:0, description:"" });


    useEffect(() => {
        isEdit ? setProduct(productReducer) 
        :
         setProduct({ name: "", email: "", phone: 0 })
    }, [isEdit, productReducer]);

    
    
    return (
        <div className="container">
            <Form>
                <Form.Group >
                    <Form.Label>Name</Form.Label>

                    <Form.Control type="text" placeholder="Enter name"
                    name="name" value={product?.name} 
                    onChange={ handlChange } 
                    />
                    <Form.Text className="text-muted">
                        name is required
                    </Form.Text>
                </Form.Group>


                <Form.Group >
                    <Form.Label>Price</Form.Label>

                    <Form.Control type="number" placeholder="Enter email"
                    name="Price" value={product?.Price} 
                    onChange={handlChange} 
                    />
             

                    <Form.Text className="text-muted">
                     
                    </Form.Text>
                </Form.Group>

                
                <Form.Group>
                    <Form.Label>Enter Description </Form.Label>

                    <Form.Control type="text" placeholder="enter phone"
                    name="description" value={product?.description} 
                    onChange={handlChange} 
                    />

                </Form.Group>
                    <div>
                  

                       {   (!isEdit) ? 
                       <Button className="btn-icon" alt="add-icon"  
                        onClick={() => {dispatch(addProduct(product)) ; history.push("/ProductListAdmin") } }> Ajout</Button>
                       
                        :
                        <Button className="btn-icon"
                         onClick={()=>{ dispatch(updateProduct(product._id, product)) ; history.push("/")} }  > Edit </Button>   
                         
                        }  
                    </div>              
            </Form>
        </div>
    )
}

export default GererProduct