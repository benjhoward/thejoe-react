import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/league-styles.css';

class League extends Component {
  render() {
    return (
      <div>
          <nav>
            <div className="container">
              <div className="row nav-top">
                <div className="col-sm-6 nav-logo"><Link to="../index.html"><img src="../img/joe-nav.png"/></Link><p>Hello, Coach Howard <i className="fa fa-cog" aria-hidden="true" style="margin-left: 12px;"></i></p></div>
                <div className="col-sm-6 ">
                  <ul className="row nav-menu">
                    <Link to="/players"><li className="col-sm-3">Players</li></Link>
                    <Link to="/matchup"><li className="col-sm-3">Matchup</li></Link>
                    <Link to="/team"><li className="col-sm-3">My Team</li></Link>
                    <li className="col-sm-3 nm-right active">League</li>
                  </ul>
                </div>
              </div>

              <div className="row nav-title">
                <div className="col-sm-4"></div>
                <div className="col-sm-4"><h2>The League</h2></div>
                <div className="col-sm-4"><button>Season<i className="fa fa-angle-down" aria-hidden="true" style="margin-left: 20px;"></i></button></div>

              </div>
            </div>
          </nav>


          <section className="score-breakdown">
            <div className="container">
              <div className="row league-top">
                <!-- Matchups -->
                <div className="col-md-6 col-league">
                  <div className="row league-title-bordered">
                    <div className="league-title-button">
                      <div className="col-xs-7 league-title-subject">
                        <p>Matchups</p>
                      </div>
                      <div className="col-xs-5">
                        <button className="col-xs-4">
                          <div className="players-button">
                            <p>Week 13</p>
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="game"> 
                      <div className="row">
                          <div className="col-sm-12 more-scores">
                            <div className="col-xs-2 np-right">
                              <img src="../matchup/img/lynch.jpg" className="score-mug"/>
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
                              <img src="../matchup/img/wes.jpg" className="score-mug"/>
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
                    <div className="game"> 
                      <div className="row">
                          <div className="col-sm-12 more-scores">
                            <div className="col-xs-2 np-right">
                              <img src="../matchup/img/lynch.jpg" className="score-mug"/>
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
                              <img src="../matchup/img/wes.jpg" className="score-mug"/>
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
                    <div className="game"> 
                      <div className="row">
                          <div className="col-sm-12 more-scores">
                            <div className="col-xs-2 np-right">
                              <img src="../matchup/img/lynch.jpg" className="score-mug"/>
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
                              <img src="../matchup/img/wes.jpg" className="score-mug"/>
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
                    <div className="game"> 
                      <div className="row">
                          <div className="col-sm-12 more-scores">
                            <div className="col-xs-2 np-right">
                              <img src="../matchup/img/lynch.jpg" className="score-mug"/>
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
                              <img src="../matchup/img/wes.jpg" className="score-mug"/>
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
                    <div className="game"> 
                      <div className="row">
                          <div className="col-sm-12 more-scores">
                            <div className="col-xs-2 np-right">
                              <img src="../matchup/img/lynch.jpg" className="score-mug">
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
                              <img src="../matchup/img/wes.jpg" className="score-mug"/>
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
                    <div className="game"> 
                      <div className="row">
                          <div className="col-sm-12 more-scores">
                            <div className="col-xs-2 np-right">
                              <img src="../matchup/img/lynch.jpg" className="score-mug"/>
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
                              <img src="../matchup/img/wes.jpg" className="score-mug"/>
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
                </div>
                <!-- Standings -->
                <div className="col-md-6 col-league">
                  <div className="row no-button">
                    <div className="league-title-button">
                      <div className="league-title-subject">
                        <p>Standings</p>
                      </div>
                    </div>
                  </div>

                  <table className="matchup-roster league-standings">
                    <tbody>
                      <tr>
                        <th>Rk</th><th>Team</th><th>W-L-T</th><th>PF</th><th>PA</th>
                      </tr>
                      <tr>
                        <td>1</td><td>Team Name here</td><td>10-1-1</td><td>210</td><td>179</td>
                      </tr>
                      <tr>
                        <td>2</td><td>Team Name here</td><td>10-1-1</td><td>210</td><td>179</td>
                      </tr>
                      <tr>
                        <td>3</td><td>Team Name here</td><td>10-1-1</td><td>210</td><td>179</td>
                      </tr>
                      <tr>
                        <td>4</td><td>Team Name here</td><td>10-1-1</td><td>210</td><td>179</td>
                      </tr>
                      <tr>
                        <td>5</td><td>Team Name here</td><td>10-1-1</td><td>210</td><td>179</td>
                      </tr>
                      <tr>
                        <td>6</td><td>Team Name here</td><td>10-1-1</td><td>210</td><td>179</td>
                      </tr>
                      <tr>
                        <td>7</td><td>Team Name here</td><td>10-1-1</td><td>210</td><td>179</td>
                      </tr>
                      <tr>
                        <td>8</td><td>Team Name here</td><td>10-1-1</td><td>210</td><td>179</td>
                      </tr>
                      <tr>
                        <td>9</td><td>Team Name here</td><td>10-1-1</td><td>210</td><td>179</td>
                      </tr>
                      <tr>
                        <td>10</td><td>Team Name here</td><td>10-1-1</td><td>210</td><td>179</td>
                      </tr>
                      <tr>
                        <td>11</td><td>Team Name here</td><td>10-1-1</td><td>210</td><td>179</td>
                      </tr>
                      <tr>
                        <td>12</td><td>Team Name here</td><td>10-1-1</td><td>210</td><td>179</td>
                      </tr>
                    </tbody>  
                  </table>
                  <div className="row league-title-bordered">
                    <div className="league-title-button">
                      <div className="col-xs-7 league-title-subject">
                        <p>Schedule</p>
                      </div>
                      <div className="col-xs-5">
                        <button className="col-xs-4">
                          <div className="players-button">
                            <p>Team</p>
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <table className="matchup-roster">
                    <tbody>
                      <tr>
                        <th>Wk</th><th>Opponent</th><th>W-L-T</th><th>Score</th>
                      </tr>
                      <tr>
                        <td>1</td><td>Team Name here</td><td>W</td><td>189-180</td>
                      </tr>
                      <tr>
                        <td>2</td><td>Team Name here</td><td>L</td><td>190-210</td>
                      </tr>
                      <tr>
                        <td>3</td><td>Team Name here</td><td>W</td><td>189-180</td>
                      </tr>
                      <tr>
                        <td>4</td><td>Team Name here</td><td>L</td><td>190-210</td>
                      </tr>
                      <tr>
                        <td>5</td><td>Team Name here</td><td>W</td><td>189-180</td>
                      </tr>
                    </tbody>  
                  </table>
                </div>
              </div>
              <!-- Message board -->
              <div className="row">
                <div className="col-xs-12 message-board">
                  <div className="row league-title-bordered">
                    <div className="league-title-button">
                      <div className="col-xs-9 league-title-subject">
                        <p>League Message Board</p>
                      </div>
                      <div className="col-xs-3">
                        <button className="col-xs-4">
                          <div className="players-button">
                            <p>New message</p>
                            <i className="fa fa-plus-square" aria-hidden="true"></i>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>            
                </div>
              </div> 
              <div className="row">
                <div className="col-xs-12 message-board">
                  <div className="row message-board-text">
                    <div className="col-sm-1">
                      <p>Date</p>
                    </div>
                    <div className="col-sm-3">
                      <p>Team Name here</p>
                    </div>
                    <div className="col-sm-8 message">
                      <p>Message title</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae arcu non pururs bibendum tempusam.</p>
                    </div>
                  </div>
                  <div className="row message-board-text">
                    <div className="col-sm-1">
                      <p>Date</p>
                    </div>
                    <div className="col-sm-3">
                      <p>Team Name here</p>
                    </div>
                    <div className="col-sm-8 message">
                      <p>Message title</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae arcu non pururs bibendum tempus. Fusce inerdum.</p>
                    </div>
                  </div>
                  <div className="row message-board-text">
                    <div className="col-sm-1">
                      <p>Date</p>
                    </div>
                    <div className="col-sm-3">
                      <p>Team Name here</p>
                    </div>
                    <div className="col-sm-8 message">
                      <p>Message title</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae arcu non pururs bibendum tempus.</p>
                    </div>
                  </div>
                  <div className="row message-board-text">
                    <div className="col-sm-1">
                      <p>Date</p>
                    </div>
                    <div className="col-sm-3">
                      <p>Team Name here</p>
                    </div>
                    <div className="col-sm-8 message">
                      <p>Message title</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae arcu non pururs bibendum tempus. Fusce inerdum.</p>
                    </div>
                  </div>
                  <div className="row message-board-text">
                    <div className="col-sm-1">
                      <p>Date</p>
                    </div>
                    <div className="col-sm-3">
                      <p>Team Name here</p>
                    </div>
                    <div className="col-sm-8 message">
                      <p>Message title</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae arcu non pururs bibendum tempus.</p>
                    </div>
                  </div>
                </div>
              </div>  
            </div>
          </section>



          

        </div>
    );
  }
}

export default League;
