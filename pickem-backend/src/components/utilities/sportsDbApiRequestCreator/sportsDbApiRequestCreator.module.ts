import { Module } from '@nestjs/common';
import { SportsDbApiRequestCreatorService as SportsDbApiRequestCreatorService } from './sportsDbApiRequestCreator.service';

@Module({
  providers: [SportsDbApiRequestCreatorService],
  exports: [SportsDbApiRequestCreatorService]
})
export class SportsDbApiRequestCreatorModule {}
