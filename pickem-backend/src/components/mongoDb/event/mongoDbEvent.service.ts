import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from '../../sportsDbApi/requests/event/entity/event.entity'

@Injectable()
export class MongoDbEventService {
  constructor(@InjectRepository(Event)
    private readonly teamRepository: Repository<Event>,) {}

  async create(team: any): Promise<Event>  {
    return await this.teamRepository.save(team);
  }

  //TODO Prob no reason for create many when we could just pass any lul
  async createMany(teams: any): Promise<Event[]>  {
    return await this.teamRepository.save(teams);
  }

  async getAllEventsBySeason(season: string, leagueId: string): Promise<Event[]> {
    const events = await this.teamRepository.find({season: season, leagueApiNumber: leagueId});
    return events;
  }
}
