import { Employee } from "./employee";

export interface User {
    id?: string,
    name?: string,
    email?: string,
    password?: string,
    date_register?:string,
    employee?: Employee
}