import React from 'react';
import { ViewSearchBtn } from './view_search_btn/view_search_btn';
import { Search } from "react-feather"
import { useSelector } from "react-redux";
import { RootState } from "../../app/store"
import "./view_search.css"

export const ViewSearch = () => {
    const selected = useSelector((state: RootState) => state.menu.selected);
    return (
        <div className='view-search'>
            {/* Chỗ này cần phải xử lí dữ liệu title */}
            <h1 className='view-search__title'>{selected == "List" ? "Danh sách vé" 
                                                : selected == "Check" ? "Đối soát vé" : "Danh sách gói vé"}</h1>
            <div className='view-search__header'>
                <div className='view-search__header-block'>
                    <input placeholder='Tìm bằng số vé' className='view-search__header-block-input' type="text" />
                    <Search className='view-search__header-block-icon'/>
                </div>
                <ViewSearchBtn/>
            </div>
        </div>
    )
}