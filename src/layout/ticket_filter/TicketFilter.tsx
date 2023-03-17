import React from "react";
import "./TicketFilter.css"
import {Calendar} from "react-feather"

export const TicketFilter:React.FC = () => {
    return (
        <div className="ticket-filter">
            <div className="ticket-filter__title">
                <h2>Lọc vé</h2>
            </div>
            <div className="ticket-filter__date">
                <div className="ticket-filter__date-start">
                    Từ ngày <br />
                    <input className="ticket-filter__date-start-input" type="date" />
                    <Calendar className="ticket-filter__date-start-input-icon"/>
                </div>
                <div className="ticket-filter__date-end">
                    Đến ngày <br />
                    <input className="ticket-filter__date-end-input" type="date" />
                    <Calendar className="ticket-filter__date-start-input-icon"/>
                </div>
            </div>
            <div className="ticket-filter__state">
                Tình trạng sử dụng <br />
                <div>
                    <div className="ticket-filter__state-item">
                        <input type="radio" />
                        Tất cả
                    </div>
                    <div className="ticket-filter__state-item">
                        <input type="radio" />
                        Chưa sử dụng
                    </div>
                    <div className="ticket-filter__state-item">
                        <input type="radio" />
                        Đã sử dụng
                    </div>
                    <div className="ticket-filter__state-item">
                        <input type="radio" />
                        Hết hạn
                    </div>
                    </div>
                </div>
            <div className="ticket-filter__gate">
                Cổng check-in <br />
                <div>
                    <div className="ticket-filter__gate-item">
                        <input type="checkbox" />
                        Tất cả
                    </div>
                    <div className="ticket-filter__gate-item">
                        <input type="checkbox" />
                        Cổng 1
                    </div>
                    <div className="ticket-filter__gate-item">
                        <input type="checkbox" />
                        Cổng 2
                    </div>
                    <div className="ticket-filter__gate-item">
                        <input type="checkbox" />
                        Cổng 3
                    </div>
                    <div className="ticket-filter__gate-item">
                        <input type="checkbox" />
                        Cổng 4
                    </div>
                    <div className="ticket-filter__gate-item">
                        <input type="checkbox" />
                        Cổng 5
                    </div>
                </div>
            </div>
            <button className="ticket-filter__btn btn">
                Lọc
            </button>
        </div>
    )
}