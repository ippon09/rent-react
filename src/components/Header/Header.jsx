import { useState, useEffect } from "react";
import "./style.sass";

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (scrollPosition >= 100) {
      document.getElementById("header_up").classList.add("low");
    }
    if (scrollPosition <= 100) {
      document.getElementById("header_up").classList.remove("low");
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect (() => {
      const btn = document.querySelector(".header_burger_menu ");
      const burgerMenu=document.querySelector('.header_menu')

      if (btn) {
        const fbtn = () => {
          burgerMenu.classList.toggle("close");
          btn.classList.toggle('open')
          console.log('clicked');
        };

        btn.addEventListener("click", fbtn);

        return () => {
          btn.removeEventListener("click", fbtn);
        };
      }
    },
    []);



  return (
    <header id="header_up" className="header ">
      <div className="container">
        <div className="navi">
          <div className="header_burger_menu ">
            <span></span>
          </div>
          <nav className="header_menu close">
            <ul className="navbar_list">
              <li id="one_room" className="navbar_item">
                {" "}
                СТУДИИ и ОДНОКОМНАТНЫЕ квартиры
              </li>
              <li id="two_room" className="navbar_item">
                {" "}
                ДВУХКОМНАТНЫЕ квартиры
              </li>
              <li className="navbar_item">Бронирование</li>
              <li className="navbar_item">Отчетные документы</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
