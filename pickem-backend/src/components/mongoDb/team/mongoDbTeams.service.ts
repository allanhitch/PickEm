import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'mongoose';
import { Team } from 'src/components/sportsDbApi/requests/team/entity/team.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MongoDbTeamsService {
    constructor(@InjectRepository(Team)
    private readonly teamRepository: Repository<Team>,) {}

  async create(teamDto: any): Promise<Team>  {
    const team = new Team();
    team.id = teamDto.apiId;
    team.shortTeamName = teamDto.shortTeamName;
    team.sportName = teamDto.sportName;
    team.leagueName = teamDto.leagueName;
    team.leagueId = teamDto.leagueId;
    team.stadiumName = teamDto.stadiumName;
    team.stadiumLocation = teamDto.stadiumLocation;
    team.teamBadgeUrl = teamDto.teamBadgeUrl;
    team.teamLogoUrl = teamDto.teamLogoUrl;
    team.teamBannerUrl = teamDto.teamBannerUrl;
    team.insertTimestamp = teamDto.insertTimestamp;
    team.insertExpirationDate = teamDto.insertExpirationDate;

    return this.teamRepository.save(team);
  }

  async createMany(teamDtos: any): Promise<Team[]>  {
    const teams : Team[] = [];
    teamDtos.forEach(teamDto => {
      const team = new Team();
      team.id = teamDto.apiId;
      team.shortTeamName = teamDto.shortTeamName;
      team.sportName = teamDto.sportName;
      team.leagueName = teamDto.leagueName;
      team.leagueId = teamDto.leagueId;
      team.stadiumName = teamDto.stadiumName;
      team.stadiumLocation = teamDto.stadiumLocation;
      team.teamBadgeUrl = teamDto.teamBadgeUrl;
      team.teamLogoUrl = teamDto.teamLogoUrl;
      team.teamBannerUrl = teamDto.teamBannerUrl;
      team.insertTimestamp = teamDto.insertTimestamp;
      team.insertExpirationDate = teamDto.insertExpirationDate;
      teams.push(team);
    });

    return this.teamRepository.save(teams);
  }

  async getAllTeamsByLeague(leagueName: string): Promise<Team[]> {
    return this.teamRepository.find({ where: {leagueName: leagueName}});
  }
}
