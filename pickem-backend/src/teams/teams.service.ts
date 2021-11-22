import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SportsDbApiRequestService } from 'src/utilities/sportsDbApiRequest/sportsDbApiRequest.service';
import { SportDbTeam, Team } from './teams.model';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { SportsDbApiUrlParams } from 'src/utilities/sportsDbApiRequest/sportsDbApiRequest.types';
import * as moment from 'moment'
import { MongoDbTeamsService } from 'src/mongoDb/teams/mongoDbTeams.service';

@Injectable()
export class TeamsService {
  @InjectModel('Team') private readonly teamModel: Model<Team>
  constructor(
    private httpService: HttpService, 
    private sportsDbApiRequestService: SportsDbApiRequestService,
    private mongoDbTeamsService: MongoDbTeamsService
    ) {}

  //probably move this to environment variables at somepoint
  readonly sportsDbApiTeamsPath = "searchteams.php";
  readonly nflSeasonLengthInWeeks = 18
  readonly insertValidFor = {weeks: this.nflSeasonLengthInWeeks}

  async getTeamsByLeague(leagueName: string) {
    const sportsDbApiParams : SportsDbApiUrlParams[] = [
      {parameterName: "l", value: leagueName},
    ];
    //first see if there is a list of teams in the database and get that if it exists
    // const checkForTeamsInDb = await this.mongoDbTeamsService.getAllTeamsByLeague(leagueName);
    // if(checkForTeamsInDb.length > 0) {
    //   return checkForTeamsInDb;
    // }
    //if it exists in the db but the cache is 90% expired then get value from cache and go ahead and update all the teams that are almost expired
      //in the db in the background
    //if it is expired then update values in db and use values from api call
    const requestString = this.sportsDbApiRequestService.createSportsDbApiRequestUrl(this.sportsDbApiTeamsPath, sportsDbApiParams);
    const allTeams = this.httpService.get(requestString);
    const mappedTeams = allTeams.pipe(
      map((axiosResponse: AxiosResponse) => {
        return axiosResponse.data.teams.map((team: SportDbTeam) => {
          const currentDateTime = new Date().toISOString();
          return new this.teamModel({
            apiId: team.idTeam,
            teamName: team.strTeam,
            shortTeamName: team.strTeamShort,
            sportName: team.strSport,
            leagueName: team.strLeague,
            leagueId:team.idLeague,
            stadiumName: team.strStadium,
            stadiumLocation: team.strStadiumLocation,
            teamBadgeUrl: team.strTeamBadge,
            teamLogoUrl: team.strTeamLogo,
            teamBannerUrl: team.strTeamBanner,
            insertTimestamp: currentDateTime,
            insertExpirationDate: moment(currentDateTime).add(this.insertValidFor) 
          })
        });
      })
    ); 
    return mappedTeams;
  }

  getTeamByName(teamName: string): Observable<Team> {
    const sportsDbApiParams : SportsDbApiUrlParams[] = [
      {parameterName: "t", value: teamName},
    ];
    const requestString = this.sportsDbApiRequestService.createSportsDbApiRequestUrl(this.sportsDbApiTeamsPath, sportsDbApiParams);
    const team = this.httpService.get(requestString);
    const mappedTeams = team.pipe(
      map((axiosResponse: AxiosResponse) => {
        return axiosResponse.data.teams.map((event: SportDbTeam) => {
          const currentDateTime = new Date().toISOString();
          return new this.teamModel({
            apiId: event.idTeam,
            teamName: event.strTeam,
            shortTeamName: event.strTeamShort,
            sportName: event.strSport,
            leagueName: event.strLeague,
            leagueId:event.idLeague,
            stadiumName: event.strStadium,
            stadiumLocation: event.strStadiumLocation,
            teamBadgeUrl: event.strTeamBadge,
            teamLogoUrl: event.strTeamLogo,
            teamBannerUrl: event.strTeamBanner,
            insertTimestamp: currentDateTime,
            insertExpirationDate: moment(currentDateTime).add(this.insertValidFor) 
          })
        });
      })
    ); 
    return mappedTeams;
  }
}
