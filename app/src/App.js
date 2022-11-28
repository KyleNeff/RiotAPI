//cd app
//nvm install 18.12.1
//npm start

import React, { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar"
import helmetIcon from './image1.jpg';
import firePoroIcon from './image2.jfif';
import LCSIcon from './image3.jpg';
import axios from 'axios';

function App(){
  const apiKey = "RGAPI-82148cc6-c7a8-4d53-a38e-bb7959ca0c85"
  const [malevolentTitanInfo, setMalevolentTitanInfo] = useState("");
  const [malevolentTitanRanked, setMalevolentTitanRanked] = useState("");
  function SearchMalevolentTitan(){
    
    var Summoner = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/MalevolentTitan?api_key=' + apiKey

  
    axios.get(Summoner).then(function (response){
      setMalevolentTitanInfo(response.data);
    }).catch(function (error) {
      console.log(error)
    })
    console.log(malevolentTitanInfo.id)
    var SummonerID = 'https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/'+ malevolentTitanInfo.id +'?api_key=' + apiKey
      axios.get(SummonerID).then(function (response1){
        setMalevolentTitanRanked(response1.data);
    }).catch(function (error) {
      console.log(error)
    })
  }
  


    return(


<body class="body">

  <h1> Riot API Website</h1>
  <div class="tab1cards">
    <div class="card">
    <img src={firePoroIcon} className="photo" alt="Avatar"/>
        <div class="container">
          <h2><b>MalevolentTitan</b></h2>
          <button onClick="">
            Search
          </button>
          <h1>{malevolentTitanInfo.summonerLevel}</h1>
          <h1>{malevolentTitanRanked.tier}</h1>
        </div>
    </div>
    <div class="card">
    <img src={helmetIcon} className="photo" alt="Avatar"/>
      <div class="container">
        <h2><b>Titans003</b></h2>
        <button onClick="">
          Search
        </button>
      </div>
    </div>
    <div class="card">
      <img src={LCSIcon} className="photo" alt="Avatar"/>
      <div class="container">
        <h2><b>Lexxx</b></h2>
        <button onClick="">
          Search
        </button>
      </div>
    </div>
  </div>
  <SearchBar/>
</body>
    )}

export default App;