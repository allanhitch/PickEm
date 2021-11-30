import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SportsDbEventRequestModule } from 'src/components/sportsDbApi/requests/event/SportsDbEventRequest.module';
import { SportsDbApiRequestCreatorModule } from 'src/components/utilities/sportsDbApiRequestCreator/sportsDbApiRequestCreator.module';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';
import { Event } from '../../sportsDbApi/requests/event/entity/event.entity';
import { MongoDbEventModule } from 'src/components/mongoDb/event/mongoDbEvent.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Event]), 
    SportsDbApiRequestCreatorModule,
    SportsDbEventRequestModule,
    MongoDbEventModule,
  ],
    controllers: [ScheduleController],
    providers: [ScheduleService],
  })
  export class EventModule {}
