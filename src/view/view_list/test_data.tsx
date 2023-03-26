import {ticketListData, ticketCheckData, ticketPackData, renderFunction} from "./interface"


export const testData1:Array<ticketPackData> = [
        {
            stt:"",
            pack_id:"ID01A",
            pack_name:"Gói A",
            start_date:"25/08/2002",
            end_date:"30/09/2002",
            ticket_price:"250.000",
            combo_price:"400.000",
            status:"Đang áp dụng",
            null_title:"Cập nhật" 
        },
        {
            stt:"",
            pack_id:"ID03SAD",
            pack_name:"Gói D",
            start_date:"25/08/2002",
            end_date:"30/09/2002",
            ticket_price:"300.000",
            combo_price:"2.700.000",
            status:"Tắt",
            null_title:"Cập nhật" 
        },{
            stt:"",
            pack_id:"ID06S",
            pack_name:"Gói E",
            start_date:"25/08/2002",
            end_date:"30/09/2002",
            ticket_price:"350.000",
            combo_price:"900.000",
            status:"Đang áp dụng",
            null_title:"Cập nhật" 
        },
    ]

    export const testData2:Array<ticketCheckData> = [
        {
            stt:"", 
            ticket_number:"ABCACB465", 
            event_name:"Lễ hội đua thuyền trên sông Kiến Giang", 
            use_date:"08/01/2002", 
            type_ticket:"Vé cổng", 
            check_in_gate:"Cổng 1", 
            null_title:"Chưa đối soát"
        },
        {
            stt:"", 
            ticket_number:"ABH15654", 
            event_name:"Lễ hội đua thuyền trên sông Kiến Giang", 
            use_date:"03/11/2006", 
            type_ticket:"Vé cổng", 
            check_in_gate:"Cổng 1", 
            null_title:"Đã đối soát"
        }
    ]

    export const testData3:Array<ticketListData> = [
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

