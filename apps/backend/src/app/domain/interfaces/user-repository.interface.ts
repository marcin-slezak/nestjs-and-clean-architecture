import { User } from '../entities/user.entity'

export abstract class IUserRepository {
    abstract getAllUsers(): Promise<User[]>
    abstract addUser(userInput: Partial<User>): Promise<User>
}