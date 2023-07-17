import React , {Component} from "react";
import {FaPlay } from "react-icons/fa";
import logo from './images/images.jpeg';
export default class C2 extends Component{
    render()
    {
        return(
            <div class="main-container">
      <div class="topbar">
        <div class="prev-next-buttons">
          <button type="button" class="fa fas fa-chevron-left"></button>
          <button type="button" class="fa fas fa-chevron-right"></button>
        </div>

        <div class="navbar">
          <ul>
            <li>
              <a href="#">Premium</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Download</a>
            </li>
            {/* <li class="divider">|</li> */}
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
          <button type="button">Log In</button>
        </div>
      </div>

      <div class="spotify-playlists">
        <h2>Spotify Playlists</h2>

        <div class="list">
          <div class="item">
            <img src={logo} alt="logo" />;
            <div class="play">
              <span className="fa fa-play"><FaPlay /></span>
            </div>
            <h4>Today's Top Hits</h4>
            <p>Rema & Selena Gomez are on top of the...</p>
          </div>

          <div class="item">
            <img src={logo} alt="logo" />;
            <div class="play">
              <span className="fa fa-play"><FaPlay /></span>
            </div>
            <h4>RapCaviar</h4>
            <p>New Music from Lil Baby, Juice WRLD an...</p>
          </div>
          <div class="item">
            <img src={logo} alt="logo" />;
            <div class="play">
              <span className="fa fa-play"><FaPlay /></span>
            </div>
            <h4>RapCaviar</h4>
            <p>New Music from Lil Baby, Juice WRLD an...</p>
          </div>

          <div class="item">
            <img src={logo} alt="logo" />;
            <div class="play">
              <span className="fa fa-play"><FaPlay /></span>
            </div>
            <h4>RapCaviar</h4>
            <p>New Music from Lil Baby, Juice WRLD an...</p>
          </div>

          <div class="item">
            <img src={logo} alt="logo" />;
            <div class="play">
              <span className="fa fa-play"><FaPlay /></span>
            </div>
            <h4>All out 2010s</h4>
            <p>The biggest spmgs pf tje 2010s. Cover:...</p>
          </div>

          <div class="item">
            <img src={logo} alt="logo" />;
            <div class="play">
              <span className="fa fa-play"><FaPlay /></span>
            </div>
            <h4>Rock Classics</h4>
            <p>Rock Legends & epic songs that continue t...</p>
          </div>

          <div class="item">
            <img src={logo} alt="logo" />;
            <div class="play">
              <span className="fa fa-play"><FaPlay /></span>
            </div>
            <h4>Chill Hits</h4>
            <p>Kick back to the best new and recent chill...</p>
          </div>

          <div class="item">
            <img src={logo} alt="logo" />;
            <div class="play">
              <span className="fa fa-play"><FaPlay /></span>
            </div>
            <h4>Viva Latino</h4>
            <p>Today's top Latin hits elevando nuestra...</p>
          </div>

          <div class="item">
            <img src={logo} alt="logo" />;
            <div class="play">
              <span className="fa fa-play"><FaPlay /></span>
            </div>
            <h4>Mega Hit Mix</h4>
            <p>A mega mix of 75 favorites from the last...</p>
          </div>

          <div class="item">
            <img src={logo} alt="logo" />;
            <div class="play">
              <span className="fa fa-play"><FaPlay /></span>
            </div>
            <h4>All out 80s</h4>
            <p>The biggest songs of the 1090s.</p>
          </div>
        </div>
      </div>

      <div class="spotify-playlists">
        <h2>Focus</h2>
        <div class="list">
          <div class="item">
            <img src={logo} alt="logo" />;
            <div class="play">
              <span className="fa fa-play"><FaPlay /></span>
            </div>
            <h4>Peaceful Piano</h4>
            <p>Relax and indulge with beautiful piano pieces</p>
          </div>

          <div class="item">
            <img src={logo} alt="logo" />;
            <div class="play">
              <span className="fa fa-play"><FaPlay /></span>
            </div>
            <h4>Deep Focus</h4>
            <p>Keep calm and focus with ambient and pos...</p>
          </div>

          <div class="item">
            <img src={logo} alt="logo" />;
            <div class="play">
              <span className="fa fa-play"><FaPlay /></span>
            </div>
            <h4>Instrumental Study</h4>
            <p>Focus with soft study music in the...</p>
          </div>

          <div class="item">
            <img src={logo} alt="logo" />;
            <div class="play">
              <span className="fa fa-play"><FaPlay /></span>
            </div>
            <h4>Instrumental Study</h4>
            <p>Focus with soft study music in the...</p>
          </div>

          <div class="item">
            <img src={logo} alt="logo" />;
            <div class="play">
              <span className="fa fa-play"><FaPlay /></span>
            </div>
            <h4>Instrumental Study</h4>
            <p>Focus with soft study music in the...</p>
          </div>

          <div class="item">
            <img src={logo} alt="logo" />;
            <div class="play">
              <span className="fa fa-play"><FaPlay /></span>
            </div>
            <h4>chill lofi study beats</h4>
            <p>The perfect study beats, twenty four...</p>
          </div>

          <div class="item">
            <img src={logo} alt="logo" />;
            <div class="play">
              <span className="fa fa-play"><FaPlay /></span>
            </div>
            <h4>Coding Mode</h4>
            <p>Dedicated to all the programmers out there.</p>
          </div>
          
          <div class="item">
            <img src={logo} alt="logo" />;
            <div class="play">
              <span className="fa fa-play"><FaPlay /></span>
            </div>
            <h4>Focus Flow</h4>
            <p>Uptempo instrumental hip hop beats.</p>
          </div>

          <div class="item">
            <img src={logo} alt="logo" />;
            <div class="play">
              <span className="fa fa-play"><FaPlay /></span>
            </div>
            <h4>Calm Before The Storm</h4>
            <p>Calm before the storm music.</p>
          </div>

          <div class="item">
            <img src={logo} alt="logo" />;
            <div class="play">
              <span className="fa fa-play"><FaPlay /></span>
            </div>
            <h4>Beats to think to</h4>
            <p>Focus with deep techno and tech house.</p>
          </div>
        </div>
      </div>

      <div class="spotify-playlists">
        <h2>Mood</h2>
        <div class="list">
          <div class="item">
            <img src={logo} alt="logo" />;
            <div class="play">
              <span className="fa fa-play"><FaPlay /></span>
            </div>
            <h4>Mood Booster</h4>
            <p>Get happy with today's dose of feel-good...</p>
          </div>

          <div class="item">
            <img src={logo} alt="logo" />;
            <div class="play">
              <span className="fa fa-play"><FaPlay /></span>
            </div>
            <h4>Feelin' Good</h4>
            <p>Feel good with this positively timeless...</p>
          </div>

          <div class="item">
            <img src={logo} alt="logo" />;
            <div class="play">
              <span className="fa fa-play"><FaPlay /></span>
            </div>
            <h4>Dark & Stormy</h4>
            <p>Beautifully dark, dramatic tracks.</p>
          </div>

          <div class="item">
            <img src={logo} alt="logo" />;
            <div class="play">
              <span className="fa fa-play"><FaPlay /></span>
            </div>
            <h4>Dark & Stormy</h4>
            <p>Beautifully dark, dramatic tracks.</p>
          </div>

          <div class="item">
            <img src={logo} alt="logo" />;
            <div class="play">
              <span className="fa fa-play"><FaPlay /></span>
            </div>
            <h4>Dark & Stormy</h4>
            <p>Beautifully dark, dramatic tracks.</p>
          </div>

          <div class="item">
            <img src={logo} alt="logo" />;
            <div class="play">
              <span className="fa fa-play"><FaPlay /></span>
            </div>
            <h4>Feel Good Piano</h4>
            <p>Happy vibes for an upbeat morning.</p>
          </div>

          <div class="item">
            <img src={logo} alt="logo" />;
            <div class="play">
              <span className="fa fa-play"><FaPlay /></span>
            </div>
            <h4>Feelin' Myself</h4>
            <p>The hip-hop playlist that's a whole mood...</p>
          </div>

          <div class="item">
            <img src={logo} alt="logo" />;
            <div class="play">
              <span className="fa fa-play"><FaPlay /></span>
            </div>
            <h4>Chill Tracks</h4>
            <p>Softer kinda dance</p>
          </div>

          <div class="item">
            <img src={logo} alt="logo" />;
            <div class="play">
              <span className="fa fa-play"><FaPlay /></span>
            </div>
            <h4>Feel-Good Indie Rock</h4>
            <p>The best indie rock vibes - classic and...</p>
          </div>

          <div class="item">
            <img src={logo} alt="logo" />;
            <div class="play">
              <span className="fa fa-play"><FaPlay /></span>
            </div>
            <h4>idk.</h4>
            <p>idk.</p>
          </div>
        </div>

        <hr/>
      </div>

      <div class="preview">
        <div class="text">
          <h6>Preview of Spotify</h6>
          <p>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
        </div>
        <div class="button">
          <button type="button">Sign up</button>
        </div>
      </div>
      
    </div>
    
            
            
        )
    }
};
