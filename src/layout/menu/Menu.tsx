import React from "react"
import "./Menu.css"
import insightLogo from "../../assets/img/insight-05_1.png"
import {Home, Settings} from "react-feather"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faTicket, faScroll} from "@fortawesome/free-solid-svg-icons"

export const Menu:React.FC = () => {
    return (
        <div className="menu">
            <div className="menu__logo">
                <img className="menu__logo-img" src={insightLogo} alt="" />
            </div>
            <ul className="menu__list">
                <li className="menu__list-item"><Home className="menu__list-item-home-icon"/>Trang chủ</li>
                <li className="menu__list-item active"><FontAwesomeIcon className="menu__list-item-ticket-icon" icon={faTicket}/>Quản lí vé</li>
                <li className="menu__list-item"><FontAwesomeIcon className="menu__list-item-list-icon" icon={faScroll}/>Đối soát vé</li>
                <li className="menu__list-item"><Settings className="menu__list-item-setting-icon" />Cài đặt</li>
            </ul>
        </div>
    )
}