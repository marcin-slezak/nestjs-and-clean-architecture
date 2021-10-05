import { Application } from "./application.entity";

export class File {
    id: number;
    name: string;
    extension: string;
    size: number;
    application: Application
}