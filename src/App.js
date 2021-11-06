import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import {BrowserRouter, Redirect} from "react-router-dom";
import { Route} from "react-router";
import ProductItem from "./ProductItem/ProductItem";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
                <Route exact path='/'
                   component={()=>(<Redirect to='/home'/>)}/>
                <Route path='/home' component={Home}/>
                <Route path='/product' component={ProductItem}/>
                <Route path='/category/:id' component={ProductItem}/>
            <Footer/>
        </BrowserRouter>

    </div>
  );
}

export default App;
