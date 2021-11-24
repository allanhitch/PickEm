import {  Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import { SportsDbEvent } from './entity/event.entity';
import { Event } from './entity/event.entity'
import * as moment from 'moment'
import { SportsDbApiRequestCreatorService } from 'src/components/utilities/sportsDbApiRequestCreator/sportsDbApiRequestCreator.service';
import { SportsDbApiUrlParams } from 'src/components/utilities/sportsDbApiRequestCreator/sportsDbApiRequestCreator.types';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class SportsDbEventRequestService {
  constructor(
    private readonly httpService: HttpService, 
    private readonly sportsDbApiRequestCreatorService: SportsDbApiRequestCreatorService) {}
  
  //probably move this to environment variables at somepoint
  readonly sportsDbApiEventsPath = "eventsseason.php";
  readonly insertValidFor = {days: 1}

  getEventsBySeason(seasonYear: number, leagueId: number): Observable<Event[]> {
    const sportsDbApiParams : SportsDbApiUrlParams[] = [
      {parameterName: "id", value: leagueId},
      {parameterName: "s", value: seasonYear},
    ];
    const requestString = this.sportsDbApiRequestCreatorService.createSportsDbApiRequestUrl(this.sportsDbApiEventsPath, sportsDbApiParams);
    const allEvents = this.httpService.get(requestString);
    const mappedEvents = allEvents.pipe(
      map((axiosResponse: AxiosResponse) => {
        return axiosResponse.data.events.map((sportsDbEvent: SportsDbEvent) => {
          const currentDateTime = new Date().toISOString();
          const event = new Event();
          event.id = sportsDbEvent.idEvent,
          event.eventFriendlyName = sportsDbEvent.strEvent,
          event.sport = sportsDbEvent.strSport,
          event.leagueId = sportsDbEvent.idLeague,
          event.leagueName = sportsDbEvent.strLeague,
          event.season = sportsDbEvent.strSeason,
          event.homeTeamName = sportsDbEvent.strHomeTeam,
          event.awayTeamName = sportsDbEvent.strAwayTeam,
          event.homeTeamScore = sportsDbEvent.intHomeScore,
          event.round = sportsDbEvent.intRound,
          event.awayTeamScore = sportsDbEvent.intAwayScore,
          event.eventTimestamp = new Date(new Date(sportsDbEvent.strTimestamp).toISOString()),
          event.insertTimestamp = new Date(currentDateTime),
          event.insertExpirationDate = moment(currentDateTime).add(this.insertValidFor).toDate();

          return event;
        });
      })
    ); 
    return mappedEvents;
  }
}
