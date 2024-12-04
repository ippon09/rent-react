import sale_icon from './sale.png'
import './style.sass'
export default function OfferTitle(){
    return(
        <div className="offer_title">
            <div className="container">
                 <h1 id="main_title" className="main_title">Найди Свое Место</h1>

        <div className="sale_block ">
            <img className="sale_img" src={sale_icon} alt=""/>
            <p className="sale_title"> ЗИМНЯЯ АКЦИЯ !!! </p>
            <p className="sale_subtitle">Любая свободная квартира после 19.00</p>
            <p>1500 рублей (для пары)</p>
        </div>
            </div>
        </div>
    )
}