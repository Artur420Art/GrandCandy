import './Header.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from 'react';
import {FaBeer,} from 'react-icons/fa';
import {IoCloseOutline, BsSearch} from "react-icons/io5"
import {IoMdSearch} from "react-icons/io"
import {HiOutlineChevronDown} from "react-icons/hi"
import {GrCart} from "react-icons/gr"
import {AiOutlineMenu} from "react-icons/ai"

const Header = () => {
    const [opening, setOpening] = useState(false);
    const [height, setHeight] = useState(0);
    const [openSignup, setOpenSignup] = useState(false);
    const [popup, setPopup] = useState(false);
    const [amount, setAmount] = useState(0)
    const [cardWidth, setCardWidth] = useState(0)
    const [cardOut, setCardOut] = useState(false);
    const [opacitySignUp, setOpacitySignUp] = useState(0);
    const [burgOpen, setBurgOpen] = useState(false);
    const [isBurgOpening, setIsBurgOpening] = useState(false);
    const [prodOpen, setProdOpen] = useState(false)
    // const styleBurg = {
    //     width: BurgWidth +"px"
    // }

    const styleCard = {
        width: cardWidth + "px"
    }
    const styleSignUp = {
        opacity: opacitySignUp + "px",
        transition: '1s'
    }
    const styleHeight = {
        height: height + 'px',
    }

    function openSearchPopup() {
        setTimeout(() => {
            setHeight(250);
        }, 200)
        setPopup(true);
        setCardOut(!cardOut);
        setCardWidth(0)
        document.body.style.overflow = 'visible';

    }

    function closePopupSearch() {
        setTimeout(() => {
            setPopup(false);
        }, 800)
        setHeight(0);
    }

    const openCardWindow = (widthSize) => {
        if (widthSize != 0) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
        setCardOut(!cardOut);
        setCardWidth(widthSize)
    }

    const openSignUpClick = () => {
        setOpenSignup(!openSignup);
        setOpacitySignUp(Number(!openSignup));
    }


    return (
        <header>
            {popup == true &&
            <div>
                <div className="search-popup" style={styleHeight} >
                    <div className="container">
                        <div className="top-search">
                            <img src="https://web.grandcandy.am/static/media/logo.8bb796d0.svg" alt=""/>
                            <span><IoCloseOutline onClick={closePopupSearch}/></span>
                        </div>
                        <div className="middle-search">
                            <div className="search-input">
                                <span className="search-icon"><IoMdSearch/></span>
                                <input type="text" placeholder='Seach'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search-overline" onClick={closePopupSearch}>

                </div>
            </div>
            }
            <div className="card-popup" style={styleCard}>
                <span onClick={event => openCardWindow(0)}><IoCloseOutline/></span>
                <div className="bag-inside">
                    <span>Total amount: {amount} AMD</span>
                    <div className="btn-parent">
                        <button className="sign-in-btn">
                            <div className="hover-btn-sign-in"></div>
                            <div className="text-btn-sign-in">
                                Go to checkout
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            {cardOut &&
            <div className="out-bag" onClick={event => openCardWindow(0)}>

            </div>
            }
            {openSignup &&
            <div>
                <div className="sign-up-popup" style={styleSignUp}>
                   <img src="https://web.grandcandy.am/static/media/sun-sm.5bb71f12.png" alt=""/>
                            <div className="centr-content">

                            <div className="sign-in-parag">
                                <h3>Sign in</h3>
                                <p>Please enter your email or phone number and password to sign in into your account</p>
                            </div>
                                <div className="sign-in-inputs">
                                    <div><input placeholder="Email or phone number" /></div>
                                    <div><input placeholder="password" type="password" /></div>
                                    <span>Forgot password?</span>
                                   </div> 
                                    <button className="web-">Sign in</button>
                                
                                <div className="reg">
                                    <span>Don't have an account?</span>
                                    <button className="sign-up-btn">Sign up</button>
                                </div>
                            </div>
                </div>
                <div className="sign-up-popup-outline" onClick={openSignUpClick}>

                </div>
            </div>
            }
            <div className='container none_container'>

                <div className="header-top">

                    <div>
                        <div className="item-top-h">
                            <span>Frequently asked questions</span>
                        </div>
                        <div className="item-top-h">
                            <span>General terms and conditions</span>
                        </div>
                        <div className="item-top-h">
                            <span>Delivery and return</span>
                        </div>
                        <div className="item-top-h">
                            <span>Privacy policy</span>
                        </div>
                        <div className="item-top-h" onClick={event => setOpening(!opening)}>
                            <div>
                                <span className='default-img'><img
                                    src="https://web.grandcandy.am/static/media/ic_english.5dd4b8d6.svg" alt=""/></span>
                                <span> English</span>
                                <span> <HiOutlineChevronDown/></span>
                            </div>
                            {opening == true &&
                            <div className="popup-lang">
                                <ul>
                                    <li><img src="https://web.grandcandy.am/static/media/ic_armenian.05a925ba.svg"
                                             alt=""/> <span>Հայերեն</span></li>
                                    <li><img src="https://web.grandcandy.am/static/media/ic_russian.1e6b8718.svg"
                                             alt=""/> <span>Русский</span></li>
                                </ul>
                            </div>
                            }

                        </div>
                    </div>
                </div>
                <div className=" header-menu">
                    <div className='item-menu'>
                        <div>
                            <img src="https://web.grandcandy.am/static/media/logo.8bb796d0.svg" alt=""/>
                        </div>
                        <div className='ul-menu'>
                            <ul>
                                <li className='active-menu'>Home</li>
                                <li>Products

                                </li>
                                <li>Abouts</li>
                                <li>Stores</li>
                                <li>How its made</li>
                                <li>Contacts us</li>
                            </ul>
                        </div>
                    </div>
                    <div className='item-menu'>
                        <div onClick={openSearchPopup}>
                            <span><IoMdSearch/></span>
                        </div>
                        <div>
                            <span onClick={event => openCardWindow(500)}><GrCart/></span>
                        </div>

                        <div>
                            <button className="sign-in-btn web-btn" onClick={openSignUpClick}>
                                <div className="hover-btn-sign-in"></div>
                                <div className="text-btn-sign-in">
                                    Sign in
                                </div>
                            </button>
                            <span className="burg" onClick={event=>setIsBurgOpening(true)}><AiOutlineMenu/></span>
                        </div>
                    </div>
                    {
                        isBurgOpening &&
                        <div className="burg-menuOpen">
                           <span className="close-burg" onClick={event => setIsBurgOpening(false)}>
                                <IoCloseOutline/>
                           </span>
                            <button className="sign-in-btn">
                                <div className="hover-btn-sign-in"></div>
                                <div className="text-btn-sign-in">
                                    Sign in
                                </div>
                            </button>
                            <ul>
                                <li className='active-menu'>Home</li>
                                <li>Products</li>
                                <li>Abouts</li>
                                <li>Stores</li>
                                <li>How its made</li>
                                <li>Contacts us</li>
                            </ul>
                            <ul>
                                <li>Frequently asked questions</li>
                                <li>General terms and conditions</li>
                                <li>Delivery and return</li>
                                <li>Delivery and return</li>
                                <li>Privacy policy</li>
                            </ul>

                        </div>
                    }
                </div>
            </div>

        </header>
    )
}
export default Header