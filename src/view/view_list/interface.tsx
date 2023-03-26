
export interface ticketListData{
    stt:string, 
    booking_code:string, 
    ticket_number:string, 
    event_name:string,
    status:string, 
    use_date:string, 
    use_create:string, 
    check_in_gate:string
} 

export interface ticketCheckData{
    stt:string, 
    ticket_number:string, 
    event_name:string, 
    use_date:string, 
    type_ticket:string, 
    check_in_gate:string, 
    null_title:string
}

export interface ticketPackData{
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

export interface renderFunction {
    (data:any,index:number):JSX.Element
}