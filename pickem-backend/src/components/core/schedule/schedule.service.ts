import { Injectable } from '@nestjs/common';
import { SportsDbEventRequestService } from 'src/components/sportsDbApi/requests/event/SportsDbEventRequest.service';

@Injectable()
export class ScheduleService {
  constructor(private readonly sportsDbEventRequestService: SportsDbEventRequestService) {}
    
  //prob move this to config at somepoint
  readonly  nflLeagueId = 4391;

  getAllNflEventsBySeason(season: number) {
    const events = this.sportsDbEventRequestService.getEventsBySeason(season, this.nflLeagueId);
    return events;
  }
}
