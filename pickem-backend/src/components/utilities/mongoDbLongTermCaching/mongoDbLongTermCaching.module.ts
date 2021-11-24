import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {  MongoDbLongTermCachingService} from './mongoDbLongTermCaching.service';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [MongoDbLongTermCachingService],
  exports: [MongoDbLongTermCachingService]
})
export class MongoDbLongTermCachingModule {}
