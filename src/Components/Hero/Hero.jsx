import "./Hero.css"
import introqz from "../../Assets/img/youtubeqz.png"

function Hero() {
    return (
        <div className="Hero">

            <div className="hero hero__container">

                <div>

                <h2 className="hero__title">Biznesingizni keyingi bosqichga
                olib chiqing</h2>

                <p className="hero__text">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>

                <a className="hero__link" href="#">Xizmatlar bilan tanishish</a>

                </div>


                <img src={introqz} alt="qz" width="458" height="258"/>

            </div>

        </div>
    )
}

export default Hero;