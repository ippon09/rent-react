import OfferItem from "../OfferItem/OfferItem";
import variants from "../../data/variants.json";
import "./style.sass";
import Modal from "../Modal/Modal";
import { useState, useEffect } from "react";

import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export default function OffersItems() {
  const [modalInfoIsOpen, setModalInfoIsOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(null);

  const handleOfferItemClick = (variant) => {
    setSelectedVariant(variant);
    setModalInfoIsOpen(true);
  };

  // useEffect(() => {
  //   const Sswiper = new Swiper(".swiper1", {
  //     // Optional parameters
  //     loop: true,

  //     // If we need pagination
  //     pagination: {
  //       el: ".swiper-pagination",
  //     },

  //     // Navigation arrows
  //     navigation: {
  //       nextEl: ".custom-swiper-button-next1 ",
  //       prevEl: ".custom-swiper-button-prev1 ",
  //     },

  //     // And if we need scrollbar
  //     scrollbar: {
  //       el: ".swiper-scrollbar",
  //     },
  //   });
  // }, []);
  return (
    <div className="offers">
      <div className="container">
        <div className="offers_items">
          {variants.map((variant) => {
            return (
              <OfferItem
                key={variant.id}
                room={variant.room}
                shortDescr={variant.short_descr}
                shortPrice={variant.short_price}
                address={variant.address}
                photos={variant.photos}
                onClick={() => handleOfferItemClick(variant)}
              />
            );
          })}
        </div>
      </div>
      {selectedVariant &&
        variants.map((variant) => (
          <Modal
            price={selectedVariant.price}
            address={selectedVariant.address}
            equipment={selectedVariant.equipment}
            short_descr={selectedVariant.short_descr}
            room={selectedVariant.room}
            photos={selectedVariant.photos}
            isOpen={modalInfoIsOpen}
            onClose={() => setModalInfoIsOpen(false)}
            variant={selectedVariant}
          />
        ))}
      {/* {variants.forEach((variant)=>{          console.log(variant)        })} */}
      {variants.map((variant) => {
        console.log(variant);
      })}
    </div>
  );
}
