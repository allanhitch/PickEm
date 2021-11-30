import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Team {
    @ObjectIdColumn()
    id: ObjectID;

    @Column({
        type: 'number',
        unique: false,
        nullable: true
    })
    apiDbNumber: number;

    @Column({
        type: 'string',
        unique: false,
        nullable: true
    })
    teamName: string;

    @Column({
        type: 'string',
        nullable: true,
        unique: false,
    })
    shortTeamName: string;

    @Column({
        type: 'string',
        nullable: true,
        unique: false,
    })
    sportName: string;

    @Column({
        type: 'string',
        nullable: true,
        unique: false,
    })
    leagueName: string;

    @Column({
        type: 'number',
        unique: false,
        nullable: true,
    })
    leagueApiNumber: number;

    @Column({
        type: 'string',
        nullable: true,
        unique: false,
    })
    stadiumName: string;

    @Column({
        type: 'string',
        nullable: true,
        unique: false,
    })
    stadiumLocation: string;

    @Column({
        type: 'string',
        nullable: true,
        unique: false,
    })
    teamBadgeUrl: string;

    @Column({
        type: 'string',
        nullable: true,
        unique: false,
    })
    teamLogoUrl: string;

    @Column({
        type: 'string',
        nullable: true,
        unique: false,
    })
    teamBannerUrl: string;

    @Column({
        type: 'date',
        nullable: true,
        unique: false,
    })
    insertTimestamp: Date;

    @Column({
        type: 'date',
        nullable: true,
        unique: false,
    })
    insertExpirationDate: Date;
}

export interface SportDbTeam {
    idTeam: number,
    idSoccerXML: string,
    idAPIfootball: number,
    intLoved: number,
    strTeam: string,
    strTeamShort: string,
    strAlternate: string,
    intFormedYear: number,
    strSport: string,
    strLeague: string,
    idLeague: number,
    strLeague2: string,
    idLeague2: number,
    strLeague3: string,
    idLeague3: number,
    strLeague4: string,
    idLeague4: number,
    strLeague5: string,
    idLeague5: number,
    strLeague6: string,
    idLeague6: number,
    strLeague7: string,
    idLeague7: number,
    strDivision: string,
    strManager: string,
    strStadium: string,
    strKeywords: string,
    strRSS: string,
    strStadiumThumb: string,
    strStadiumDescription: string,
    strStadiumLocation: string,
    intStadiumCapacity: number,
    strWebsite: string,
    strFacebook: string,
    strTwitter: string,
    strInstagram: string,
    strDescriptionEN: string,
    strDescriptionDE: string,
    strDescriptionFR: string,
    strDescriptionCN: string,
    strDescriptionIT: string,
    strDescriptionJP: string,
    strDescriptionRU: string,
    strDescriptionES: string,
    strDescriptionPT: string,
    strDescriptionSE: string,
    strDescriptionNL: string,
    strDescriptionHU: string,
    strDescriptionNO: string,
    strDescriptionIL: string,
    strDescriptionPL: string,
    strGender: string,
    strCountry: string,
    strTeamBadge: string,
    strTeamJersey: string,
    strTeamLogo: string,
    strTeamFanart1:string,
    strTeamFanart2:string,
    strTeamFanart3:string,
    strTeamFanart4:string,
    strTeamBanner: string,
    strYoutube: string,
    strLocked: string
}
