import { Injectable } from '@nestjs/common';
import { MongoDbTeamsService } from 'src/components/mongoDb/team/mongoDbTeams.service';
import { SportsDbTeamRequestService } from 'src/components/sportsDbApi/requests/team/SportsDbTeamRequest.service';

@Injectable()
export class TeamService {
  constructor(
    private readonly sportsDbTeamRequestService: SportsDbTeamRequestService,
    private readonly mongoDbTeamsService: MongoDbTeamsService,
    ) {}

  getTeamsByLeague(leagueName: string) {
    this.mongoDbTeamsService.getAllTeamsByLeague(leagueName);
    return this.sportsDbTeamRequestService.getTeamsByLeague(leagueName);
  }

  getTeamByFullName(teamName: string) {
    return this.sportsDbTeamRequestService.getTeamByName(teamName);
  }
}
