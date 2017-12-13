const PlayerAPI = {
  mantooth: {
    players: [
      { pos: "PG", name: "Mantooth", opp: "Purdue", pts: 17, reb: 6, ast: 6, stl: 3, blk: 0, TO: 3, total: 29 },
      { pos: "PG", name: "Xavier Rathan Mayes", opp: "Purdue", pts: 17, reb: 6, ast: 6, stl: 3, blk: 0, TO: 3, total: 29 },
      { pos: "PG", name: "Xavier Rathan Mayes", opp: "Purdue", pts: 17, reb: 6, ast: 6, stl: 3, blk: 0, TO: 3, total: 29 },
      { pos: "PG", name: "Xavier Rathan Mayes", opp: "Purdue", pts: 17, reb: 6, ast: 6, stl: 3, blk: 0, TO: 3, total: 29 },
      { pos: "PG", name: "Xavier Rathan Mayes", opp: "Purdue", pts: 17, reb: 6, ast: 6, stl: 3, blk: 0, TO: 3, total: 29 },
      { pos: "PG", name: "Xavier Rathan Mayes", opp: "Purdue", pts: 17, reb: 6, ast: 6, stl: 3, blk: 0, TO: 3, total: 29 },
      { pos: "PG", name: "Xavier Rathan Mayes", opp: "Purdue", pts: 17, reb: 6, ast: 6, stl: 3, blk: 0, TO: 3, total: 29 },
      { pos: "PG", name: "Xavier Rathan Mayes", opp: "Purdue", pts: 17, reb: 6, ast: 6, stl: 3, blk: 0, TO: 3, total: 29 }
    ]
  },
  marshawns: {
    players: [
      { pos: "PG", name: "Marshawn", opp: "Purdue", pts: 17, reb: 6, ast: 6, stl: 3, blk: 0, TO: 3, total: 29 },
      { pos: "PG", name: "Xavier Rathan Mayes", opp: "Purdue", pts: 17, reb: 6, ast: 6, stl: 3, blk: 0, TO: 3, total: 29 },
      { pos: "PG", name: "Xavier Rathan Mayes", opp: "Purdue", pts: 17, reb: 6, ast: 6, stl: 3, blk: 0, TO: 3, total: 29 },
      { pos: "PG", name: "Xavier Rathan Mayes", opp: "Purdue", pts: 17, reb: 6, ast: 6, stl: 3, blk: 0, TO: 3, total: 29 },
      { pos: "PG", name: "Xavier Rathan Mayes", opp: "Purdue", pts: 17, reb: 6, ast: 6, stl: 3, blk: 0, TO: 3, total: 29 },
      { pos: "PG", name: "Xavier Rathan Mayes", opp: "Purdue", pts: 17, reb: 6, ast: 6, stl: 3, blk: 0, TO: 3, total: 29 },
      { pos: "PG", name: "Xavier Rathan Mayes", opp: "Purdue", pts: 17, reb: 6, ast: 6, stl: 3, blk: 0, TO: 3, total: 29 },
      { pos: "PG", name: "Xavier Rathan Mayes", opp: "Purdue", pts: 17, reb: 6, ast: 6, stl: 3, blk: 0, TO: 3, total: 29 }
    ],
  },
  getTeam: function(teamName){
    teamName = teamName.split(' ')[0].toLowerCase();
    const Players = this[teamName].players;
    return Players;
  }
}

export default PlayerAPI;
