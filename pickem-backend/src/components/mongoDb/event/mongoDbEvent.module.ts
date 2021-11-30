import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongoDbEventService } from './mongoDbEvent.service';
import { Event } from '../../sportsDbApi/requests/event/entity/event.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([Event]), 
  ],
  providers: [MongoDbEventService],
  exports: [MongoDbEventService]
})
export class MongoDbEventModule {}
