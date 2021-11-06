import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch, faShoppingBasket, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {GrCart} from "react-icons/gr"

const prod = [
    {
        id: 1,
        name: "Panda dragee 150 g",
        descriptions: "Milk dragee. Weight - 150 g",
        img: "https://api.grandcandy.am/api/product/getImage/1632463627821WNERvGYzMJIgMbHAVpdl430179164.jpg/1200/1200",
        price: 600
    },
    {
        id: 2,
        name: "Squirrel dragee 150 g",
        descriptions: "Nut dragee. Weight - 150 g",
        img: "https://api.grandcandy.am/api/product/getImage/1632464186751gQFmovOKBFCWJZVYVdok12834990.jpg/1200/1200",
        price: 600
    },
    {
        id: 3,
        name: "Bear dragee 150 g",
        descriptions: "Chocolate dragee.Weight - 150 g.",
        img: "https://api.grandcandy.am/api/product/getImage/1632467868028ZMLTsSWfKpREznxjNvMD926691354.jpg/400/400",
        price: 600
    },
    {
        id: 4,
        name: "Rabbit dragee 150 g",
        descriptions: "NPeanut dragee. Weight - 150 g.",
        img: "https://api.grandcandy.am/api/product/getImage/1632464208775oUDKTBAOaMQsTPDsquRp1064583490.jpg/1200/1200",
        price: 600
    },
    {
        id: 5,
        name: "Cow dragee 150 g",
        descriptions: "Cream dragee. - 150 g",
        img: "https://api.grandcandy.am/api/product/getImage/1632467901860zwYokBocNbVTKrwZJEmf71446419.jpg/400/400",
        price: 600
    },
    {
        id: 6,
        name: "Cipollino lollipop with sticks",
        descriptions: "Lollipop with apple, orange, lemon, cherry, cola,...",
        img: "https://api.grandcandy.am/api/product/getImage/1632292968043sOeOzfRUeorLFBolqqLi1247412855.jpg/400/400",
        price: 50
    },
    {
        id: 7,
        name: "\"Sandwich\" vanilla ice - cream",
        descriptions: "Vanilla plombir with chocolate biscuits...",
        img: "https://api.grandcandy.am/api/product/getImage/1632294206534BAFByOHBnWRZroCFpfIR969062467.jpg/400/400",
        price: 140
    },
    {
        id: 8,
        name: "Balloon",
        descriptions: "Balloon. Size - 14",
        img: "https://api.grandcandy.am/api/product/getImage/1631369797037sVuscQNcqnQntSpscQpx1442179635.jpg/400/400",
        price: 70
    },
    {
        id: 9,
        name: "Vanilla donut",
        descriptions: "Donut with vanilla cream. Weight - 78 g.",
        img: "https://api.grandcandy.am/api/product/getImage/1632901063563HzHTrgGxiHtHYuGNQRFf944201781.jpg/400/400",
        price: 110
    },
    {
        id: 10,
        name: "\"Plombir\" crème brûlée ice - cream",
        descriptions: " Crème brûlée ice - cream in waffle cup.",
        img: "https://api.grandcandy.am/api/product/getImage/1631369315520cPSaPQOuKYnNfOnpebDK196239309.jpg/400/400",
        price: 100
    },

]

function ProductItem(props) {
    return (
        <div className="item-product">
            <img src={props.image} alt=""/>
            <div className="product-title">
                {props.title}
            </div>
            <div className="product-description">
                {props.descriptions}
            </div>
            <div className="bottom-bar-item">
                <div className="price-item">
                    <span>{props.price} AMD / pcs</span>
                </div>
                <div className="card-btn">
                    <div className="sign-in-btn">
                        <div className="hover-btn-sign-in"></div>
                        <div className="text-btn-sign-in">
                            <GrCart/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Product = () => {
    return (
        <div className="Products">
            <h1 className='title'>Most popular products</h1>
            <div className="items-product">
                {prod.map((item) => (
                    <ProductItem title={item.name} image={item.img}
                                 descriptions={item.descriptions} price={item.price}/>
                ))}
            </div>
        </div>
    )
}
export default Product;