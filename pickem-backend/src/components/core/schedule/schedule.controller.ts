import { Controller, Get, Param } from '@nestjs/common';
import { SportsDbEventRequestService } from '../../sportsDbApi/requests/event/SportsDbEventRequest.service';

@Controller('schedule')
export class ScheduleController {
  constructor(
    private readonly appService: SportsDbEventRequestService) {}

  //prob move this to config at somepoint
  readonly  nflLeagueId = 4391;

  @Get(':season')
  getAllNflEventsBySeason(@Param('season') season: number) {
    const events = this.appService.getEventsBySeason(season, this.nflLeagueId);
    return events;
  }
}
