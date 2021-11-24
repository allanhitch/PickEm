import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SportsDbApiRequestCreatorModule } from 'src/components/utilities/sportsDbApiRequestCreator/sportsDbApiRequestCreator.module';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';
import { Team } from 'src/components/sportsDbApi/requests/team/entity/team.entity';
import { SportsDbTeamRequestModule } from 'src/components/sportsDbApi/requests/team/SportsDbTeamRequest.module';
import { MongoDbTeamsModule } from 'src/components/mongoDb/team/mongoDbTeams.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Team]), 
    SportsDbApiRequestCreatorModule,
    SportsDbTeamRequestModule,
    MongoDbTeamsModule,
  ],
    controllers: [TeamController],
    providers: [TeamService],
  })
  export class TeamModule {}
