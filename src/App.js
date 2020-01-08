import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import MainPage from "./component/main_page/MainPage";
import ProductPage from "./component/product_page/ProductPage";


function App() {
    return (
        <Router>
            <div className="App">
              <Route path="/" exact component={MainPage}/>
              <Route path="/:id" exact component={ProductPage}/>
            </div>
        </Router>
    );
}

export default App;
