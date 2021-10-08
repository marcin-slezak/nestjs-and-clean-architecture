import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Controllers from './infrastructure/controllers/';
import * as Entities from './domain/entities';
import * as DomainServices from './domain/services';
import {IUserRepository} from './domain/interfaces/user-repository.interface';
import {IJobPositionRepository} from './domain/interfaces/job-position-repository.interface';
import {UserRepository} from './infrastructure/db/repositories/user.repository';
import {JobPositionRepository} from './infrastructure/db/repositories/job-posittion.repository';
import getDbConfig from './infrastructure/config/db';
import * as Schemas from './infrastructure/db/schemas/';

const db = [
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: getDbConfig().database,
    synchronize: true,
    entities: Object.values(Schemas),
  }),
  TypeOrmModule.forFeature(Object.values(Entities)),
];

@Module({
  imports: [...db],
  controllers: Object.values(Controllers),
  providers: [
    ...Object.values(DomainServices),
    {provide: IUserRepository, useClass: UserRepository},
    {provide: IJobPositionRepository, useClass: JobPositionRepository}
  ],
})
export class AppModule {}
