import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team } from 'src/teams/teams.model';

@Injectable()
export class MongoDbTeamsService {
    constructor(@InjectModel('Team') private readonly teamModel: Model<Team>) {}

  async insertTeam(team: Team) {
    const newTeam = new this.teamModel({
      apiId: team.apiId,
      teamName: team.apiId,
      shortTeamName: team.shortTeamName,
      sportName: team.sportName,
      leagueName: team.leagueName,
      leagueId: team.leagueId,
      stadiumName: team.stadiumName,
      stadiumLocation: team.stadiumLocation,
      teamBadgeUrl: team.teamBadgeUrl,
      teamLogoUrl: team.teamLogoUrl,
      teamBannerUrl: team.teamBannerUrl,
      insertTimestamp: team.insertTimestamp,
      insertExpirationDate: team.insertExpirationDate
    });
    const result = await newTeam.save();

    return result.id as string;
  }

  async insertTeams(teams: Team[]) {
    const result = await this.teamModel.collection.insertMany(teams);
    result.insertedIds;
  }

  async getAllTeamsByLeague(leagueName: string) {
    const teams = await this.teamModel.find({leagueName: leagueName}).exec();
    return teams;
  }
}
