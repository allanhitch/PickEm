import { Controller, Get, Param } from '@nestjs/common';
import { TeamService } from './team.service';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  readonly nflLeagueName = 'NFL'

  @Get('nfl')
  getNflTeams() {
    return this.teamService.getTeamsByLeague(this.nflLeagueName);
  }

  @Get(':teamName')
  getNflTeamByFullName(@Param('teamName') teamName: string) {
    return this.teamService.getTeamByFullNameAndLeague(teamName, this.nflLeagueName);
  }
}
