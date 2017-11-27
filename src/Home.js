import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        {/*<div className="place-holder"><Link to="/matchup"><img src="img/joe.png"/></Link></div>*/}
        <section className="home-top">
          <div className="container" id="hide-header">
            <!-- NAV -->
            <div className="row nav-top ">
              <div className="col-sm-4 ">
                <ul className="row nav-menu align-left">
                  <Link to="league/index.html"><li className="col-sm-3 nm-right">Sign In</li></Link>
                </ul>
              </div>
              <div className="col-sm-4 nav-logo nl-home"><Link to="/"><img src="img/joe-nav.png"/></Link></div>
              <div className="col-sm-4 ">
                <ul className="row nav-menu">
                  <Link to="/league"><li className="col-sm-3 nm-right">Sign Up</li></Link>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 home-header">
              <h1>The Joe is anything but average.</h1>
              <h3>Get started today with a fully customizable fantasy league for college basketball fanatics.</h3>
              <Link to="/team"><button>Play for Free!</button></Link>
            </div>
          </div>
        </section>

        <section className="home-circle-top">
          <div className="circle-top">
            <img src="img/circle-top.png"/>
            <img src="img/circle-bottom.png"/>
          </div>
          <div className="center-content">
            <div className="container">
              <div className="hoops-gif">
                <div className="hoops-gif-container">
                  <img src="img/buckets-blue.gif"/>
                </div>
              </div>

              <div className="row features">
                <div className="col-md-4 features-card">
                  <img src="img/ref.png"/>
                  <h2>Set<br>your rules</h2>
                  <p>The Joe’s fully customizable settings allow you to create your FANTASY fantasy college basketball league.</p>
                </div>
                <div className="col-md-4 features-card">
                  <img src="img/player.png"/>
                  <h2>Choose<br>your players</h2>
                  <p>Build a roster with current players from power-conference schools — Big Ten, ACC, Big 12, SEC, Pac 12, Big East and American.</p>
                </div>
                <div className="col-md-4 features-card">
                  <img src="img/jerseys.png"/>
                  <h2>Pick<br>your lineup</h2>
                  <p>The Joe’s easy drag-and-drop feature makes setting your starting lineup as simple as sinking a wide-open layup.</p>
                </div>
              </div>
              <div className="row features">
                <div className="col-md-4 features-card">
                  <img src="img/bucket.png"/>
                  <h2>Make<br>your call</h2>
                  <p>Can’t figure out who to start? Don’t sweat it. The Joe’s assistant coach allows you to analyze key statistics for up to three players.</p>
                </div>
                <div className="col-md-4 features-card">
                  <img src="img/bracket.png"/>
                  <h2>Follow<br>your matchup</h2>
                  <p>See live results with statistical comparisons as the good guys take on the bad boys on The Joe’s matchup page.</p>
                </div>
                <div className="col-md-4 features-card">
                  <img src="img/shoe.png"/>
                  <h2>Use<br>your device</h2>
                  <p>The Joe knows mobile. Forget about downloading another app with The Joe’s responsive interface optimized for your phone browser.</p>
                </div>
              </div>
              <div className="row devices">
                <img src="img/devices.png"/>
              </div>

            </div>  
          </div>
        </section>
        <section className="bottom-header">
            <div className="spacer"></div>
            <div className="col-sm-12 home-header">
              <h1>The ball is in your court.</h1>
              <h3>If you’re a college basketball fan and a fantasy sports nut, The Joe wants you. Start playing today!</h3>
              <Link to="/team"><button>Play for Free!</button></Link>
            </div>
        </section>

        <footer>
          <div className="bottom-circle">
            <div>
              <img src="img/joe.png"/>
            </div>
            <ul>
              <Link to="/"><li>Contact Us</li></Link> |
              <Link to="/"><li>About Us</li></Link> |
              <Link to="/"><li>Terms of Use</li></Link> |
              <Link to="/"><li>Privacy Policy</li></Link>
            </ul>
            <div className="footer-social"><i className="fa fa-twitter" aria-hidden="true"></i><i className="fa fa-facebook" aria-hidden="true"></i></div>
            <p>© 2017. The Joe ­ All Rights Reserved.</p>
          </div>

        </footer>
        <script
          src="https://code.jquery.com/jquery-3.2.1.min.js"
          integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
          crossorigin="anonymous">    
        </script>

        <script>
          //THIS ALSO WORKS

          // $(window).bind('scroll', function() {
          //      if ($(window).scrollTop() > 100) {
          //          $('#hide-header').hide();
          //      }
          //      else {
          //          $('#hide-header').show();
          //      }
          // });

         
          $window = $(window);
          $(window).scroll(function(){

          if($window.scrollTop() > 1000)
              $("#hide-header").addClass('active');
          else    
              $("#hide-header").removeClass('active');
          });

        </script>
  </div>
    );
  }
}

export default Home;
