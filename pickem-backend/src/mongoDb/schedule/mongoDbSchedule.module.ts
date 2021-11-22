import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoDbScheduleService } from './mongoDbSchedule.service';

@Module({
  providers: [MongoDbScheduleService],
  exports: [MongoDbScheduleService]
})
export class MongoDbScheduleModule {}
