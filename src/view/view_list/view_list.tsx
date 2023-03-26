import React, { useState } from 'react';
import "./view_list.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCircle, faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import {ticketListData, ticketCheckData, ticketPackData, renderFunction} from "./interface"
import { testData1, testData2, testData3 } from './test_data';


interface ViewListProps {
    typeOfList:string;
}


export const ViewList = (props:ViewListProps) => {
    const ticketListTitles: Array<{title:string, class:string}> = 
    [
        {title:"STT",class:"stt"}
        ,{title:"Booking Code",class:"booking_code"}
        ,{title:"Số vé",class:"ticket_number"}
        ,{title:"Tên sự kiện",class:"event_name"}
        ,{title:"Tình trạng sử dụng",class:"status"}
        ,{title:"Ngày sử dụng",class:"use_date"}
        ,{title:"Ngày xuất vé",class:"use_create"}
        ,{title:"Cổng check_in",class:"check_in_gate"}
    ]
    const ticketCheckTitles: Array<{title:string, class:string}> = [
        {title:"STT",class:"stt-2"}
        ,{title:"Số vé",class:"ticket_number-2"}
        ,{title:"Tên sự kiện",class:"event_name-2"}
        ,{title:"Ngày sử dụng",class:"use_date-2"}
        ,{title:"Tên loại vé",class:"type_ticket"}
        ,{title:"Cổng check_in",class:"check_in_gate-2"}
        ,{title:" ",class:"null_title"}
    ]
    const ticketPackTitles: Array<{title:string, class:string}> = [
        {title:"STT",class:"stt"}
        ,{title:"Mã gói",class:"pack_id"}
        ,{title:"Tên gói vé",class:"pack_name"}
        ,{title:"Ngày áp dụng",class:"start_date"}
        ,{title:" Ngày hết hạn",class:"end_date"}
        ,{title:"Giá vé [VND/vé]",class:"ticket_price"}
        ,{title:"Giá combo [VND/combo]",class:"combo_price"}
        ,{title:"Tình trạng",class:"status"}
        ,{title:" ",class:"null_title"}
    ]


    let count:number = 0;

    function renderRowList(data:ticketListData,index:number) {
        count++;
        return (
            <div key={index} className={count%2==1?'view-list__row':'view-list__row even_row'}>
                <div className='stt'>{count}</div>
                <div className='booking_code'>{data.booking_code}</div>
                <div className='ticket_number'>{data.ticket_number}</div>
                <div className='event_name'>{data.event_name}</div>
                <div className={data.status=="Hết hạn"?"status turn_off":data.status=="Chưa sử dụng"?"status turn_on":"status used"}><span><FontAwesomeIcon className='status-icon' icon={faCircle} />{data.status}</span></div>
                <div className='use_date'>{data.use_date}</div>
                <div className='use_create'>{data.use_create}</div>
                <div className='check_in_gate'>{data.check_in_gate}</div>
            </div>
        )
    }

    function renderRowCheck(data:ticketCheckData,index:number){
        count++;
        return (
            <div key={index} className={count%2==1?'view-list__row':'view-list__row even_row'}>
                <div className='stt-2'>{count}</div>
                <div className='ticket_number-2'>{data.ticket_number}</div>
                <div className='event_name-2'>{data.event_name}</div>
                <div className='use_date-2'>{data.use_date}</div>
                <div className='type_ticket'>{data.type_ticket}</div>
                <div className='check_in_gate-2'>{data.check_in_gate}</div>
                <div className={data.null_title=="Chưa đối soát"?"null_title":"null_title checked"}><i>{data.null_title}</i></div>
            </div>
        )
    }

    function renderRowPack(data:ticketPackData,index:number){
        count++;
        return (
            <div key={index} className={count%2==1?'view-list__row':'view-list__row even_row'}>
                <div className='stt'>{count}</div>
                <div className='pack_id'>{data.pack_id}</div>
                <div className='pack_name'>{data.pack_name}</div>
                <div className='start_date'>{data.start_date}</div>
                <div className='end_date'>{data.end_date}</div>
                <div className='ticket_price'>{data.ticket_price}</div>
                <div className='combo_price'>{data.combo_price}</div>
                <div className={data.status=="Tắt"?"status turn_off":"status turn_on"}><span><FontAwesomeIcon className='status-icon' icon={faCircle} /> {data.status}</span></div>
                <div className='null_title update_btn'><FontAwesomeIcon className='update-icon' icon={faPenToSquare} />Cập nhật </div>
            </div>
        )
    }

    let renderRow: renderFunction;
    let preView: Array<{title:string, class:string}>
    const page_view:string = props.typeOfList
    if(page_view == "ticket list"){
        preView = ticketListTitles
        renderRow = renderRowList
    }
    else if(page_view == "ticket check"){
        preView = ticketCheckTitles
        renderRow = renderRowCheck
    }
    else {
        preView = ticketPackTitles
        renderRow = renderRowPack
    }


    return (
        <div className='view-list'>
            <div className='view-list__container'>
                <div className='view-list__titles'>
                    {
                        preView.map(item => <div className={item.class}>{item.title}</div>)
                    }
                </div>
                {
                    (props.typeOfList == "ticket list" ? testData3 : props.typeOfList == "ticket check" ? testData2 : testData1).map((data, index) => 
                    {
                        return renderRow(data,index)
                    })
                }
            </div>
            <div className='view-list__footer'>
                <FontAwesomeIcon className='view-list__footer-caret' icon={faCaretLeft} />
                <span className='view-list__footer-item list-pre'>1</span>
                <span className='view-list__footer-item'>2</span>
                <span className='view-list__footer-item'>3</span>
                <span className='view-list__footer-item'>...</span>
                <span className='view-list__footer-item'>20</span>
                <FontAwesomeIcon className='view-list__footer-caret caret-active' icon={faCaretRight} />
            </div>
        </div>
    )
}