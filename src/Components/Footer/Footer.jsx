import "./Footer.css"
import logo from "../../Assets/img/telegram.svg"
import logo2 from "../../Assets/img/facebook.svg"
import logo3 from "../../Assets/img/instagram.svg"


function Footer() {
    return (
        <div className="Footer">

            <div className="footer__div footer__container">

                <div>

                    <h3 className="footer__copy">Copyright 2020</h3>

                    <p className="footer__Nullam">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar tincidunt.</p>

                </div>

                <ul>

                    <h3 className="footer__Sayt">Sayt sahifalari</h3>

                    <li className="footer__item"><a className="footer__link" href="#">Bosh sahifa</a></li>

                    <li className="footer__item"><a className="footer__link" href="#">Xizmatlar</a></li>

                    <li className="footer__item"><a className="footer__link" href="#">Portfolio</a></li>
                    
                    <li className="footer__item"><a className="footer__link" href="#">jamoa</a></li>

                    <li className="footer__item"><a className="footer__link" href="#">Blog</a></li>

                    <li className="footer__item"><a className="footer__link" href="#">Kontaktlar</a></li>

                </ul>

                <div>

                    <h3 className="footer__biz">Biz internetda</h3>

                    <ul className="footer__list">

                        <li className="footer__item">
                            <a className="footer__link2" href="https://telegram.com"><img className="imgf" src={logo} alt="tg" /> <span className="footer__tg">Telegram</span></a>
                        </li>

                        <li className="footer__item">
                            <a className="footer__link2" href="https://facebook.com"><img className="imgf" src={logo2} alt="fc" /> <span className="footer__fac">Facebook</span></a>
                        </li>

                        <li className="footer__item">
                            <a className="footer__link2" href="https://instagram.com"><img className="imgf" src={logo3} alt="ins" /> <span className="footer__insta">Instagram</span></a>
                        </li>

                    </ul>

                </div>

            </div>

        </div>
    )
}

export default Footer