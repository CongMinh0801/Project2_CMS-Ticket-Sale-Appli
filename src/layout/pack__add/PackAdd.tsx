import React from "react"
import { PackInfo } from "../pack_info/PackInfo"
import "../pack__update/PackUpdate.css"
import "./PackAdd.css"

export const PackAdd:React.FC = () => {
    return (
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
                <button className="pack__update-btns-cancel btn">Hủy</button>
                <button className="pack__update-btns-save primary-btn btn">Lưu</button>
            </div>
        </div>
    )
}