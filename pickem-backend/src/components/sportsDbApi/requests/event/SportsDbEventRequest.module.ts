import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SportsDbApiRequestCreatorModule } from 'src/components/utilities/sportsDbApiRequestCreator/sportsDbApiRequestCreator.module';
import { SportsDbEventRequestService } from './SportsDbEventRequest.service';
import { Event } from './entity/event.entity'

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([Event]), 
    SportsDbApiRequestCreatorModule,
  ],
    providers: [SportsDbEventRequestService],
    exports: [SportsDbEventRequestService]
  })
export class SportsDbEventRequestModule {}
