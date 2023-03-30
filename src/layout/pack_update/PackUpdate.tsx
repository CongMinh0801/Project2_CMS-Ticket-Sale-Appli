import React from "react"
import { PackInfo } from "../pack_info/PackInfo"
import "./PackUpdate.css"
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { showPackUpdate } from './PackUpdateSlice';


export const PackUpdate:React.FC = () => {
    const PackUpdateState = useSelector((state: RootState) => state.PackUpdate.Active_state);

    const dispatch = useDispatch();
    const handleShowPackUpdate = (active:string) => {
        dispatch(showPackUpdate(active));
    }
    return (
        <div className="pack-update-back" style={PackUpdateState == "hidden" ? {display:"none"} : {display:"block"}}>
            <div className="pack__update">
                <h2 className="pack__update-title">Cập nhật thông tin gói vé</h2>
                <div className="pack__update-info">
                    <div className="pack__update-info-item">
                        Mã sự kiện <br />
                        <input type="text" />
                    </div>
                    <div className="pack__update-info-item">
                        Tên sự kiện <br />
                        <input type="text" />
                    </div>
                </div>
                <PackInfo />
                <div className="pack__update-btns">
                    <button onClick={()=>handleShowPackUpdate("hidden")} className="pack__update-btns-cancel btn">Hủy</button>
                    <button onClick={()=>handleShowPackUpdate("hidden")} className="pack__update-btns-save primary-btn btn">Lưu</button>
                </div>
            </div>  
        </div>
    )
}