import * as mongoos from 'mongoose';
import { DbCacheableModel } from 'src/components/utilities/mongoDbLongTermCaching/mongoDbLongTermCaching.types';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity({name: 'teams'})
export class Team {
    @ObjectIdColumn()
    id: number;

    @Column({
        type: 'string',
    })
    teamName: string;

    @Column({
        type: 'string',
    })
    shortTeamName: string;

    @Column({
        type: 'string',
    })
    sportName: string;

    @Column({
        type: 'string',
    })
    leagueName: string;

    @Column({
        type: 'number',
        unique: true
    })
    leagueId: number;

    @Column({
        type: 'string',
    })
    stadiumName: string;

    @Column({
        type: 'string',
    })
    stadiumLocation: string;

    @Column({
        type: 'string',
    })
    teamBadgeUrl: string;

    @Column({
        type: 'string',
    })
    teamLogoUrl: string;

    @Column({
        type: 'string',
    })
    teamBannerUrl: string;

    @Column({
        type: 'date',
    })
    insertTimestamp: Date;

    @Column({
        type: 'date',
    })
    insertExpirationDate: Date;
}

// export interface Team extends mongoos.Document, DbCacheableModel {
//     apiId: number,
//     teamName: string,
//     shortTeamName: string,
//     sportName: string,
//     leagueName: string,
//     leagueId: number,
//     stadiumName: string,
//     stadiumLocation: string,
//     teamBadgeUrl: string,
//     teamLogoUrl: string,
//     teamBannerUrl: string,
// }

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
