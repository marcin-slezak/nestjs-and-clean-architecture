import {UserRole} from "./user-role.entity";

export class User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: UserRole;
}