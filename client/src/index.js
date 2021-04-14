import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./JS/store/store";

import 'bootstrap/dist/css/bootstrap.min.css';

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      
    </Provider>.
    <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>

    <link rel="stylesheet" href="carousel.css"/>
  </BrowserRouter>,
  
  document.getElementById("root")
);
