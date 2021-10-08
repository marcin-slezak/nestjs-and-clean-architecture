import { User } from './user.entity';
import { Application } from './application.entity';

export class JobPosition {
  id: number;
  title: string;
  createdBy: User;
  applications: Application[];
  getSlug() {
    return encodeURIComponent(`${this.title}-${this.id}`.replace(/[^a-zA-Z0-6]/g, "-").toLocaleLowerCase());
  }
}
