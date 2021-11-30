import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from 'src/components/sportsDbApi/requests/team/entity/team.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MongoDbTeamsService {
    constructor(@InjectRepository(Team)
    private readonly teamRepository: Repository<Team>,) {}

  async create(team: any): Promise<Team>  {
    return await this.teamRepository.save(team);
  }

  async createMany(teams: any): Promise<Team[]>  {
    return await this.teamRepository.save(teams);
  }

  async getAllTeamsByLeague(leagueName: string): Promise<Team[]> {
    return await this.teamRepository.find({leagueName: leagueName});
  }

  async getTeamByName(teamName: string): Promise<Team> {
    const search = await this.teamRepository.findOne({teamName: teamName});
    return search as Team;
  }
}
