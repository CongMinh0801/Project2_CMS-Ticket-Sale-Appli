import "./Header.css"
import React from "react" 
import userImg from "../../assets/img/user.jpg"
import {Search, Mail, Bell} from "react-feather"

export const Header:React.FC = () => {
    return (
        <div className="header" style={{ backgroundColor: "#F9F6F4"}}>
            <div className="header__block">
                <div className="header__block-search">
                    <input className="header__block-search-input" placeholder="Search" type="text" />
                    <button className="header__block-search-btn">
                        <Search  className="header__block-search-btn-icon"/>
                    </button>
                </div>
                <div className="header__block-user">
                    <Mail className="header__block-user-mail-icon"/>
                    <Bell className="header__block-user-bell-icon"/>
                    <img className="header__block-user-img" src={userImg}/>
                </div>
            </div>
        </div>

    )
} 