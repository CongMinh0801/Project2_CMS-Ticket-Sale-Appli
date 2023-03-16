import React from "react"
import { PackInfo } from "../pack_info/PackInfo"
import "./PackUpdate.css"


export const PackUpdate:React.FC = () => {
    return (
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
                <button className="pack__update-btns-cancel btn">Hủy</button>
                <button className="pack__update-btns-save primary-btn btn">Lưu</button>
            </div>
        </div>
    )
}