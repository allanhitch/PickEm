import { getTeamInfoByID } from "./ApiCalls"
import {NFLTeamIds} from "./NFLTeamIDs"

const result = getTeamInfoByID(NFLTeamIds.ARI).then(Team => { Team.map(t => t.strTeam).toString()});

console.log("The result of the API call was: " + result);