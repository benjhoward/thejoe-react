import React, { Component } from 'react';
import PlayerAPI from './api';

const PlayerRows = (props) => {
  const TeamPlayers = PlayerAPI.getTeam(props.team);
    return(
      <tbody>
        <tr>
          <th colSpan="10" className="matchup-team">{props.team}</th>
        </tr>
        <tr className="left">
          <th>Pos</th><th>Name</th><th>Opp</th><th>Pts</th><th>Reb</th><th>Ast</th><th>Stl</th><th>Blk</th><th>TO</th><th><strong>Total</strong></th>
        </tr>

        {
          TeamPlayers.map( (player, i) => (
            <tr key={i}>
            {
              Object.keys(player).map( (prop, i) => (
                <td key={i}>{player[prop]}</td>
              ))
            }
            </tr>
          ))
        }
      </tbody>
    )
}


class PlayerTable extends Component {
  render() {
    return (
      <table className="matchup-roster">
        <PlayerRows team={this.props.team} />
      </table>
    );
  }
}

export default PlayerTable;
