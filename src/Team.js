import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/team-styles.css';

class Team extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="container">
            <div className="row nav-top">
              <div className="col-sm-6 nav-logo"><Link to='/'><img src="img/joe-nav.png" alt="The Joe"/></Link><p>Hello, Coach Howard <i className="fa fa-cog" aria-hidden="true"></i></p></div>
              <div className="col-sm-6 ">
                <ul className="row nav-menu">
                  <Link to="/players"><li className="col-sm-3">Players</li></Link>
                  <Link to="/matchup"><li className="col-sm-3">Matchup</li></Link>
                  <li className="col-sm-3 active">My Team</li>
                  <Link to="/league"><li className="col-sm-3 nm-right">League</li></Link>
                </ul>
              </div>
            </div>

            <div className="row nav-title">
              <div className="col-sm-4"></div>
              <div className="col-sm-4"><img src="img/matchup/wes.jpg" alt="Mantooth" className="score-mug"/><h2>Mantooth Saints</h2></div>
              <div className="col-sm-4">
              {/*<button>Week 13<i className="fa fa-angle-down" aria-hidden="true" style="margin-left: 20px;"></i></button>*/}
              </div>
            </div>
          </div>
        </nav>

        <section className="matchup-score">
          <div className="container">
            <div className="score-matchup">
              <p>MATCHUP</p>
            </div>
          </div>
          <div className="container">
                <div className="score-container">
                  <div className="league-title-button">

                    <div className="score-button">
                      <button>
                        <div className="players-button">
                          <p>Week 13</p>
                          <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </div>
                      </button>
                    </div>

                    <div className="league-title-subject score-team-name">
                      <p>Your team name</p>
                    </div>

                    <div className="league-title-subject score-team" id="score-line">
                      <p>240</p>
                    </div>
                  </div>

                  <div className="league-title-button">

                    <div className="league-title-subject right-subject score-team">
                      <p>240</p>
                    </div>

                    <div className="league-title-subject score-team-name right-subject">
                      <p>Opponent team name</p>
                    </div>

                    <div className="score-button">
                      <button>
                        <div className="players-button">
                          <p>Team</p>
                          <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </div>
                      </button>
                    </div>




                  </div>
                </div>
          </div>
        </section>

        <section className="score-breakdown">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="start-bench">
                  <p>STARTING ROSTER</p>
                </div>
                <table className="matchup-roster team-roster split-roster">
                  <tbody>
                    <tr>
                      <th colSpan="6" className="matchup-team">2017-18 SEASON</th>
                      <th colSpan="10" className="matchup-team">WEEK 13</th>
                    </tr>
                    <tr>
                      <th>Pos</th><th>Name</th><th>School</th><th>Yr</th><th>GP</th><th>FAPPG</th><th>Opponent</th><th>Day</th><th>Time</th><th>Pts</th><th>Reb</th><th>Ast</th><th>Stl</th><th>Blk</th><th>TO</th><th>Total</th>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>Purdue</td><td>Tue</td><td>10:30 p.m.</td><td>17</td><td>6</td><td>6</td><td>3</td><td>0</td><td>3</td><td>29</td>
                    </tr>
                    <tr>
                      <td>WING</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>Purdue</td><td>Tue</td><td>10:30 p.m.</td><td>17</td><td>6</td><td>6</td><td>3</td><td>0</td><td>3</td><td>29</td>
                    </tr>
                    <tr>
                      <td>WING</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>Purdue</td><td>Tue</td><td>10:30 p.m.</td><td>17</td><td>6</td><td>6</td><td>3</td><td>0</td><td>3</td><td>29</td>
                    </tr>
                    <tr>
                      <td>BIG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>Purdue</td><td>Tue</td><td>10:30 p.m.</td><td>17</td><td>6</td><td>6</td><td>3</td><td>0</td><td>3</td><td>29</td>
                    </tr>
                    <tr>
                      <td>BIG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>Purdue</td><td>Tue</td><td>10:30 p.m.</td><td>17</td><td>6</td><td>6</td><td>3</td><td>0</td><td>3</td><td>29</td>
                    </tr>
                    <tr>
                      <td>UTIL</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>Purdue</td><td>Tue</td><td>10:30 p.m.</td><td>17</td><td>6</td><td>6</td><td>3</td><td>0</td><td>3</td><td>29</td>
                    </tr>
                    <tr>
                      <td>UTIL</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>Purdue</td><td>Tue</td><td>10:30 p.m.</td><td>17</td><td>6</td><td>6</td><td>3</td><td>0</td><td>3</td><td>29</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row bench">
              <div className="col-sm-12">
                <div className="start-bench pine">
                  <p>BENCH</p>
                </div>
                <table className="matchup-roster team-roster">
                  <tbody>
                    <tr>
                      <th>Pos</th><th>Name</th><th>School</th><th>Yr</th><th>GP</th><th>FAPPG</th><th>Opponent</th><th>Day</th><th>Time</th><th>Pts</th><th>Reb</th><th>Ast</th><th>Stl</th><th>Blk</th><th>TO</th><th>Total</th>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>Purdue</td><td>Tue</td><td>10:30 p.m.</td><td>17</td><td>6</td><td>6</td><td>3</td><td>0</td><td>3</td><td>29</td>
                    </tr>
                    <tr>
                      <td>WING</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>Purdue</td><td>Tue</td><td>10:30 p.m.</td><td>17</td><td>6</td><td>6</td><td>3</td><td>0</td><td>3</td><td>29</td>
                    </tr>
                    <tr>
                      <td>WING</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>Purdue</td><td>Tue</td><td>10:30 p.m.</td><td>17</td><td>6</td><td>6</td><td>3</td><td>0</td><td>3</td><td>29</td>
                    </tr>
                    <tr>
                      <td>BIG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>Purdue</td><td>Tue</td><td>10:30 p.m.</td><td>17</td><td>6</td><td>6</td><td>3</td><td>0</td><td>3</td><td>29</td>
                    </tr>
                    <tr>
                      <td>BIG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>Purdue</td><td>Tue</td><td>10:30 p.m.</td><td>17</td><td>6</td><td>6</td><td>3</td><td>0</td><td>3</td><td>29</td>
                    </tr>
                    <tr>
                      <td>WING</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>Purdue</td><td>Tue</td><td>10:30 p.m.</td><td>17</td><td>6</td><td>6</td><td>3</td><td>0</td><td>3</td><td>29</td>
                    </tr>
                    <tr>
                      <td>WING</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>Purdue</td><td>Tue</td><td>10:30 p.m.</td><td>17</td><td>6</td><td>6</td><td>3</td><td>0</td><td>3</td><td>29</td>
                    </tr>
                                  <tr>
                      <td>BIG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>Purdue</td><td>Tue</td><td>10:30 p.m.</td><td>17</td><td>6</td><td>6</td><td>3</td><td>0</td><td>3</td><td>29</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>Purdue</td><td>Tue</td><td>10:30 p.m.</td><td>17</td><td>6</td><td>6</td><td>3</td><td>0</td><td>3</td><td>29</td>
                    </tr>
                    <tr>
                      <td>WING</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>Purdue</td><td>Tue</td><td>10:30 p.m.</td><td>17</td><td>6</td><td>6</td><td>3</td><td>0</td><td>3</td><td>29</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Team;
