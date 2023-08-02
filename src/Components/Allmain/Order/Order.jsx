import "./Order.css"
import form from "../../../Assets/img/form.png"

function Order() {
    return (
        <div className="Order">

            <div className="order__container">

                <h3 className="order__title">Buyurtma berish</h3>

                <p className="order__text">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>

                <img className="order__img" src={form} alt="form" width="348" height="320"/>

            </div>

        </div>
    )
}

export default Order;