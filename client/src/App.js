import { Route, Switch } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Errors from "./pages/Errors";
import Profile from "./pages/Profile/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import PrivateRoute from "./router/PrivateRoute";
import Navbar from "./Components/Navbar/Navbar";

// import Footer from "./Components/Footer";

import { currentUser } from "./JS/actions/user";

import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import Acceuil from "./pages/Acceuil";
 import ProductList from "./Components/productList/ProductList";
import Admindashbored from "./Components/admin/admindashbored/Admindashbored";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import ProductListAdmin from "./Components/admin/Product/ProductListAdmin";
import GererProduct from "./Components/admin/Product/GererProduct";
import PrivateRouteAdmin from "./router/PriveteRouterAdmin";
// import ContactUs from "./pages/ContactUs";



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  } );

  return (
    <div className="App">

     
      <Navbar />
      <Switch>
        <Route exact path="/" component={Acceuil} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        {/* <Route path="/contactUS" component={ContactUS} /> */}
        <PrivateRoute path="/productdetails/:id" component={ProductDetails} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRouteAdmin path="/Admindashbored" component={Admindashbored} />
        <PrivateRoute path="/productListAdmin" component={ProductListAdmin} />
        <PrivateRoute path="/(addProduct|editProduct)" component={GererProduct} />

        

                                                                                                                                                                                                                         
        <Route path="/productList" component={ProductList} />
        <Route path="/*" component={Errors} />
      </Switch>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
