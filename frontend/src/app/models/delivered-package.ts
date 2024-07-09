export interface DeliveredPackage {
    person_sender_complete_name?:string,
    person_sender_dni ?: number,
    reciever_person_complete_name ?:string,
    reciever_person_dni ?: number,
    about ?: string,
    typePackage ?:string,
    origin_branch ?: string,
    destination_branch ?: string
}
