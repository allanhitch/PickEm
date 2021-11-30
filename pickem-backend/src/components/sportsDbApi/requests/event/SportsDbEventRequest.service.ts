import {  Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { firstValueFrom, map, Observable } from 'rxjs';
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

  async getEventsBySeason(seasonYear: string, leagueDbNumber: string): Promise<Event[]> {
    const sportsDbApiParams : SportsDbApiUrlParams[] = [
      {parameterName: "id", value: leagueDbNumber},
      {parameterName: "s", value: seasonYear},
    ];
    const requestString = this.sportsDbApiRequestCreatorService.createSportsDbApiRequestUrl(this.sportsDbApiEventsPath, sportsDbApiParams);
    const allEvents = await firstValueFrom(this.httpService.get(requestString));

    return allEvents.data.events.map((sportsDbEvent: SportsDbEvent) => {
      const currentDateTime = new Date().toISOString();
      const event = new Event();
      event.apiDbNumber = sportsDbEvent.idEvent,
      event.eventFriendlyName = sportsDbEvent.strEvent,
      event.sport = sportsDbEvent.strSport,
      event.leagueApiNumber = sportsDbEvent.idLeague,
      event.leagueName = sportsDbEvent.strLeague,
      event.season = sportsDbEvent.strSeason,
      event.homeTeamName = sportsDbEvent.strHomeTeam,
      event.awayTeamName = sportsDbEvent.strAwayTeam,
      event.homeTeamScore = sportsDbEvent.intHomeScore,
      event.round = sportsDbEvent.intRound,
      event.awayTeamScore = sportsDbEvent.intAwayScore,
      //TODO: may need to double check what timezone the sports db event is returning
      event.eventTimestamp = new Date(new Date(sportsDbEvent.strTimestamp).toISOString()),
      event.insertTimestamp = new Date(currentDateTime),
      event.insertExpirationDate = moment(currentDateTime).add(this.insertValidFor).toDate();

      return event;
    }) as Event[];
  }
}
