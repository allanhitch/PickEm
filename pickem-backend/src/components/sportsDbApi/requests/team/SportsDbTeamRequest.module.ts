import { Module } from '@nestjs/common';
import { SportsDbTeamRequestService } from './SportsDbTeamRequest.service';
import { HttpModule } from '@nestjs/axios';
import { Team } from './entity/team.entity';
import { SportsDbApiRequestCreatorModule } from 'src/components/utilities/sportsDbApiRequestCreator/sportsDbApiRequestCreator.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
      HttpModule,
      TypeOrmModule.forFeature([Team]), 
      SportsDbApiRequestCreatorModule,
    ],
      providers: [SportsDbTeamRequestService],
      exports: [SportsDbTeamRequestService]
    })
export class SportsDbTeamRequestModule {}
