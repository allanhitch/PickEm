import * as mongoos from 'mongoose';
import { DbCacheableModel } from 'src/components/utilities/mongoDbLongTermCaching/mongoDbLongTermCaching.types';
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity({name: 'events'})
//TODO: abstract out similiar columns to another class
//TODO: do the entities even go here? not sure.
export class Event {
    @ObjectIdColumn()
    id: ObjectID;
    
    @Column({
        type: 'number',
        unique: false,
        nullable: true,
    })
    apiDbNumber: number;

    @Column({
        type: 'string',
        unique: false,
        nullable: true,
    })
    eventFriendlyName: string;
    
    @Column({
        type: 'string',
        unique: false,
        nullable: true,
    })
    sport: string;
    
    @Column({
        type: 'number',
        unique: false,
        nullable: true,
    })
    leagueApiNumber: string;
    
    @Column({
        type: 'string',
        unique: false,
        nullable: true,
    })
    leagueName: string;
    
    @Column({
        type: 'string',
        unique: false,
        nullable: true,
    })
    season: string;
    
    @Column({
        type: 'string',
        unique: false,
        nullable: true,
    })
    homeTeamName: string;
    
    @Column({
        type: 'string',
        unique: false,
        nullable: true,
    })
    awayTeamName: string;
    
    @Column({
        type: 'number',
        unique: false,
        nullable: true,
    })
    homeTeamScore: number;
    
    @Column({
        type: 'number',
        unique: false,
        nullable: true,
    })
    round: number;
    
    @Column({
        type: 'number',
        unique: false,
        nullable: true,
    })
    awayTeamScore: number;
    
    @Column({
        type: 'date',
        unique: false,
        nullable: true,
    })
    eventTimestamp: Date;
    
    @Column({
        type: 'date',
        unique: false,
        nullable: true,
    })
    insertTimestamp: Date;
    
    @Column({
        type: 'date',
        unique: false,
        nullable: true,
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
    idLeague: string,
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