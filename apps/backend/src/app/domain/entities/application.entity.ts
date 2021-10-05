import { JobPosition } from "./job-position.entity";
import { File } from "./file.entity";

export class Application {
    id: number;
    firstName:string;
    lastName:string;
    email:string;
    jobPosition: JobPosition;
    attachements: File[]
}