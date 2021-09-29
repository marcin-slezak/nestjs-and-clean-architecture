export class User {
    firstName: string;
    lastName: string;
    birthDate: Date;
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}