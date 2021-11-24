import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import { SportsDbApiRequestCreatorService } from 'src/components/utilities/sportsDbApiRequestCreator/sportsDbApiRequestCreator.service';
import { SportDbTeam, Team } from './entity/team.entity';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { SportsDbApiUrlParams } from 'src/components/utilities/sportsDbApiRequestCreator/sportsDbApiRequestCreator.types';
import * as moment from 'moment'

@Injectable()
export class SportsDbTeamRequestService{
  constructor(
    private readonly httpService: HttpService, 
    private readonly sportsDbApiRequestCreatorService: SportsDbApiRequestCreatorService,
    ) {}

  //probably move this to environment variables at somepoint
  readonly sportsDbApiTeamsPath = "searchteams.php";
  readonly nflSeasonLengthInWeeks = 18
  readonly insertValidFor = {weeks: this.nflSeasonLengthInWeeks}

  getTeamsByLeague(leagueName: string) {
    const sportsDbApiParams : SportsDbApiUrlParams[] = [
      {parameterName: "l", value: leagueName},
    ];   
    const requestString = this.sportsDbApiRequestCreatorService.createSportsDbApiRequestUrl(this.sportsDbApiTeamsPath, sportsDbApiParams);
    const allTeams = this.httpService.get(requestString);
    const mappedTeams: Observable<Team[]> = allTeams.pipe(
      map((axiosResponse: AxiosResponse) => {
        return axiosResponse.data.teams.map((sportDbTeam: SportDbTeam) => {
          const currentDateTime = new Date().toISOString();
          const team = new Team();
          team.id = sportDbTeam.idTeam,
          team.teamName = sportDbTeam.strTeam,
          team.shortTeamName = sportDbTeam.strTeamShort,
          team.sportName = sportDbTeam.strSport,
          team.leagueName = sportDbTeam.strLeague,
          team.leagueId = sportDbTeam.idLeague,
          team.stadiumName = sportDbTeam.strStadium,
          team.stadiumLocation = sportDbTeam.strStadiumLocation,
          team.teamBadgeUrl = sportDbTeam.strTeamBadge,
          team.teamLogoUrl = sportDbTeam.strTeamLogo,
          team.teamBannerUrl = sportDbTeam.strTeamBanner,
          team.insertTimestamp = new Date(currentDateTime),
          team.insertExpirationDate = moment(currentDateTime).add(this.insertValidFor).toDate();

          return team;
        });
      })
    ); 
    return mappedTeams;
  }

  getTeamByName(teamName: string) {
    const sportsDbApiParams : SportsDbApiUrlParams[] = [
      {parameterName: "t", value: teamName},
    ];
    const requestString = this.sportsDbApiRequestCreatorService.createSportsDbApiRequestUrl(this.sportsDbApiTeamsPath, sportsDbApiParams);
    const team = this.httpService.get(requestString);
    const mappedTeams: Observable<Team> = team.pipe(
      map((axiosResponse: AxiosResponse) => {
        return axiosResponse.data.teams.map((sportDbTeam: SportDbTeam) => {
          const currentDateTime = new Date().toISOString();
          const team = new Team();
          team.id = sportDbTeam.idTeam,
          team.teamName = sportDbTeam.strTeam,
          team.shortTeamName = sportDbTeam.strTeamShort,
          team.sportName = sportDbTeam.strSport,
          team.leagueName = sportDbTeam.strLeague,
          team.leagueId = sportDbTeam.idLeague,
          team.stadiumName = sportDbTeam.strStadium,
          team.stadiumLocation = sportDbTeam.strStadiumLocation,
          team.teamBadgeUrl = sportDbTeam.strTeamBadge,
          team.teamLogoUrl = sportDbTeam.strTeamLogo,
          team.teamBannerUrl = sportDbTeam.strTeamBanner,
          team.insertTimestamp = new Date(currentDateTime),
          team.insertExpirationDate = moment(currentDateTime).add(this.insertValidFor).toDate();

          return team;
        });
      })
    ); 
    return mappedTeams;
  }
}
