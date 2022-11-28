import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
//npm install react-router-dom localforage match-sorter sort-by
import axios from 'axios';
import "./SearchBar.css";


const apiKey = "RGAPI-82148cc6-c7a8-4d53-a38e-bb7959ca0c85"
function SearchBar(){
  const [summonerName, setSummonerName] = useState("");
  const [summonerInfo, setSummonerInfo] = useState("");
  const [summonerRank, setSummonerRank] = useState("");
  
  function searchPlayer(event){
    var Summoner = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + summonerName + '?api_key=' + apiKey
    axios.get(Summoner).then(function (response){
      console.log(response)
      setSummonerInfo(response.data);
      
    }).catch(function (error) {
      console.log(error)
    })
    var SummonerID = 'https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/'+ summonerInfo.id +'?api_key=' + apiKey
      axios.get(SummonerID).then(function (response1){
        setSummonerRank(response1.data);
    }).catch(function (error) {
      console.log(error)
    })
    console.log(SummonerID)
  }

    return(
<div class="container1">
        <input type="text" style={{ fontSize: "32px" }} placeholder="Search Summoner" onChange={e => setSummonerName(e.target.value)}/>
        <button type="submit" style={{ fontSize: "32px" }} onClick={e => searchPlayer(e)} >Submit</button>
        <h1>{summonerInfo.summonerLevel}</h1>
        <h1>{summonerRank[0].tier}</h1>
  </div>
  

  )}
export default SearchBar;