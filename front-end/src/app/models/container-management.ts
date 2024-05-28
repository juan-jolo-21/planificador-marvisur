export interface ContainerManagement {
    util_charge_tons?:number,
    type_container?:'single'|'unified',
    truck_license_plate?:string,
    state?:'on route' | 'arrived' | 'unloading' | 'stay in' | 'on load' | 'ready',
    now_name_branch?:string,
    destination_name_branch ?:string, 
}

