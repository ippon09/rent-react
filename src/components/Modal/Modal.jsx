import crossIcon from "./close.png";
import random_icon from "../../assets/images/2k/2k_1/1.jpg";
import "./style.sass";
import OfferItem from "../OfferItem/OfferItem";
import { useState, useEffect, useRef } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export default function Modal({
  isOpen,
  onClose,
  room,
  photos,
  short_descr,
  equipment,
  address,
  price,
  variant,
}) {
    console.log(isOpen)
  useEffect(() => {
    if (isOpen) {
      // Создаем новый экземпляр Swiper
      const swiper = new Swiper(".swiper", {
        spaceBetween:20,
        grabCursor:true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        },
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      });
    }
  }, [isOpen]); // Зависимость от isOpen




  return (

    <>
      {isOpen && (
        <div className="modal">
          <div onClick={(e) => onClose()} className="modal_wrapper ">
            <div
             onClick={(e) => e.stopPropagation()} 
             className="modal_content">
              <div className="modal_photo swiper ">
                <div className="swiper-wrapper">

                  {photos.map((photo,index) => (
                    <img key={index} className="modal_img swiper-slide" src={photo} />
                  ))}

                </div>
                <div className="custom-swiper-button-prev"></div>
                <div className="custom-swiper-button-next"></div>
              </div>
              <div className="modal_description">
                <p className="modal_description_room">{room}</p>
                <p className="modal_description_descr">{short_descr}</p>
                <p className="modal_description_equipment">{equipment}</p>
                <p className="modal_description_address">{address}</p>
                <p className="modal_description_price">{price}</p>
              </div>

              <button onClick={() => onClose()} className="modal_close_btn">
                <img className="cross_img" src={crossIcon} alt="" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
