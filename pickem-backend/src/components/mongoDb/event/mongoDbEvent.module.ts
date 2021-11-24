import { Module } from '@nestjs/common';
import { MongoDbEventService } from './mongoDbEvent.service';

@Module({
  providers: [MongoDbEventService],
  exports: [MongoDbEventService]
})
export class MongoDbEventModule {}
