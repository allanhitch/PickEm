import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';
import { HttpModule } from '@nestjs/axios';
import { TeamSchema } from './teams.model';
import { SportsDbApiRequestModule } from 'src/utilities/sportsDbApiRequest/sportsDbApiRequest.module';
import { MongoDbLongTermCachingModule } from 'src/utilities/mongoDbLongTermCaching/mongoDbLongTermCaching.module';
import { MongoDbTeamsModule } from 'src/mongoDb/teams/mongoDbTeams.module';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Team', schema: TeamSchema}]), 
    HttpModule,
    ConfigModule.forRoot(),
    SportsDbApiRequestModule,
    MongoDbTeamsModule
  ],
  controllers: [TeamsController],
  providers: [TeamsService],
})
export class TeamsModule {}
