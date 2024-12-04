import random_icon from "../../assets/images/2k/2k_3/1.jfif";
import phone_icon from "../../assets/images/call.png";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "./style.sass";
import { useEffect } from "react";

export default function OfferItem({
  room,
  shortDescr,
  shortPrice,
  address,
  photos,
  onClick,
  isOpen,
  key,
}) {

  useEffect(() => {
    const swiperContainer = document.querySelector(".swiper1");
    if(swiperContainer){
  
      // Создаем новый экземпляр Swiper
      const sswiper = new Swiper(".swiper1", {
        grabCursor:true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".custom-swiper-button-next1",
          prevEl: ".custom-swiper-button-prev1",
        },
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      });
    }
  }, []); // Зависимость от isOpen






  return (
    <div key={key} onClick={onClick} data-index="" className="offers_item one_room">
      <div className="offer_photo swiper1 ">
        <div className="swiper-wrapper ">
          {photos.map((photo) => (
            <img className="offer_img swiper-slide" src={photo} alt="изб" />
          ))}
        </div>
        <div
          onClick={(e) => e.stopPropagation()}
          className="custom-swiper-button-prev1"
        ></div>
        <div
          onClick={(e) => e.stopPropagation()}
          className="custom-swiper-button-next1"
        ></div>
      </div>
      <div className="offer_descr">
        <p className="title">{room}</p>
        <div className="sub_title">
          <ol>
            <li className="descr">{shortDescr}</li>
          </ol>
        </div>
        <p className="apart_address">{address}</p>
        <a href="tel:89033760101">
          <img className="call_img" src={phone_icon} alt="" />
        </a>
        <a href="tel:81231231212" className="number">
          {shortPrice}
        </a>
      </div>
    </div>
  );
}
