import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from 'src/components/sportsDbApi/requests/team/entity/team.entity';
import { MongoDbTeamsService } from './mongoDbTeams.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Team]), 
  ],
  exports: [MongoDbTeamsService]
})
export class MongoDbTeamsModule {}
