import React from "react";
import "./App.css";
import SearchBar from "./SearchBar"
import helmetIcon from './image1.jpg';
import firePoroIcon from './image2.jfif';
import LCSIcon from './image3.jpg';


function App(){
  
    return(

<body class="body">

  <h1> Riot API Website</h1>
  <div class="tab1cards">
    <div class="card">
    <img src={firePoroIcon} className="photo" alt="Avatar"/>
        <div class="container">
          <h2><b>MalevolentTitan</b></h2>
          <button onclick="window.location='Summoner.html'">
            Search
          </button>
        </div>
    </div>
    <div class="card">
    <img src={helmetIcon} className="photo" alt="Avatar"/>
      <div class="container">
        <h2><b>Titans003</b></h2>
        <button onclick="window.location='Summoner.html'">
          Search
        </button>
      </div>
    </div>
    <div class="card">
      <img src={LCSIcon} className="photo" alt="Avatar"/>
      <div class="container">
        <h2><b>Lexxx</b></h2>
        <button onclick="window.location='Summoner.html'">
          Search
        </button>
      </div>
    </div>
  </div>
  <SearchBar/>
</body>
    )}

export default App;