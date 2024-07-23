import { Person } from "./person";

export interface Employee {
    person ?: Person,
    name_branch?:string,
    position?:string
}