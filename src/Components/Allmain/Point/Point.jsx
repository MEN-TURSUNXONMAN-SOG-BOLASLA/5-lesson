import "./Point.css"
import bolatext from "../../../Assets/img/textbola.png"
import qz6 from "../../../Assets/img/6taqz.png"
import bolan from "../../../Assets/img/noutbola.png"
import kubok from "../../../Assets/img/kubok.png"
import notboy from "../../../Assets/img/notboy.png"

function Point() {
    return (
        <div className="Point">

            <div className="point__container">

                <div>

                    <h3 className="point__title">Biz qanday ishlaymiz?</h3>

                    <p className="point__text">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>

                </div>

                <ul className="point__list">

                    <li className="point__item">


                        <img src={bolatext} alt="rasm" width="300" height="278"/>

                        <div className="point__div">

                        <h1 className="point__title2" >Talablarni aniqlab chiqamiz</h1>

                        <p className="point__text3">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>

                        </div>

                    </li>
                    <li className="point__item">

                        <img src={qz6} alt="rasm" width="300" height="224"/>

                        <div className="">

                        <h1 className="point__title2" >Bir necha yechimlarni taklif qilamiz</h1>

                        <p className="point__text2">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>

                        </div>

                    </li>
                    <li className="point__item">

                        <img src={bolan} alt="rasm" width="300" height="258"/>

                        <div className="point__div">

                        <h1 className="point__title2" >Loyiha uchun vaqt belgilaymiz</h1>

                        <p className="point__text2">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>

                        </div>

                    </li>
                    <li className="point__item">

                        <img src={kubok} alt="rasm" width="300" height="171"/>

                        <div className="">

                        <h1 className="point__title2" >A’lo sifat bilan bajarib topshiramiz</h1>

                        <p className="point__text2">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>

                        </div>

                    </li>
                    <li className="point__item">

                        <img src={notboy} alt="rasm" width="300" height="232"/>

                        <div className="point__div">

                        <h1 className="point__title2" >Qo’llab-quvvatlab boramiz</h1>

                        <p className="point__text2">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>

                        </div>

                    </li>

                </ul>

                <a className="point__link" href="#">Buyurtma bering</a>

            </div>

        </div>
    )
}

export default Point