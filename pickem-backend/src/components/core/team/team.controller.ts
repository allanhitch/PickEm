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
  getTeamByFullName(@Param('teamName') teamName: string) {
    return this.teamService.getTeamByFullName(teamName);
  }

  //first see if there is a list of teams in the database and get that if it exists
    // const checkForTeamsInDb = await this.mongoDbTeamsService.getAllTeamsByLeague(leagueName);
    // if(checkForTeamsInDb.length > 0) {
    //   return checkForTeamsInDb;
    // }
    //if it exists in the db but the cache is 90% expired then get value from cache and go ahead and update all the teams that are almost expired
      //in the db in the background
    //if it is expired then update values in db and use values from api call
}
