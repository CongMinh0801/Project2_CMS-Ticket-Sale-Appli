import React from "react";
import "./PackInfo.css"

export const PackInfo:React.FC = () => {
    return (
        <div className="pack__info">
            <div className="pack__info-item">
                <div className="pack__info-item-date-start">
                    Ngày áp dụng<br />
                    <div>
                        <input type="date" name="" id="" />
                        <input type="time" name="" id="" />
                    </div>
                </div>
                <div className="pack__info-item-date-end">
                    Ngày hết hạn<br />
                    <div>
                        <input type="date" name="" id="" />
                        <input type="time" name="" id="" />
                    </div>
                </div>
            </div>
            <div className="pack__info-item">
                Giá vé áp dụng
                <div className="pack__info-item-price-single">
                    <input className="pack__info-item-price-single-check" type="checkbox" name="" id="" />
                    Vé lẻ [VND/Vé] với giá <input className="pack__info-item-price-single-input" placeholder="Giá vé" type="text" /> / vé
                </div>
                <div className="pack__info-item-price-combo">
                    <input className="pack__info-item-price-combo-check" type="checkbox" name="" id="" />
                    Combo vé với giá <input className="pack__info-item-price-combo-input" placeholder="Giá vé" type="text" /> / <input className="pack__info-item-price-combo-count" placeholder="Số vé" type="text" /> vé
                </div>
            </div>
            <div className="pack__info-item">
                <div className="pack__info-item-state">
                    Tình trạng <br />
                    <select className="pack__info-item-state-select" name="" id="">
                        <option className="pack__info-item-state-select-item" value="">Đang áp dụng</option>
                        <option className="pack__info-item-state-select-item" value="">Tắt</option>
                    </select>
                    <p className="pack__info-item-state-message"><span>*</span>là thông tin bắt buộc</p>
                </div>
            </div>
        </div>
    )
}