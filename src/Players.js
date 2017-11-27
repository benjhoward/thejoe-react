import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/players-styles.css';

class Players extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="container">
            <div className="row nav-top">
              <div className="col-sm-6 nav-logo"><Link to="../index.html"><img src="../img/joe-nav.png"/></Link><p>Hello, Coach Howard <i className="fa fa-cog" aria-hidden="true" style="margin-left: 12px;"></i></p></div>
              <div className="col-sm-6 ">
                <ul className="row nav-menu">
                  <li className="col-sm-3 active">Players</li>
                  <Link to="/matchup"><li className="col-sm-3">Matchup</li></Link>
                  <Link to="/team"><li className="col-sm-3">My Team</li></Link>
                  <Link to="/league"><li className="col-sm-3 nm-right">League</li></Link>
                </ul>
              </div>
            </div>

            <div className="row nav-title">
              <div className="col-sm-4"><button className="left-button">Available<i className="fa fa-angle-down" aria-hidden="true" style="margin-left: 20px;"></i></button></div>
              <div className="col-sm-4"><h2>Players</h2></div>
              <div className="col-sm-4"><button>Season<i className="fa fa-angle-down" aria-hidden="true" style="margin-left: 20px;"></i></button></div>

            </div>
          </div>
        </nav>

        <section className="players-compare">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <p className="players-title">Players</p>
                <button>
                  <div className="players-button">
                    <p>Player one</p>
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </div>
                </button>
                <button>
                  <div className="players-button">
                    <p>Player two</p>
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </div>
                </button>
                <button>
                  <div className="players-button">
                    <p>Player three</p>
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </div>
                </button>
              </div>
              <div className="col-md-3 players-pt-avg">
                <p className="players-title">Fantasy points per game</p>
                <div className="players-fappg">
                  <div className="players-button fappg">
                    <p>26.5</p>
                  </div>
                </div>
                <div className="players-fappg">
                  <div className="players-button fappg">
                    <p>38.2</p>
                  </div>
                </div>
                <div className="players-fappg">
                  <div className="players-button fappg">
                    <p>28</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <p className="players-title">FAPs past four games</p>
                <div className="players-recent">
                  <!-- <img src="img/line-chart.png"/> -->
                </div>
              </div>
              <div className="col-md-3 players-pt-avg">
                <p className="players-title">Opponent scoring defense</p>
                <div className="players-fappg">
                  <div className="players-button fappg">
                    <p>54.6</p>
                  </div>
                </div>
                <div className="players-fappg">
                  <div className="players-button fappg">
                    <p>78.6</p>
                  </div>
                </div>
                <div className="players-fappg">
                  <div className="players-button fappg">
                    <p>59</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </section>

        <section className="score-breakdown">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                
                <table className="matchup-roster players-list">
                  <tbody>
                    <tr>
                      <th colSpan="13" className="matchup-team">2017-18 SEASON</th>
                    </tr>
                    <tr>
                      <th>Pos</th><th>Name</th><th>School</th><th>Yr</th><th>GP</th><th>FAPPG</th><th>Pts</th><th>Reb</th><th>Ast</th><th>Stl</th><th>Blk</th><th>TO</th><th>Total</th>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
                    </tr>
                    <tr>
                      <td>PG</td><td>Xavier Rathan Mayes</td><td>Florida State</td><td>Jr</td><td>21</td><td>30.5</td><td>200</td><td>50</td><td>70</td><td>63</td><td>10</td><td>27</td><td>366</td>
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

export default Players;
