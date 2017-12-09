import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PlayerTable from './PlayerTable';
import './css/matchup-styles.css';

class Matchup extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="container">
            <div className="row nav-top">
              <div className="col-sm-6 nav-logo"><a href="../index.html"><img src="../img/joe-nav.png"/></a><p>Hello, Coach Howard <i className="fa fa-cog" aria-hidden="true"></i></p></div>
              <div className="col-sm-6 ">
                <ul className="row nav-menu">
                  <Link to="/players"><li className="col-sm-3">Players</li></Link>
                  <li className="col-sm-3 active">Matchup</li>
                  <Link to="/team"><li className="col-sm-3">My Team</li></Link>
                  <Link to="/league"><li className="col-sm-3 nm-right">League</li></Link>
                </ul>
              </div>
            </div>

            <div className="row nav-title">
              <div className="col-sm-4"></div>
              <div className="col-sm-4"><h2>Week 13 Matchup</h2></div>
              <div className="col-sm-4"><button>Week 13<i className="fa fa-angle-down" aria-hidden="true"></i></button></div>

            </div>
          </div>
        </nav>

        <section className="score">
          <div className="container scoreboard">
            <div className="row team-score">
              <div className="col-md-3 team-score-name">
                <img src="img/wes.jpg" className="score-mug"/>
                <p>Mantooth Saints</p>
              </div>
              <div className="col-xs-8 np-left">
                      <p className="losing-team">point breakdown</p>
              </div>
              <div className="col-md-1 score-total"><p>180</p></div>
            </div>

            <div className="row team-score">
              <div className="col-md-3 team-score-name">
                <img src="img/matchup/lynch.jpg" className="score-mug"/>
                <p>Marshawn's Dunkin Dutchmen</p>
              </div>
              <div className="col-xs-8 np-left">
                      <p className="winning-team">point breakdown</p>
                    </div>
              <div className="col-md-1 score-total"><p>202</p></div>
            </div>
          </div>
        </section>

        <section className="score-breakdown">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="matchup-pie">
                  <img src="img/saints-wheel.png"/>
                </div>
                <PlayerTable team="Another Team"></PlayerTable>
              </div>

              <div className="col-sm-6">
                <div className="matchup-pie">
                  <img src="img/dutch-wheel.png"/>
                </div>

                  <PlayerTable team="Mantooth Saints"></PlayerTable>

              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 show-bench">
                <button>Show bench<i className="fa fa-angle-down" aria-hidden="true"></i></button>
              </div>
            </div>
          </div>
        </section>

        <section className="container other-scores">
          <div className="row">
            <div className="col-sm-6 game">
              <div className="row">
                  <div className="col-sm-12 more-scores">
                    <div className="col-xs-2 np-right">
                      <img src="img/matchup/lynch.jpg" className="score-mug"/>
                    </div>
                    <div className="col-xs-8 np-left">
                      <p className="winning-team">Team Name Here</p>
                    </div>
                    <div className="col-xs-2">
                      <div className="score-total"><p>202</p></div>
                    </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-sm-12 more-scores">
                    <div className="col-xs-2 np-right">
                      <img src="img/wes.jpg" className="score-mug"/>
                    </div>
                    <div className="col-xs-8 np-left">
                      <p className="losing-team">Team Name Here</p>
                    </div>
                    <div className="col-xs-2">
                      <div className="score-total"><p>180</p></div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-sm-6 game">
              <div className="row">
                  <div className="col-sm-12 more-scores">
                    <div className="col-xs-2 np-right">
                      <img src="img/matchup/lynch.jpg" className="score-mug"/>
                    </div>
                    <div className="col-xs-8 np-left">
                      <p className="winning-team">Team Name Here</p>
                    </div>
                    <div className="col-xs-2">
                      <div className="score-total"><p>202</p></div>
                    </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-sm-12 more-scores">
                    <div className="col-xs-2 np-right">
                      <img src="img/wes.jpg" className="score-mug"/>
                    </div>
                    <div className="col-xs-8 np-left">
                      <p className="losing-team">Team Name Here</p>
                    </div>
                    <div className="col-xs-2">
                      <div className="score-total"><p>180</p></div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 game">
              <div className="row">
                  <div className="col-sm-12 more-scores">
                    <div className="col-xs-2 np-right">
                      <img src="img/matchup/lynch.jpg" className="score-mug"/>
                    </div>
                    <div className="col-xs-8 np-left">
                      <p className="winning-team">Team Name Here</p>
                    </div>
                    <div className="col-xs-2">
                      <div className="score-total"><p>202</p></div>
                    </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-sm-12 more-scores">
                    <div className="col-xs-2 np-right">
                      <img src="img/wes.jpg" className="score-mug"/>
                    </div>
                    <div className="col-xs-8 np-left">
                      <p className="losing-team">Team Name Here</p>
                    </div>
                    <div className="col-xs-2">
                      <div className="score-total"><p>180</p></div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-sm-6 game">
              <div className="row">
                  <div className="col-sm-12 more-scores">
                    <div className="col-xs-2 np-right">
                      <img src="img/matchup/lynch.jpg" className="score-mug"/>
                    </div>
                    <div className="col-xs-8 np-left">
                      <p className="winning-team">Team Name Here</p>
                    </div>
                    <div className="col-xs-2">
                      <div className="score-total"><p>202</p></div>
                    </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-sm-12 more-scores">
                    <div className="col-xs-2 np-right">
                      <img src="img/wes.jpg" className="score-mug"/>
                    </div>
                    <div className="col-xs-8 np-left">
                      <p className="losing-team">Team Name Here</p>
                    </div>
                    <div className="col-xs-2">
                      <div className="score-total"><p>180</p></div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 game" id="game-5">
              <div className="row">
                  <div className="col-sm-12 more-scores">
                    <div className="col-xs-2 np-right">
                      <img src="img/matchup/lynch.jpg" className="score-mug"/>
                    </div>
                    <div className="col-xs-8 np-left">
                      <p className="winning-team">Team Name Here</p>
                    </div>
                    <div className="col-xs-2">
                      <div className="score-total"><p>202</p></div>
                    </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-sm-12 more-scores">
                    <div className="col-xs-2 np-right">
                      <img src="img/wes.jpg" className="score-mug"/>
                    </div>
                    <div className="col-xs-8 np-left">
                      <p className="losing-team">Team Name Here</p>
                    </div>
                    <div className="col-xs-2">
                      <div className="score-total"><p>180</p></div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container fap-leaders">
          <div className="row">
            <div className="col-sm-12 background-top"></div>
            <div className="col-sm-12 background-bottom"></div>
            <div className="container fap-container">
              <div className="fap">
                <h5>Week 13 FAP Leaders</h5>
                <div className="top-fap-five">
                  <div className="top-fap">
                    <p className="fap-pts">44</p>
                    <p className="fap-player">XAVIER RATHAN-MAYES</p>
                    <div className="fap-chart">
                      <table className="fap-stats">
                      <tbody>
                      <tr>
                        <th colSpan="2">vs. North Carolina</th>
                        </tr>
                        <tr>
                          <td>Points</td><td>24</td>
                        </tr>

                        <tr>
                          <td>Rebounds</td><td>6</td>
                        </tr>
                        <tr>
                          <td>Assists</td><td>12</td>
                        </tr>
                        <tr>
                          <td>Steals</td><td>4</td>
                        </tr>
                        <tr>
                          <td>Blocks</td><td>0</td>
                        </tr>
                        <tr>
                          <td>Turnovers</td><td>2</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="fap-team">Team name</p></div>
                  <div className="top-fap">
                    <p className="fap-pts">44</p>
                    <p className="fap-player">XAVIER RATHAN-MAYES</p>
                    <div className="fap-chart">
                      <table className="fap-stats">
                        <tbody>
                          <tr>
                            <th colSpan="2">vs. North Carolina</th>
                          </tr>

                          <tr>
                            <td>Points</td><td>24</td>
                          </tr>
                          <tr>
                            <td>Rebounds</td><td>6</td>
                          </tr>
                          <tr>
                            <td>Assists</td><td>12</td>
                          </tr>
                          <tr>
                            <td>Steals</td><td>4</td>
                          </tr>
                          <tr>
                            <td>Blocks</td><td>0</td>
                          </tr>
                          <tr>
                            <td>Turnovers</td><td>2</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="fap-team">Team name</p></div>
                  <div className="top-fap">
                    <p className="fap-pts">44</p>
                    <p className="fap-player">XAVIER RATHAN-MAYES</p>
                    <div className="fap-chart">
                      <table className="fap-stats">
                      <tbody>
                        <tr>
                          <th colSpan="2">vs. North Carolina</th>
                        </tr>

                        <tr>
                          <td>Points</td><td>24</td>
                        </tr>
                        <tr>
                          <td>Rebounds</td><td>6</td>
                        </tr>
                        <tr>
                          <td>Assists</td><td>12</td>
                        </tr>
                        <tr>
                          <td>Steals</td><td>4</td>
                        </tr>
                        <tr>
                          <td>Blocks</td><td>0</td>
                        </tr>
                        <tr>
                          <td>Turnovers</td><td>2</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="fap-team">Team name</p></div>
                  <div className="top-fap">
                    <p className="fap-pts">44</p>
                    <p className="fap-player">XAVIER RATHAN-MAYES</p>
                    <div className="fap-chart">
                      <table className="fap-stats">
                      <tbody>
                      <tr>
                        <th colSpan="2">vs. North Carolina</th>
                        </tr>
                        <tr>
                          <td>Points</td><td>24</td>
                        </tr>
                        <tr>
                          <td>Rebounds</td><td>6</td>
                        </tr>
                        <tr>
                          <td>Assists</td><td>12</td>
                        </tr>
                        <tr>
                          <td>Steals</td><td>4</td>
                        </tr>
                        <tr>
                          <td>Blocks</td><td>0</td>
                        </tr>
                        <tr>
                          <td>Turnovers</td><td>2</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="fap-team">Team name</p></div>
                  <div className="top-fap">
                    <p className="fap-pts">44</p>
                    <p className="fap-player">XAVIER RATHAN-MAYES</p>
                    <div className="fap-chart">
                      <table className="fap-stats">
                      <tbody>
                      <tr>
                        <th colSpan="2">vs. North Carolina</th>
                        </tr>
                        <tr>
                          <td>Points</td><td>24</td>
                        </tr>
                        <tr>
                          <td>Rebounds</td><td>6</td>
                        </tr>
                        <tr>
                          <td>Assists</td><td>12</td>
                        </tr>
                        <tr>
                          <td>Steals</td><td>4</td>
                        </tr>
                        <tr>
                          <td>Blocks</td><td>0</td>
                        </tr>
                        <tr>
                          <td>Turnovers</td><td>2</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="fap-team">Team name</p></div>
                </div>
              </div>
            </div>
         </div>
        </section>
      </div>
    );
  }
}

export default Matchup;
