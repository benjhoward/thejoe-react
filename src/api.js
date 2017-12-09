// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const PlayerAPI = {
  players: [
    { pos: "PG", name: "Xavier Rathan Mayes", opp: "Purdue", pts: 17, reb: 6, ast: 6, stl: 3, blk: 0, TO: 3, total: 29 },
    { pos: "PG", name: "Xavier Rathan Mayes", opp: "Purdue", pts: 17, reb: 6, ast: 6, stl: 3, blk: 0, TO: 3, total: 29 },
    { pos: "PG", name: "Xavier Rathan Mayes", opp: "Purdue", pts: 17, reb: 6, ast: 6, stl: 3, blk: 0, TO: 3, total: 29 },
    { pos: "PG", name: "Xavier Rathan Mayes", opp: "Purdue", pts: 17, reb: 6, ast: 6, stl: 3, blk: 0, TO: 3, total: 29 },
    { pos: "PG", name: "Xavier Rathan Mayes", opp: "Purdue", pts: 17, reb: 6, ast: 6, stl: 3, blk: 0, TO: 3, total: 29 },
    { pos: "PG", name: "Xavier Rathan Mayes", opp: "Purdue", pts: 17, reb: 6, ast: 6, stl: 3, blk: 0, TO: 3, total: 29 },
    { pos: "PG", name: "Xavier Rathan Mayes", opp: "Purdue", pts: 17, reb: 6, ast: 6, stl: 3, blk: 0, TO: 3, total: 29 },
    { pos: "PG", name: "Xavier Rathan Mayes", opp: "Purdue", pts: 17, reb: 6, ast: 6, stl: 3, blk: 0, TO: 3, total: 29 }
  ],
  all: function() {
    return this.players
  }
}

export default PlayerAPI
