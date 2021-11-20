import { Team } from "./Team"

function getTeamInfoByID(teamID: number): Promise<Team[]> {
    return fetch(`https://www.thesportsdb.com/api/v1/json/40130162/lookupteam.php?id=${teamID}`)
                .then(res => res.json())
                .then(res => {
                        return res as Team[]
                })
}

//update this with correct obect
function getCurrentNflSchedule(): Promise<Team[]> {
    return fetch(`https://www.thesportsdb.com/api/v1/json/40130162/latestamericanfootball.php`)
                .then(res => res.json())
                .then(res => {
                        return res as Team[]
                })
}

export {
    getTeamInfoByID,
    getCurrentNflSchedule,
}