import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { selectMenu } from "./MenuSlice";
import { RootState } from "../../app/store";
import "./Menu.css"
import insightLogo from "../../assets/img/insight-05_1.png"
import {Home, Settings} from "react-feather"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faTicket, faScroll} from "@fortawesome/free-solid-svg-icons"

export const Menu:React.FC = () => {
    const selected = useSelector((state: RootState) => state.menu.selected);
    const dispatch = useDispatch();

    const handleClick = (menu: string) => {
        dispatch(selectMenu(menu));
    };
    return (
        <div className="menu">
            <div className="menu__logo">
                <img className="menu__logo-img" src={insightLogo} alt="" />
            </div>
            <ul className="menu__list">
                <li className={selected === "Home" ? "menu__list-item active" : "menu__list-item"} onClick={() => handleClick("Home")}><Home className="menu__list-item-home-icon"/>Trang chủ</li>
                <li className={selected === "List" ? "menu__list-item active" : "menu__list-item"} onClick={() => handleClick("List")}><FontAwesomeIcon className="menu__list-item-ticket-icon" icon={faTicket}/>Quản lí vé</li>
                <li className={selected === "Check" ? "menu__list-item active" : "menu__list-item"} onClick={() => handleClick("Check")}><FontAwesomeIcon className="menu__list-item-list-icon" icon={faScroll}/>Đối soát vé</li>
                <li className={selected === "Pack" ? "menu__list-item active" : "menu__list-item"} onClick={() => handleClick("Pack")}><Settings className="menu__list-item-setting-icon" />Cài đặt</li>
            </ul>
        </div>
    )
}