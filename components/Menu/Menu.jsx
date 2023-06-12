import s from "./Menu.module.scss";
import { useState } from "react";
import cn from "classnames";
import {
  ContactsOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={isOpen ? cn(s.list_container, s.active) : s.list_container}>
      <button className={s.more_button} onClick={() => setIsOpen(!isOpen)}>
        <div className={s.menu_icon_wrapper}>
          <div className={cn(s.menu_icon_line, s.half, s.first)}></div>
          <div className={s.menu_icon_line}></div>
          <div className={cn(s.menu_icon_line, s.half, s.last)}></div>
        </div>
      </button>

      <ul className={s.more_button_list}>
        <li className={s.more_button_list_item}>
          <a target="_blank" href="https://www.facebook.com">
            <FacebookOutlined />
            <span>Facebook</span>
          </a>
        </li>
        <li className={s.more_button_list_item}>
          <a target="_blank" href="https://www.instagram.com">
            <InstagramOutlined />
            <span>Instagram</span>
          </a>
        </li>
        <li className={s.more_button_list_item}>
          <a target="_blank" href="https://www.WhatsApp.com">
            <WhatsAppOutlined />
            <span>WhatsApp</span>
          </a>
        </li>
        <li className={s.more_button_list_item}>
          <a target="_blank" href="https://www.linkedin.com">
            <LinkedinOutlined />
            <span>Linkedin</span>
          </a>
        </li>
        <li className={s.more_button_list_item}>
          <a href="#contacts">
            <ContactsOutlined />
            <span>Контакты</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
