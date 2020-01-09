import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import MainPage from "./component/main_page/MainPage";
import ProductPage from "./component/product_page/ProductPage";
import Logo from "./component/Logo";
import AddProduct from "./component/upload_product/AddProduct";
import {Switch} from "react-bootstrap";


function App() {
    return (
        <Router>
            <div className="App">
                <Logo/>
                <Switch>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/product/:id" exact component={ProductPage}/>
                    <Route path="/add" exact component={AddProduct}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
