
export interface ticketListData{
    stt:string, 
    bookingCode:string, 
    ticketNumber:string, 
    eventName:string,
    status:string, 
    useDate:string, 
    useCreate:string, 
    checkInGate:string,
    nullTitle:string
} 

export interface ticketCheckData{
    stt:string, 
    ticketNumber:string, 
    eventName:string, 
    useDate:string, 
    typeTicket:string, 
    checkInGate:string, 
    nullTitle:string
}

export interface ticketPackData{
    stt:string,
    packId:string,
    packName:string,
    startDate:string,
    endDate:string,
    ticketPrice:string,
    comboPrice:string,
    status:string,
    nullTitle:string
}

export interface renderFunction {
    (data:any,index:number,id:string):JSX.Element
}