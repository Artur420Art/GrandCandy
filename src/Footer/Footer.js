import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className="top-footer">
                    <div>
                        <ul>
                            <li>
                                <img src="https://web.grandcandy.am/static/media/logo_md.1ee0df90.svg" alt=""/>
                            </li>
                            <li>The sweetest candy shop in Armenia</li>
                            <li className='mobile-version-icons'>
                                <img src="https://web.grandcandy.am/static/media/ios.860223a0.svg" alt=""/>
                                <img src="https://web.grandcandy.am/static/media/Google_Play.07a1f9cb.svg" alt=""/>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Home</li>
                            <li>Products</li>
                            <li>About us</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Frequently asked questions</li>
                            <li>General terms and conditions</li>
                            <li>Delivery and return</li>
                            <li>Privacy policy</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Find us in social</li>
                            <li>
                                <img src="https://web.grandcandy.am/static/media/facebook.71e6bf26.svg" alt=""/>
                                <img src="https://web.grandcandy.am/static/media/instagram.0d36faff.svg" alt=""/>
                                <img
                                    src="data:image/png;base64,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"
                                    alt=""/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bottom-footer">
                    <div className="creditcards">
                        <img src="https://web.grandcandy.am/static/media/visa.9f83088e.svg" alt=""/>
                        <img src="https://web.grandcandy.am/static/media/mastercard.a69c185d.svg" alt=""/>
                        <img src="https://web.grandcandy.am/static/media/maestro.53ab1d66.svg" alt=""/>
                        <img src="https://web.grandcandy.am/static/media/ic_american.e5bf0c8d.svg" alt=""/>
                        <img src="https://web.grandcandy.am/static/media/idram.cf9755b7.svg" alt=""/>
                        <img src="https://web.grandcandy.am/static/media/telcell.10d7e745.svg" alt=""/>
                    </div>
                    <div className="powerd">
                        <span>Powerd by</span><img src="https://web.grandcandy.am/static/media/armboldmind.86600446.png"
                                                   alt=""/>
                    </div>
                    <div className="footer-right">
                        <span>© 2021 Grand Candy. All Rights Reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;