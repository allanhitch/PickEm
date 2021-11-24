import { Injectable } from '@nestjs/common';
import { SportsDbTeamRequestService } from 'src/components/sportsDbApi/requests/team/SportsDbTeamRequest.service';

@Injectable()
export class TeamService {
  constructor(private readonly sportsDbTeamRequestService: SportsDbTeamRequestService) {}

  getTeamsByLeague(leagueName: string) {
    return this.sportsDbTeamRequestService.getTeamsByLeague(leagueName);
  }

  getTeamByFullName(teamName: string) {
    return this.sportsDbTeamRequestService.getTeamByName(teamName);
  }
}
