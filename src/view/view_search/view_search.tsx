import React from 'react';
import { ViewSearchBtn } from './view_search_btn/view_search_btn';
import { Search } from "react-feather"
import "./view_search.css"

interface ViewSearchProps {
    typeOfList: string;
}

export const ViewSearch = (props:ViewSearchProps) => {
    return (
        <div className='view-search'>
            {/* Chỗ này cần phải xử lí dữ liệu title */}
            <h1 className='view-search__title'>Danh sách vé</h1>
            <div className='view-search__header'>
                <div className='view-search__header-block'>
                    <input placeholder='Tìm bằng số vé' className='view-search__header-block-input' type="text" />
                    <Search className='view-search__header-block-icon'/>
                </div>
                <ViewSearchBtn typeOfList = {props.typeOfList}/>
            </div>
        </div>
    )
}