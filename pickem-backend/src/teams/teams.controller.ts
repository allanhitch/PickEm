import { Controller, Get, Param } from '@nestjs/common';
import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  readonly nflLeagueName = 'NFL'

  @Get('nfl')
  getNflTeams() {
    return this.teamsService.getTeamsByLeague(this.nflLeagueName);
  }

  @Get(':teamName')
  getTeamByFullName(@Param('teamName') teamName: string) {
    return this.teamsService.getTeamByName(teamName);
  }
}
