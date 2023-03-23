import React, { useState } from 'react';
import "./view_list.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCircle } from '@fortawesome/free-solid-svg-icons';


export const ViewList: React.FC = () => {
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

    interface ticketListData{
        stt:string, 
        booking_code:string, 
        ticket_number:string, 
        event_name:string,
        status:string, 
        use_date:string, 
        use_create:string, 
        check_in_gate:string
    } 

    interface ticketCheckData{
        stt:string, 
        ticket_number:string, 
        event_name:string, 
        use_date:string, 
        type_ticket:string, 
        check_in_gate:string, 
        null_title:string
    }

    interface ticketPackData{
        stt:string,
        pack_id:string,
        pack_name:string,
        start_date:string,
        end_date:string,
        ticket_price:string,
        combo_price:string,
        status:string,
        null_title:string
    }

    interface renderFunction {
        (data:any,index:number):JSX.Element
    }

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

    // const testData:Array<ticketPackData> = [
    //     {
    //         stt:"",
    //         pack_id:"ID01A",
    //         pack_name:"Gói A",
    //         start_date:"25/08/2002",
    //         end_date:"30/09/2002",
    //         ticket_price:"250.000",
    //         combo_price:"400.000",
    //         status:"Đang áp dụng",
    //         null_title:"Cập nhật" 
    //     },
    //     {
    //         stt:"",
    //         pack_id:"ID03SAD",
    //         pack_name:"Gói D",
    //         start_date:"25/08/2002",
    //         end_date:"30/09/2002",
    //         ticket_price:"300.000",
    //         combo_price:"2.700.000",
    //         status:"Tắt",
    //         null_title:"Cập nhật" 
    //     },{
    //         stt:"",
    //         pack_id:"ID06S",
    //         pack_name:"Gói E",
    //         start_date:"25/08/2002",
    //         end_date:"30/09/2002",
    //         ticket_price:"350.000",
    //         combo_price:"900.000",
    //         status:"Đang áp dụng",
    //         null_title:"Cập nhật" 
    //     },
    // ]

    // const testData:Array<ticketCheckData> = [
    //     {
    //         stt:"", 
    //         ticket_number:"ABCACB465", 
    //         event_name:"Lễ hội đua thuyền trên sông Kiến Giang", 
    //         use_date:"08/01/2002", 
    //         type_ticket:"Vé cổng", 
    //         check_in_gate:"Cổng 1", 
    //         null_title:"Chưa đối soát"
    //     },
    //     {
    //         stt:"", 
    //         ticket_number:"ABH15654", 
    //         event_name:"Lễ hội đua thuyền trên sông Kiến Giang", 
    //         use_date:"03/11/2006", 
    //         type_ticket:"Vé cổng", 
    //         check_in_gate:"Cổng 1", 
    //         null_title:"Đã đối soát"
    //     }
    // ]

    const testData:Array<ticketListData> = [
        {
            stt:"", 
            booking_code:"AKLSJHD", 
            ticket_number:"1A456SA", 
            event_name:"Lễ hội đua thuyền trên sông Kiến Giang",
            status:"Hết hạn", 
            use_date:"23/07/2012", 
            use_create:"23/09/2012", 
            check_in_gate:"Cổng 1"
        }, {
            stt:"", 
            booking_code:"AKLSJHD", 
            ticket_number:"1A456SA", 
            event_name:"Lễ hội đua thuyền trên sông Kiến Giang",
            status:"Chưa sử dụng", 
            use_date:"23/07/2012", 
            use_create:"23/09/2012", 
            check_in_gate:"Cổng 1"
        },{
            stt:"", 
            booking_code:"AKLSJHD", 
            ticket_number:"1A456SA", 
            event_name:"Lễ hội đua thuyền trên sông Kiến Giang",
            status:"Đã sử dụng", 
            use_date:"23/07/2012", 
            use_create:"23/09/2012", 
            check_in_gate:"Cổng 1"
        },
    ]

    let renderRow: renderFunction;
    let preView: Array<{title:string, class:string}>
    const page_view:string = "ticket list"
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
            <div className='view-list__titles'>
                {
                    preView.map(item => <div className={item.class}>{item.title}</div>)
                }
            </div>
            {
                testData.map((data, index) => 
                {
                    return renderRow(data,index)
                })
            }
        </div>
    )
}