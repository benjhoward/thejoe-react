const PlayerAPI = {
  mantooth: {
    players: [
      { pos: "PG", name: "Andrew Rowsey", opp: "Georgetown", pts: 30, reb: 6, ast: 6, stl: 3, blk: 0, TO: 3, total: 42 },
      { pos: "WING", name: "Trevon Blueitt", opp: "DePaul", pts: 25, reb: 5, ast: 8, stl: 1, blk: 1, TO: 2, total: 38 },
      { pos: "WING", name: "Kyle Guy", opp: "Boston Col", pts: 19, reb: 3, ast: 2, stl: 1, blk: 0, TO: 4, total: 19 },
      { pos: "BIG", name: "Tyler Davis", opp: "@ Alabama", pts: 19, reb: 11, ast: 4, stl: 1, blk: 2, TO: 2, total: 35 },
      { pos: "BIG", name: "Angel Delgado", opp: "St. John's", pts: 13, reb: 16, ast: 4, stl: 3, blk: 2, TO: 1, total: 37 },
      { pos: "UTIL", name: "Shizz Alston, Jr", opp: "@ Houston", pts: 18, reb: 4, ast: 4, stl: 3, blk: 0, TO: 3, total: 26 },
      { pos: "UTIL", name: "Tremont Waters", opp: "@ Memphis", pts: 18, reb: 1, ast: 8, stl: 4, blk: 0, TO: 4, total: 27 }
    ]
  },
  marshawns: {
    players: [
      { pos: "PG", name: "Kamar Baldwin", opp: "Villanova", pts: 17, reb: 6, ast: 6, stl: 3, blk: 0, TO: 3, total: 29 },
      { pos: "WING", name: "Justin Simon", opp: "Seton Hall", pts: 17, reb: 6, ast: 6, stl: 3, blk: 0, TO: 3, total: 29 },
      { pos: "WING", name: "Jarrey Foster", opp: "USF", pts: 17, reb: 6, ast: 6, stl: 3, blk: 0, TO: 3, total: 29 },
      { pos: "BIG", name: "Grant Williams", opp: "Tennessee", pts: 17, reb: 6, ast: 6, stl: 3, blk: 0, TO: 3, total: 29 },
      { pos: "BIG", name: "Daniel Gafford", opp: "Arkansas", pts: 17, reb: 6, ast: 6, stl: 3, blk: 0, TO: 3, total: 29 },
      { pos: "UTIL", name: "Kevin Huerter", opp: "UMBC", pts: 17, reb: 6, ast: 6, stl: 3, blk: 0, TO: 3, total: 29 },
      { pos: "UTIL", name: "Martin Krampelj", opp: "Providence", pts: 17, reb: 6, ast: 6, stl: 3, blk: 0, TO: 3, total: 29 }
    ],
  },
  getTeam: function(teamName){
    teamName = teamName.split(' ')[0].toLowerCase();
    const Players = this[teamName].players;
    return Players;
  }
}

export default PlayerAPI;
