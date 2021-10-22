import "./Home.css";
import Category from "./Category";
import Product from "./Products";
import Viwedprod from "./Viwedprod";
import {FaBeer,} from 'react-icons/fa';
import {IoCloseOutline} from "react-icons/io5"

const Home = () => {
    return (
        <div className="container Home">
            <div className="Banner">
                <div className="cover-banner"></div>
                <div className="logo-banner">
                    <img src="https://web.grandcandy.am/static/media/Artboard%201.081c95da.svg" alt=""/>
                </div>
            </div>
            <Category/>
            <Product/>
            <Viwedprod/>

        </div>
    )
}
export default Home