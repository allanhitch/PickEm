import { Controller, Get } from '@nestjs/common';
import { EventService } from './event.service';

@Controller('events')
export class EventController {
  constructor(private readonly appService: EventService) {}

  @Get()
  getAllNflEventsBySeason2021() {
    return this.appService.getAllNflEventsBySeason(2021);
  }
}
