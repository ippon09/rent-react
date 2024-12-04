import tg_icon from "./tg.png";
import whats_icon from "./whats.png";
import scroll_con from "./scroll.png";
import "./style.sass";

export default function Topphoto() {
  return (
    <section className="top_photo">
      <div className="top_info container ">
        <h1 className="top_info_title">
          Апартаменты "У Мамаева кургана" приветствуют вас!
        </h1>
        <p className="top_info_text">
          Предлагаем вашему вниманию квартиры для кратковременного проживания в
          г.Волгограде. Уютные и ухоженные квартиры сдаются на сутки, ночь,
          часы, недели...
        </p>

        <a className="phone_number_top phone_number" href="tel:89033760101">
          8-903-376-01-01{" "}
        </a>
        <ol className="soc_links soc_links_top">
          <li>
            <a href="#">
              <img className="soc_link_top_img" src={tg_icon} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="soc_link_top_img" src={whats_icon} alt="" />
            </a>
          </li>
        </ol>
        <img id="mouse" className="scroll_img " src={scroll_con} alt="" />
      </div>
    </section>
  );
}
