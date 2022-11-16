import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
//npm install react-router-dom localforage match-sorter sort-by
import axios from 'axios';
import "./SearchBar.css";


const apiKey = "RGAPI-2fda1e97-7a97-48f6-92b9-2e0c2169b5df"
function SearchBar(){
  const [summonerName, setSummonerName] = useState("");
  const [summonerInfo, setSummonerInfo] = useState("");
  
  function searchPlayer(event){
    var Summoner = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + summonerName + '?api_key=' + apiKey
    axios.get(Summoner).then(function (response){
      setSummonerInfo(response.data);
      
    }).catch(function (error) {
      console.log(error)
    })
  
  }

    return(
<div class="container1">
        <input type="text" style={{ fontSize: "32px" }} placeholder="Search Summoner" onChange={e => setSummonerName(e.target.value)}/>
        <button type="submit" style={{ fontSize: "32px" }} onClick={e => searchPlayer(e)} >Submit</button>
        <h1>{summonerInfo.summonerLevel}</h1>
  </div>
  

  )}
export default SearchBar;