import { Injectable } from '@nestjs/common';
import { MongoDbEventService } from 'src/components/mongoDb/event/mongoDbEvent.service';
import { SportsDbEventRequestService } from 'src/components/sportsDbApi/requests/event/SportsDbEventRequest.service';
import { Event } from '../../sportsDbApi/requests/event/entity/event.entity'

@Injectable()
export class ScheduleService {
  constructor(private readonly sportsDbEventRequestService: SportsDbEventRequestService,
    private readonly mongoDbEventService: MongoDbEventService) {}

  async getAllEventsBySeason(season: string, leagueId: string) {
    const teams = await this.mongoDbEventService.getAllEventsBySeason(season, leagueId);
    if(this.isManyTeamsAvailableInternally(teams)) {
      const teamsFromSportsDb = await this.sportsDbEventRequestService.getEventsBySeason(season, leagueId);
      return await this.mongoDbEventService.createMany(teamsFromSportsDb);
    } else {
      return teams;
    }
  }

  calculatePercentageExpired(insertDate: Date, expirationDate: Date) {
    var total = expirationDate.getTime() - insertDate.getTime();
    var progress = new Date(new Date(Date.now()).toUTCString()).getTime() - insertDate.getTime();

    const percent = progress / total * 100;
    return percent;
  }

  isTeamAvailableInternally(event: Event) {
    return (event != null && this.calculatePercentageExpired(event.insertTimestamp, event.insertExpirationDate) >= 90)
    || event == null
  }

  isManyTeamsAvailableInternally(teams: Event[]) {
    for(let x = 0; x < teams.length; x++) {
      if(!this.isTeamAvailableInternally(teams[x])) {
        return false;
      }
    }

    return true;
  }
}
