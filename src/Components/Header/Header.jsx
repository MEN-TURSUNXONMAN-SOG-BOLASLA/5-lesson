import "./Header.css";
import logo from "../../Assets/img/pixerlogo.svg"


function Header() {
    return (
        <div className="head">

        <div className="header header__container">
            <img src={logo} alt="logo" width="58" height="20"/>

            <ul className="header__list">

                <li className="header__item">
                    <a className="header__link" href="#">Bosh sahifa</a>
                </li>
                <li className="header__item">
                    <a className="header__link" href="#">Xizmatlar</a>
                </li>
                <li className="header__item">
                    <a className="header__link" href="#">Portfolio</a>
                </li>
                <li className="header__item">
                    <a className="header__link" href="#">Jamoa</a>
                </li>
                <li className="header__item">
                    <a className="header__link" href="#">Blog</a>
                </li>
                <li className="header__item">
                    <a className="header__link" href="#">Kontaktlar</a>
                </li>
                <li className="header__item">
                    <a className="header__link-number" href="tel:+998909213711">+998 90 921 37 11</a>
                </li>

            </ul>
        </div>

        </div>
    )
}

export default Header;