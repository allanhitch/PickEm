import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './schedule/event.module';
import { mongoDbConfig } from '../config/config'
import { TeamsModule } from './teams/teams.module';

@Module({
  imports: [
    EventModule,
    TeamsModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(mongoDbConfig())
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
