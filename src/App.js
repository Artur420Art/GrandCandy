import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import { BrowserRouter} from "react-router-dom";
import { Route} from "react-router";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
                <Route path='/' component={Home}></Route>
                <Route path='/home' component={Home}></Route>
            <Footer/>
        </BrowserRouter>

    </div>
  );
}

export default App;
