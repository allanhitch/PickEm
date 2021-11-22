import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamSchema } from 'src/teams/teams.model';
import { MongoDbTeamsService } from './mongoDbTeams.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Team', schema: TeamSchema}]), 
  ],
  providers: [MongoDbTeamsService],
  exports: [MongoDbTeamsService]
})
export class MongoDbTeamsModule {}
