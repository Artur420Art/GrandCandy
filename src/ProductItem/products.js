import {GrCart} from "react-icons/gr";

const ProductsCategories = (props) => {


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

    return (
        <div className="products-categories">
            <div className="items-product">
                {props.products.map((item) => (
                    <ProductItem title={item.name} image={item.img}
                                 descriptions={item.descriptions} price={item.price}/>
                ))}
            </div>
        </div>
    )
}
export default ProductsCategories;