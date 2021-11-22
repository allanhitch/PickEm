import {  Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SportsDbEvent } from './event.model';
import { SportsDbApiRequestService } from '../utilities/sportsDbApiRequest/sportsDbApiRequest.service';
import { SportsDbApiUrlParams } from '../utilities/sportsDbApiRequest/sportsDbApiRequest.types';
import * as moment from 'moment'

@Injectable()
export class EventService {
  @InjectModel('Event') private readonly eventModel: Model<Event>
  constructor(private httpService: HttpService, private sportsDbApiRequestService: SportsDbApiRequestService) {}
  
  //probably move this to environment variables at somepoint
  readonly sportsDbApiEventsPath = "eventsseason.php";
  readonly insertValidFor = {days: 1}

  getEventsBySeason(seasonYear: number, leagueId: number): Observable<Event[]> {
    const sportsDbApiParams : SportsDbApiUrlParams[] = [
      {parameterName: "id", value: leagueId},
      {parameterName: "s", value: seasonYear},
    ];
    const requestString = this.sportsDbApiRequestService.createSportsDbApiRequestUrl(this.sportsDbApiEventsPath, sportsDbApiParams);
    const allEvents = this.httpService.get(requestString);
    const mappedEvents = allEvents.pipe(
      map((axiosResponse: AxiosResponse) => {
        return axiosResponse.data.events.map((event: SportsDbEvent) => {
          const currentDateTime = new Date().toISOString();
          return new this.eventModel({
            apiId: event.idEvent,
            eventFriendlyName: event.strEvent,
            sport: event.strSport,
            leagueId: event.idLeague,
            leagueName: event.strLeague,
            season:event.strSeason,
            homeTeamName: event.strHomeTeam,
            awayTeamname: event.strAwayTeam,
            homeTeamScore: event.intHomeScore,
            round: event.intRound,
            awayTeamScore: event.intAwayScore,
            eventTimestamp: event.strTimestamp,
            insertTimestamp: currentDateTime,
            insertExpirationDate: moment(currentDateTime).add(this.insertValidFor) 
          })
        });
      })
    ); 
    return mappedEvents;
  }
}
