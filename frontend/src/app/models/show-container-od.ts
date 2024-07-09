export interface ShowContainerOD {
    type_container?:'single'|'unified',
    now_name_branch ?:string,
    destination_name_branch ?:string,
    state ?: 'on route' | 'arrived' | 'unloading' | 'stay in' | 'on load' | 'ready',
    truck_license_plate?: string
}
