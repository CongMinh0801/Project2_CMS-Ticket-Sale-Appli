import React from "react"
import "./ListPage.css"

import { Menu } from "../../layout/menu/Menu"
import { Header } from "../../layout/header/Header"
import { ViewList } from "../../view/view_list/view_list"
import { ViewSearch } from "../../view/view_search/view_search"
import { ViewTicketFilter } from "../../view/view_ticket_filter/view_ticket_filter"
import { useSelector } from "react-redux";
import { RootState } from "../../app/store"



export const ListPage = () => {
    const selected = useSelector((state: RootState) => state.menu.selected);
    return (
        <div className="list-page">
            <Menu/>
            <div className="list-page__container">
                <div style={{height:"100%", borderBottomLeftRadius:"16px", borderBottomRightRadius:"16px"}}>
                    <Header/>
                    <div style={{height:"calc(100% - 88px)", display:"flex"}}>
                        <div className="list-page__container-body" style={selected == "Check" ? {width:"70%"}:{width:"100%"}}>
                            <ViewSearch/>
                            <ViewList/>
                        </div>
                        <div style={selected == "Check" ? {display:"block", width:"29%"}:{display:"none", width:"29%"}}>
                            <ViewTicketFilter />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}