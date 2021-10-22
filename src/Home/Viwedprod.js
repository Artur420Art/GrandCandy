import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {GrCart} from "react-icons/gr";
import "../fonts/circle.534ec7d5.otf"
import "../fonts/Grand-Candy.9d7d7a8b.ttf"

const viwedproducts = [
    {
        id: 1,
        name: "Squirrel dragee 150 g",
        img: "https://api.grandcandy.am/api/product/getImage/1632464186751gQFmovOKBFCWJZVYVdok12834990.jpg/1200/1200",
        price: 600,
        descriptions: "Nut dragee. Weight - 150 g.",
    }
]

function ViwedprodList(props) {
    let iconStyles = { color: "#FF0000", fontSize: "1.1em" };
    return (
        <div className="items-product">
            <div className="item-product">
                <img src={props.image}/>
                <div className="product-title">
                    {props.title}
                </div>
                <div className="product-description">
                    {props.descriptions}
                </div>
                <div className="bottom-bar-item ">
                    <div className="price-item">
                        <span>{props.price} AMD / pcs</span>
                    </div>
                    <div className="card-btn">
                        <div className="sign-in-btn">
                            <div className="hover-btn-sign-in"></div>
                            <div className="text-btn-sign-in">
                              <GrCart />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Viwedprod = () => {
    return (
        <div className='viwedprod'>
            <h1 className='title'>Recently Viewed Products</h1>
            {viwedproducts.map((item) => (
                <ViwedprodList title={item.name} image={item.img}
                               descriptions={item.descriptions} price={item.price}/>
            ))}


        </div>
    )
}
export default Viwedprod