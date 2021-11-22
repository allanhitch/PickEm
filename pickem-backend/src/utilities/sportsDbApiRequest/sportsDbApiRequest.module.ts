import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SportsDbApiRequestService } from './sportsDbApiRequest.service';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [SportsDbApiRequestService],
  exports: [SportsDbApiRequestService]
})
export class SportsDbApiRequestModule {}
