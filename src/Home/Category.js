const Category = () => {
    const CategoryAll = [
        {
            id: 1,
            name: "Chocolate",
            leftColor: 'rgb(249, 103, 118)',
            rightColor: 'rgb(238, 84, 157)',
            description: "51 products",
            img: "https://api.grandcandy.am/api/category/getImage/1630309396166UJNVbebhyIghXKwYugKq1804939357.jpg"
        },
        {
            id: 2,
            name: "Cake",
            leftColor: 'rgb(255, 197, 120)',
            rightColor: 'rgb(255, 143, 68)',
            description: "17 products",
            img: "https://api.grandcandy.am/api/category/getImage/1630311246821cUteVjPWwttkemPLczWk929411595.jpg/250/250"
        },
        {
            id: 1,
            name: "Loose cookies",
            leftColor: 'rgb(113, 223, 201)',
            rightColor: 'rgb(101, 185, 180)',
            description: "18 products",
            img: "https://api.grandcandy.am/api/category/getImage/1630391203794KPodgZeGvfvZpwUwsdYX1905721993.jpg/250/250"
        },
        {
            id: 1,
            name: "Donuts and cocoa",
            rightColor: 'rgb(223, 113, 175)',
            leftColor: 'rgb(212, 113, 223)',
            description: "4 products",
            img: "https://api.grandcandy.am/api/category/getImage/1631705746341UgExCbBmImVKUvhtNHIe754563766.jpg/250/250"
        },
        {
            id: 1,
            name: "Cake pieces",
            leftColor: 'rgb(50, 197, 220)',
            rightColor: 'rgb(101, 185, 180)',
            description: "33 products",
            img: "https://api.grandcandy.am/api/category/getImage/1630303559348fDvbQsxriodlzZiAMPbS1237338387.jpg/250/250"
        },
        {
            id: 1,
            name: "Dragee",
            leftColor: 'rgb(252, 159, 145)',
            rightColor: 'rgb(222, 81, 81)',
            description: "38 products",
            img: "https://api.grandcandy.am/api/category/getImage/1630305502754AJklGkgVlEbDJsAlQzRx1150164340.jpg/250/250"
        },
        {
            id: 1,
            name: "Assorted chocoloate",
            leftColor: 'rgb(146, 246, 173)',
            rightColor: 'rgb(71, 194, 87)',
            description: "45 products",
            img: "https://api.grandcandy.am/api/category/getImage/1630304303040TpJDifwAaVyBNbEYxEyB289102124.jpg/250/250"
        },
        {
            id: 1,
            name: "Ice-cream",
            leftColor: 'rgb(252, 234, 120)',
            rightColor: 'rgb(249, 204, 78)',
            description: "50 products",
            img: "https://api.grandcandy.am/api/category/getImage/1630398884359bxjdkQRWMaHfrBbqgsKH2134730836.JPG/250/250"
        },

    ]

    function Categories(props) {
        const styleItem = {
            background: `linear-gradient(to right, ${props.leftColor}, ${props.rightColor})`
        }
        return (
            <div className="item-category-top" style={styleItem}>
                <div className="info-top-category">
                    <h4>{props.title}</h4>
                    <span>{props.destinations}</span>
                </div>
                <div className="image-top-category">
                    <img src={props.image}/>
                </div>
            </div>
        )
    }

    return (
        <div className="Category">
            <h1 className='title'>Top categories</h1>
            <div className="categories-home">

                {CategoryAll.map((item) => (
                    <Categories leftColor={item.leftColor} rightColor={item.rightColor} title={item.name}
                                destinations={item.description} image={item.img}/>
                ))}
            </div>
            <div className="category-btn">
                <div className="sign-in-btn">
                    <div className="hover-btn-sign-in"></div>
                    <div className="text-btn-sign-in">
                        All Categories
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category