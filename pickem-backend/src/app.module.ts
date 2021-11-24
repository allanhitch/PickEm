import { Module } from '@nestjs/common';
import { ConfigModule} from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ormConfig } from './database/config/ormConfig'
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamModule } from './components/core/team/team.module';
import { EventModule } from './components/core/schedule/schedule.module';

@Module({
  imports: [
    TeamModule,
    EventModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(ormConfig()),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

