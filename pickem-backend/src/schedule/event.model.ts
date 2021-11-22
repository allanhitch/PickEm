import * as mongoos from 'mongoose';

export const EventSchema = new mongoos.Schema({
    apiId: {type: Number, required: true},
    eventFriendlyName: {type: String, required: true},
    sport: {type: String, required: true},
    leagueId: {type: Number, required: true},
    leagueName: {type: String, required: true},
    season: {type: Number, required: true},
    homeTeamName: {type: String, required: true},
    awayTeamname: {type: String, required: true},
    homeTeamScore: {type: Number, required: true},
    round: {type: Number, required: true},
    awayTeamScore: {type: Number, required: true},
    eventTimestamp: {type: Date, required: true}
});

export interface Event extends mongoos.Document {
    apiId: number,
    eventFriendlyName: string,
    sport: string,
    leagueId: number,
    leagueName: string,
    season: number,
    homeTeamName: string,
    awayTeamname: string,
    homeTeamScore: number,
    round: number,
    awayTeamScore: number,
    eventTimestamp: Date
}