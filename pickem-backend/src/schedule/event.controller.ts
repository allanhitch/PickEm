import { Controller, Get, Param } from '@nestjs/common';
import { EventService } from './event.service';

@Controller('events')
export class EventController {
  constructor(private readonly appService: EventService) {}

  //prob move this to config at somepoint
  readonly  nflLeagueId = 4391;

  @Get(':season')
  getAllNflEventsBySeason(@Param('season') season: number) {
    const events = this.appService.getEventsBySeason(season, this.nflLeagueId);
    return events;
  }
}
