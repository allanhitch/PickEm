import { Controller, Get, Param } from '@nestjs/common';
import { SportsDbEventRequestService } from '../../sportsDbApi/requests/event/SportsDbEventRequest.service';
import { ScheduleService } from './schedule.service';

@Controller('schedule')
export class ScheduleController {
  constructor(
    private readonly appService: ScheduleService) {}

  //prob move this to config at somepoint
  readonly  nflLeagueId = "4391";

  @Get(':season')
  getAllNflEventsBySeason(@Param('season') season: string) {
    const events = this.appService.getAllEventsBySeason(season, this.nflLeagueId);
    return events;
  }
}
