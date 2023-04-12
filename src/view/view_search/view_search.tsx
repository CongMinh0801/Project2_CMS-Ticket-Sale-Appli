import React from 'react';
import { ViewSearchBtn } from './view_search_btn/view_search_btn';
import { Search } from "react-feather"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store"
import "./view_search.css"
import { changeViewSearch } from './ViewSearchSlice';

export const ViewSearch = () => {
    const selected = useSelector((state: RootState) => state.menu.selected);
    const dispatch = useDispatch();
    const handleSearch = () => {
        dispatch(changeViewSearch((document.querySelector(".view-search__header-block-input")as HTMLInputElement).value))
    }
    return (
        <div className='view-search'>
            <h1 className='view-search__title'>{selected == "List" ? "Danh sách vé" 
                                                : selected == "Check" ? "Đối soát vé" : "Danh sách gói vé"}</h1>
            <div className='view-search__header'>
                <div className='view-search__header-block'>
                    <input placeholder={selected == "List" ? "Tìm bằng số vé" 
                                        : selected == "Check" ? "Tìm bằng số vé" : "Tìm bằng mã gói vé"} className='view-search__header-block-input' type="text" />
                    <button style={{backgroundColor:"transparent", border:"none", height:"40px", width:"40px", position:"absolute", right:"0"}} onClick={()=>handleSearch()}>
                        <Search className='view-search__header-block-icon'/>
                    </button>
                </div>
                <ViewSearchBtn/>
            </div>
        </div>
    )
}