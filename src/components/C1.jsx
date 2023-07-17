import React , {Component} from "react";
import {FaHome } from "react-icons/fa";
import {FaSearch } from "react-icons/fa";
import {FaBook } from "react-icons/fa";
import {FaPlusSquare } from "react-icons/fa";
import {FaHeart } from "react-icons/fa";
import logo from './images/Spotify_Logo_RGB_White.png';
export default class C1 extends Component{
    render()
    {
        return(
            <div class="sidebar">
            <div class="logo">
              <a href="#">
              <img src={logo} alt="logo" />;
                {/* <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="Logo" /> */}
              </a>
            </div>
      
            <div class="navigation">
              <ul>
                <li>
                  <a href="#">
                  <span className="fa fa-home"><FaHome /></span>
                    <span>Home</span>
                  </a>
                </li>
      
                <li>
                  <a href="#">
                  <span className="fa fa-search"><FaSearch /></span>
                    <span>Search</span>
                  </a>
                </li>
      
                <li>
                  <a href="#">
                    <span className="fa fas fa-book"><FaBook /></span>
                    <span>Your Library</span>
                    <div className="lib">
                    <h4>Create your playlist</h4>
                    <h6>its easy we will help you</h6>
                    <button>Create playlist</button> <br /><br />
                    <h4>Create your playlist</h4>
                    <h6>its easy we will help you</h6>
                    <button>Create playlist</button>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
      
            <div class="navigation">
              <ul>
                <li>
                  <a href="#">
                    <span className="fa fas fa-plus-square"><FaPlusSquare /></span>
                    <span>Create Playlist</span>
                  </a>
                </li>
      
                <li>
                  <a href="#">
                    <span class="fa fas fa-heart"><FaHeart /></span>
                    <span>Liked Songs</span>
                  </a>
                </li>
              </ul>
            </div>
      
            <div class="policies">
              <ul>
                <li>
                  <a href="#">Cookies</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
              </ul>
            </div>
          </div>
        )
    }
};
