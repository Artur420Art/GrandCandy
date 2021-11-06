import {useState} from "react";
import {NavLink} from "react-router-dom";
import {useParams} from "react-router";

const NavProducts = () => {
    const [titleName, setTitleName]=useState("")
    const categories = [
        {id:1, name:'Chocolates'},
        {id:2, name:'Cake'},
        {id:3, name:'loose cookies'},
        {id:4, name:'Donuts and cocoa'},
        {id:5, name:'Dragee'},
        {id:6, name:'Ice cream'},
        {id:8, name:'Chocolate bars'},
        {id:9, name:'Hard candy'},
        {id:10, name:'Biscuits'},
        {id:11, name:'Wafers'},
        {id:12, name:'Coffee and Tea'},
        {id:13, name:'Fruit jelly and souffle'},
        {id:14, name:'Rahat - lokum'},
        {id:15, name:'Popcorn, salty sticks and nuts'},
        {id:16, name:'Toffee and nougat'},
        {id:17, name:'Chocolate cream and halva'},
        {id:18, name:'Cocoa products'},
        {id:19, name:'Flour and bread'},
        {id:20, name:'Exclusive products'},
        {id:21, name:'Other'},
    ]
    const { id } = useParams()

    return(
        <div className="nav-products">
            <div className="items-nav-cat">
                {categories.map((item)=>(
                    <NavLink to={'/category/'+item.id}><div className={`item-cat ${item.id==id ? 'active-nav-cat' : ""}`}>{item.name}</div></NavLink>
                ))}
            </div>
        </div>
    )
}
export default NavProducts