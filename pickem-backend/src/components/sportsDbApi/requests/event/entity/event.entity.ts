import * as mongoos from 'mongoose';
import { DbCacheableModel } from 'src/components/utilities/mongoDbLongTermCaching/mongoDbLongTermCaching.types';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity({name: 'events'})
export class Event {
    @ObjectIdColumn()
    id: number;
    
    @Column({
        type: 'string',
    })
    eventFriendlyName: string;
    
    @Column({
        type: 'string',
    })
    sport: string;
    
    @Column({
        type: 'number',
        unique: true
    })
    leagueId: number;
    
    @Column({
        type: 'string',
    })
    leagueName: string;
    
    @Column({
        type: 'string',
    })
    season: string;
    
    @Column({
        type: 'string',
    })
    homeTeamName: string;
    
    @Column({
        type: 'string',
    })
    awayTeamName: string;
    
    @Column({
        type: 'number',
    })
    homeTeamScore: number;
    
    @Column({
        type: 'number',
    })
    round: number;
    
    @Column({
        type: 'number',
    })
    awayTeamScore: number;
    
    @Column({
        type: 'date',
    })
    eventTimestamp: Date;
    
    @Column({
        type: 'date',
    })
    insertTimestamp: Date;
    
    @Column({
        type: 'date',
    })
    insertExpirationDate: Date;
}

export interface SportsDbEvent {
    idEvent: number,
    idSoccerXML: string,
    idAPIfootball: string,
    strEvent: string,
    strEventAlternate: string,
    strFilename: string,
    strSport: string,
    idLeague: number,
    strLeague: string,
    strSeason: string,
    strDescriptionEN: string,
    strHomeTeam: string,
    strAwayTeam: string,
    intHomeScore: number,
    intRound: number,
    intAwayScore: number,
    intSpectators: number,
    strOfficial: string,
    strHomeGoalDetails: string,
    strHomeRedCards: string,
    strHomeYellowCards: string,
    strHomeLineupGoalkeeper: string,
    strHomeLineupDefense: string,
    strHomeLineupMidfield: string,
    strHomeLineupForward: string,
    strHomeLineupSubstitutes: string,
    strHomeFormation: string,
    strAwayRedCards: string,
    strAwayYellowCards: string,
    strAwayGoalDetails: string,
    strAwayLineupGoalkeeper: string,
    strAwayLineupDefense: string,
    strAwayLineupMidfield: string,
    strAwayLineupForward: string,
    strAwayLineupSubstitutes: string,
    strAwayFormation: string,
    intHomeShots: number,
    intAwayShots: number,
    strTimestamp: Date,
    dateEvent: number,
    dateEventLocal: number,
    strTime: Date,
    strTimeLocal: string,
    strTVStation: string,
    idHomeTeam: number,
    idAwayTeam: number,
    strResult: string,
    strVenue: string,
    strCountry: string,
    strCity: string,
    strPoster: string,
    strSquare: string,
    strFanart: string,
    strThumb: string,
    strBanner: string,
    strMap: string,
    strTweet1: string,
    strTweet2: string,
    strTweet3: string,
    strVideo: string,
    strStatus: string,
    strPostponed: string,
    strLocked: string,
}