import "./ProductItem.css"
import NavProducts from "./nav";
import ProductsCategories from "./products";
import {useEffect, useState} from "react";
import {FaArrowLeft, IoBarChart, IoBug, IoIosArrowDropleft, IoIosArrowDropright} from "react-icons/all";
import {IoCloseOutline} from "react-icons/io5"
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useParams} from "react-router";
import {AiOutlineMenu} from "@react-icons/all-files/ai/AiOutlineMenu";
import {NavLink} from "react-router-dom";

const ProductItem = () => {
    const [prod, setProd] = useState([
        {
            id: 1,
            name: "\"Rakovie Sheiki\" chocolates",
            descriptions: "Chocolate pralines with peanut flavor.",
            img: "https://api.grandcandy.am/api/product/getImage/1636003898717iBDowaBZZVjLhBOygfFF1949320473.jpg/400/400",
            price: 2500,
            category_id: 1,
        },
        {
            id: 2,
            name: "\"Autumn\" chocolates",
            descriptions: "Chocolate pralines with peanut flavor.",
            img: "https://api.grandcandy.am/api/product/getImage/1635835862875WRehBTCuivqQHcjlxFlz261926894.jpg/400/400",
            price: 2210,
            category_id: 1,
        },
        {
            id: 3,
            name: "\"Summer\" chocolates",
            descriptions: "Glazed pralines with orange and peanut flavor.",
            img: "https://api.grandcandy.am/api/product/getImage/1631107891978GhOUTbRShERLVgdFaPNj2096543509.jpg/400/400",
            price: 2200,
            category_id: 1,
        },
        {
            id: 4,
            name: "\"Holiday\" pomade chocolate",
            descriptions: "Pomade chocolates with fruits flavors.",
            img: "https://api.grandcandy.am/api/product/getImage/1633349140262hyKNbDEfxqEcRQmpPdAI652728558.jpg/400/400",
            price: 2500,
            category_id: 1,
        },
        {
            id: 5,
            name: "\"Patriot\" Armenian chocolate bar",
            descriptions: "Chocolate bar with roasted peanut, caramel",
            img: "https://api.grandcandy.am/api/product/getImage/1631369289986fhqmVPZWcCuLRYpkNAhU824873030.jpg/400/400",
            price: 4180,
            category_id: 1,
        },
        {
            id: 6,
            name: "\"Brittle in milk chocolate\"",
            descriptions: "\"Brittle in milk chocolate\"",
            img: "https://api.grandcandy.am/api/product/getImage/1631108404634ULilmjDPTBHGtLSiwKLu1852884358.jpg/400/400",
            price: 2550,
            category_id: 1,
        },
        {
            id: 7,
            name: "Moscow lights chocolates",
            descriptions: "Creamy chocolates with crispy rice",
            img: "https://api.grandcandy.am/api/product/getImage/1631369894796hwnJRyldoDUOutfoVqiN426625586.jpg/400/400",
            price: 3080,
            category_id: 1,
        },
        {
            id: 8,
            name: "\"Tropicana\" chocolates",
            descriptions: "Desiccated coconut, covered with milk",
            img: "https://api.grandcandy.am/api/product/getImage/1631110363324irHWKqQkBWCoUIkamvPL1517689402.jpg/400/400",
            price: 3190,
            category_id: 1,
        },
        {
            id: 9,
            name: "\"Truffle Mix\" creamy chocolates",
            descriptions: "\"Evening Yerevan\" - chocolates with hazeln",
            img: "https://api.grandcandy.am/api/product/getImage/1631255281318kXZkKznmhJilDjzDtsrR1624173016.jpg/400/400",
            price: 4300,
            category_id: 1,
        },
        {
            id: 10,
            name: "\"Truffle\" creamy chocolates",
            descriptions: "Creamy chocolates, covered with cocoa",
            img: "https://api.grandcandy.am/api/product/getImage/1631268608631NmophSwBuRxWDxEASpXQ1912329873.jpg/400/400",
            price:4100,
            category_id: 1,
        },
        {
            id: 11,
            name: "\"Milky Truffle\" creamy chocolates",
            descriptions: "Creamy chocolates, covered with milk chocolate.",
            img: "https://api.grandcandy.am/api/product/getImage/1631691452306mdgaKFHexixsOwVCCghb1112213262.jpg/400/400",
            price: 3200,
            category_id: 1,
        },
        {
            id: 12,
            name: "\"Truffle Vecherniy Zvon\" creamy chocolates",
            descriptions: "Creamy chocolates with peanut.",
            img: "https://api.grandcandy.am/api/product/getImage/1631268619721HaPuEmdMDdNcZYGoMVhV1285538164.jpg/400/400",
            price: 4100,
            category_id: 1,
        },
        {
            id: 13,
            name:"\"Truffle Vecherniy Zvon\" creamy chocolates",
            descriptions: "Creamy chocolates with peanut.",
            img: "https://api.grandcandy.am/api/product/getImage/1631268619721HaPuEmdMDdNcZYGoMVhV1285538164.jpg/400/400",
            price: 2860,
            category_id: 1,
        },
        {
            id: 1,
            name: "\"Mix\" pastry",
            descriptions: "Pastries` Night and Day, Shocco, Honey, Anthill, Drunk Cherry,",
            img: "https://api.grandcandy.am/api/product/getImage/1631777949836jdMlbGojNdSxCyjHCyPR1967559361.jpg/400/400",
            price: 2420,
            category_id: 2,
        },
        {
            id: 1,
            name: "\"Honey\" cake",
            descriptions: "Cake with honey, condensed milk and butter cream.",
            img: "https://api.grandcandy.am/api/product/getImage/1631777871402mgIbNKxpbQjIYwAZXLKv1258317253.jpg/400/400",
            price: 2200,
            category_id: 2,
        },
        {
            id: 1,
            name: "\"Traditional\" gata",
            descriptions: "Gata with matsoun and sweet filling.",
            img: "https://api.grandcandy.am/api/product/getImage/1635830783599PqcNXvzsdePQkSkStMnO1521606453.jpg/400/400",
            price: 1400,
            category_id: 3,
        },
        {
            id: 2,
            name: "\"Gingerbread\" traditional",
            descriptions: "Cookies with the addition of honey and various spices.",
            img: "https://api.grandcandy.am/api/product/getImage/1631691536911twnsGLNLAFGCiKzBJihg1822442452.jpg/400/400",
            price: 720,
            category_id: 3,

        },
        {
            id: 3,
            name: "Bear dragee 150 g",
            descriptions: "Chocolate dragee.Weight - 150 g.",
            img: "https://api.grandcandy.am/api/product/getImage/1632467868028ZMLTsSWfKpREznxjNvMD926691354.jpg/400/400",
            price: 600,
            category_id: 3,

        },
        {
            id: 4,
            name: "\"Donut round\"",
            descriptions: "Donut with vanilla cream.",
            img: "https://api.grandcandy.am/api/product/getImage/1635420976170CDiOqMOfuPBZvZbRAznD351789288.jpg/400/400",
            price: 60,
            category_id: 4,

        },
        {
            id: 5,
            name: "\"Traditional\" gata",
            descriptions: "Gata with matsoun and sweet filling",
            img: "https://api.grandcandy.am/api/product/getImage/1635830814407RSxbrFKxpwqkBbOpTcQn1501922295.jpg/400/400",
            price: 470,
            category_id: 5,

        },
        {
            id: 10,
            name: "\"Plombir\" crème brûlée ice - cream",
            descriptions: " Crème brûlée ice - cream in waffle cup.",
            img: "https://api.grandcandy.am/api/product/getImage/1631369315520cPSaPQOuKYnNfOnpebDK196239309.jpg/400/400",
            price: 100,
            category_id: 6,
        },
        {
            id: 10,
            name: "\"Patriot\" Armenian chocolate bar",
            descriptions: "Chocolate bar with roasted peanut, caramel and nougat covered",
            img: "https://api.grandcandy.am/api/product/getImage/1631369183634kVrYCcRnQGzMqIUtUmbT137661433.jpg/400/400",
            price: 220,
            category_id: 8,
        },
        {
            id: 10,
            name: "\"Tarosik\"",
            descriptions: "Hard candy rose.Weight - 50 g",
            img: "https://api.grandcandy.am/api/product/getImage/1631369315520cPSaPQOuKYnNfOnpebDK196239309.jpg/400/400",
            price: 220,
            category_id: 9,
        },
        {
            id: 10,
            name: "\"Orange plombir\" wafers",
            descriptions: "Wafers with orange and plombir flavored fillings.",
            img: "https://api.grandcandy.am/api/product/getImage/1631259978735skgIOPLhCXoLNOdYKNso866455132.jpg/400/400",
            price: 1650,
            category_id: 10,
        },


    ])
    const [pageTitle, setPageTitle] = useState('Chocolate')
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState(false)
    const {id} = useParams()
    const handleChange = (event, value) => {
        setPage(value);
    };
    const [categoryNav, setCategoryNav] = useState(0);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0)
    const filteredOptions = prod.filter(item => item.category_id == id);
    useEffect(()=>{
        //pagination
        let perChunk = 12;
        if (filteredOptions.length >= perChunk) {
            let arr = filteredOptions.reduce((resultArray, item, index) => {
                const chunkIndex = Math.floor(index / perChunk)
                if (!resultArray[chunkIndex]) {
                    resultArray[chunkIndex] = [];
                }
                resultArray[chunkIndex].push(item)
                return resultArray
            }, [])
            setCount(arr.length);
            arr = arr[page - 1];
            setProducts(arr)
        }else{
            setProducts(filteredOptions)
        }
        //pagination
        //sort
    },filteredOptions)
    const filterProduct = (type)=>{
        let arr = []
        switch (type){
            case 'az':
                arr = products.sort(function(a,b){
                    if ( a.name < b.name ){
                        return -1;
                    }
                    if ( a.name > b.name ){
                        return 1;
                    }
                    return 0;
                });
                break;
            case 'za':
                arr = products.sort(function(a,b){
                    if ( a.name < b.name ){
                        return 1;
                    }
                    if ( a.name > b.name ){
                        return -1;
                    }
                    return 0;
                });
                break;
            case 'lh':
                arr = products.sort(function(a,b){
                    if ( a.price < b.price ){
                        return 1;
                    }
                    if ( a.price > b.price ){
                        return -1;
                    }
                    return 0;
                });
                break;
            case 'hl':
                arr = products.sort(function(a,b){
                    if ( a.price < b.price ){
                        return -1;
                    }
                    if ( a.price > b.price ){
                        return 1;
                    }
                    return 0;
                });
                break;
        }
        setProducts(arr);
    }
    const categories = [
        {id:1, name:'Chocolates'},
        {id:2, name:'Cake'},
        {id:3, name:'loose cookies'},
        {id:4, name:'Donuts and cocoa'},
        {id:5, name:'Dragee'},
        {id:7, name:'Ice cream'},

    ];
    const styleCategoriesNav = {
        width:categoryNav+'px'
    }
    //sort
    return (
        <div className="container productitems">
            <div className="heading-categories">
                <div>
                    <a href="http://localhost:3000/product" className={"link-color"}>Product </a>
                    <span>/</span>
                    <a href="http://localhost:3000/product">{pageTitle}</a>
                </div>

                <div className="choose-filtr" onClick={event => setFilter(!filter)}>
                    <span>Sort by</span>
                    <MdOutlineKeyboardArrowDown/>

                    {filter == true &&
                    <div className="sort-filter">
                        <div onClick={event => filterProduct('az')}>Alphabetical A-Z</div>
                        <div onClick={event => filterProduct('za')}>Alphabetical Z-A</div>
                        <div onClick={event => filterProduct('lh')}>Price low to height</div>
                        <div onClick={event => filterProduct('hl')}>Price height to low</div>
                    </div>
                    }
                </div>

            </div>
            <div className="burg-categories">
                <span onClick={event=>setCategoryNav(300)}><AiOutlineMenu/></span>
            </div>
            <div className="categories-navs" style={styleCategoriesNav}>
                <span onClick={event=>setCategoryNav(0)}><IoCloseOutline/></span>
                <div className="items-nav-cat">
                    {categories.map((item)=>(
                        <NavLink to={'/category/'+item.id}><div className={`item-cat ${item.id==id ? 'active-nav-cat' : ""}`}>{item.name}</div></NavLink>
                    ))}
                </div>
            </div>
            <div className="flex-categories">
                <NavProducts/>
                <div className="products-categories-container">
                    <ProductsCategories products={products}/>
                </div>
            </div>
            {count > 1 &&
            <div className="categories-pagination">
                <Stack spacing={2}>
                    <Pagination count={count} page={page} onChange={handleChange}/>
                </Stack>
            </div>
            }
        </div>


    )

}

export default ProductItem;