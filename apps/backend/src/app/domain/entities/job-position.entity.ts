import {User} from "./user.entity"
import {Application} from "./application.entity"

export class JobPosition {
    id: number
    title: string
    createdBy: User
    applications: Application[]
}