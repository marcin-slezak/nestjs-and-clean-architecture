import { Application } from '../entities/application.entity'

export abstract class IApplicationRepository {
    abstract getAllApplications(): Promise<Application[]>
    abstract addApplication(userInput: Partial<Application>): Promise<Application>
}