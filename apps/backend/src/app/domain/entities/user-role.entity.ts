import {User} from "./user.entity"

export class UserRole {
    id: string
    name: string
    users: User[]
}