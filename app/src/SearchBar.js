import React, { useState } from "react";
//npm install react-router-dom localforage match-sorter sort-by
import axios from 'axios';
import "./App.css";


const apiKey = "RGAPI-e2996a9d-c495-4073-9005-386d53df9b99"
function SearchBar(){
  const [summonerName, setSummonerName] = useState("");
  const [summonerInfo, setSummonerInfo] = useState("");
  const [summonerRank, setSummonerRank] = useState("");
  //const navigate = useNavigate();
  //navigate('/Home');
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
<body>
<div className="container1">
        <input type="text" style={{ fontSize: "32px" }} placeholder="Search Summoner" onChange={e => setSummonerName(e.target.value)}/>
        <button type="submit" style={{ fontSize: "32px" }} onClick={e => searchPlayer(e)} >Submit</button>
        {JSON.stringify(summonerInfo) != '{}' ?
          <>
            <p>{summonerInfo.summonerLevel}</p>
          </>
          :
          <><p>Summoner does not Exist or Does Not Have Data</p></>
        }
  </div>
  </body>
  )}

export default SearchBar;