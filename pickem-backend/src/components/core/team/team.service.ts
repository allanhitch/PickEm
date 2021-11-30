import { Injectable } from '@nestjs/common';
import { MongoDbTeamsService } from 'src/components/mongoDb/team/mongoDbTeams.service';
import { Team } from 'src/components/sportsDbApi/requests/team/entity/team.entity';
import { SportsDbTeamRequestService } from 'src/components/sportsDbApi/requests/team/SportsDbTeamRequest.service';

@Injectable()
export class TeamService {
  constructor(
    private readonly sportsDbTeamRequestService: SportsDbTeamRequestService,
    private readonly mongoDbTeamsService: MongoDbTeamsService,
    ) {}

  async getTeamsByLeague(leagueName: string) {
    const teams = await this.mongoDbTeamsService.getAllTeamsByLeague(leagueName);
    if(this.isManyTeamsAvailableInternally(teams)) {
      const teamsFromSportsDb = await this.sportsDbTeamRequestService.getTeamsByLeague(leagueName);
      return await this.mongoDbTeamsService.createMany(teamsFromSportsDb);
    } else {
      return teams;
    }
  }

  async getTeamByFullNameAndLeague(teamName: string, leagueName: string) {
    const team = await this.mongoDbTeamsService.getTeamByName(teamName);
    if(this.isTeamAvailableInternally(team)) {
      //refresh the whole league at once because we want to keep the league data consistent
      const teamsFromSportsDb = await this.sportsDbTeamRequestService.getTeamsByLeague(leagueName);
      await this.mongoDbTeamsService.createMany(teamsFromSportsDb);
      return teamsFromSportsDb.find(team => team.teamName.toLowerCase() === teamName.toLowerCase());
    } else {
      return team;
    }
  }

  //TODO abstract this shit out it is used in schedule as well
  calculatePercentageExpired(insertDate: Date, expirationDate: Date) {
    var total = expirationDate.getTime() - insertDate.getTime();
    var progress = new Date(new Date(Date.now()).toUTCString()).getTime() - insertDate.getTime();

    const percent = progress / total * 100;
    return percent;
  }

  isTeamAvailableInternally(team: Team) {
    return (team != null && this.calculatePercentageExpired(team.insertTimestamp, team.insertExpirationDate) >= 90)
    || team == null
  }

  isManyTeamsAvailableInternally(teams: Team[]) {
    for(let x = 0; x < teams.length; x++) {
      if(!this.isTeamAvailableInternally(teams[x])) {
        return false;
      }
    }

    return true;
  }
}
