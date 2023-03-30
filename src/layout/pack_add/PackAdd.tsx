import React from "react"
import { PackInfo } from "../pack_info/PackInfo"
import "../pack_update/PackUpdate.css"
import "./PackAdd.css"
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { showPackAdd } from './PackAddSlice';

export const PackAdd:React.FC = () => {
    const PackAddState = useSelector((state: RootState) => state.PackAdd.Active_state);

    const dispatch = useDispatch();
    const handleCancer = (active:string) => {
        dispatch(showPackAdd(active));
    }
    const handleSave = (active:string) => {
        dispatch(showPackAdd(active));
    }
    return (
        <div className="pack-add-back" style={PackAddState == "hidden" ? {display:"none"} : {display:"block"}}>
            <div className="pack__update">
                <h2 className="pack__update-title">Thêm gói vé</h2>
                <div className="pack__update-info">
                    <div className="pack__update-info-item">
                        Tên gói vé <br />
                        <input style={{width:"368px"}} placeholder="Nhập tên gói vé" type="text" />
                    </div>
                </div>
                <PackInfo />
                <div className="pack__update-btns">
                    <button onClick={()=>handleCancer("hidden")} className="pack__update-btns-cancel btn">Hủy</button>
                    <button onClick={()=>handleSave("hidden")} className="pack__update-btns-save primary-btn btn">Lưu</button>
                </div>
            </div>
        </div>
    )
}