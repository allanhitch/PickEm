import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { SportsDbApiRequestModule } from 'src/utilities/sportsDbApiRequest/sportsDbApiRequest.module';
import { EventController } from './event.controller';
import { EventSchema } from './event.model';
import { EventService } from './event.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Event', schema: EventSchema}]), 
    HttpModule,
    ConfigModule.forRoot(),
    SportsDbApiRequestModule
  ],
    controllers: [EventController],
    providers: [EventService],
  })
  export class EventModule {}
