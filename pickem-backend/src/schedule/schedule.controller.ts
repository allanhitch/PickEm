import { Controller, Get } from '@nestjs/common';
import { ScheduleService } from './schedule.service';

@Controller()
export class ScheduleController {
  constructor(private readonly appService: ScheduleService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
