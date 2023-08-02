import "./Servisec.css"
import verbsaytqz from "../../../Assets/img/qzxat.png"
import qzbot from "../../../Assets/img/newbot.png"
import tel from "../../../Assets/img/tel.png"
import bolaqz from "../../../Assets/img/bolaqz.png"
import treding from "../../../Assets/img/treinding.png"

function Servisec() {
    return (
        <div className="Services">
            
            <div className="services__container">

                <div>

                    <h1 className="title">Xizmatlar</h1>

                    <p className="text">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>

                </div>


                <ul className="services__list">

                    <li className="services__item">

                        <img src={verbsaytqz} alt="sas" width="202" height="130"/>
                        <h3 className="services__title">Vebsayt tuzish</h3>
                        <p className="services__text">lorem ipsum</p>

                    </li>
                    <li className="services__item">

                        <img src={qzbot} alt="sas" width="222" height="130"/>
                        <h3 className="services__title">Telegram bot</h3>
                        <p className="services__text">lorem ipsum</p>

                    </li>
                    <li className="services__item">

                        <img src={tel} alt="sasa" width="176" height="130"/>
                        <h3 className="services__title">SMM</h3>
                        <p className="services__text">lorem ipsum</p>

                    </li>
                    <li className="services__item">

                        <img src={bolaqz} alt="tt" width="178" height="130"/>
                        <h3 className="services__title">Grafik dizayn</h3>
                        <p className="services__text">lorem ipsum</p>

                    </li>
                    <li className="services__item">

                        <img src={treding} alt="rasm" width="169" height="130"/>
                        <h3 className="services__title">CRM tizimlar</h3>
                        <p className="services__text">lorem ipsum</p>

                    </li>

                </ul>

                <a className="Services__link" href="#">Buyurtma berish</a>
                <a className="Services__link2" href="#">Xizmatlar sahifasiga otish</a>

            </div>

        </div>
    )
}

export default Servisec;