//cd app
//nvm install 18.12.1
//npm start
//request new API key every 24 hours @ https://developer.riotgames.com/

import React, { useState } from "react";
import "./App.css";
import helmetIcon from './image1.jpg';
import firePoroIcon from './image2.jfif';
import LCSIcon from './image3.jpg';
import axios from 'axios';

function App(){

  const apiKey = "RGAPI-ccbb16f6-8e14-4ba9-be43-a141b7b3d156"
    var [summonerName, setSummonerName] = useState("");
    var [summonerInfo, setSummonerInfo] = useState("");
    var [summonerRank, setSummonerRank] = useState("");
    //const navigate = useNavigate();
    //navigate('/Home');
    function searchPlayer(){
      console.log("name",summonerName)
      var Summoner = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + summonerName + '?api_key=' + apiKey
      axios.get(Summoner).then(function (response){
        setSummonerInfo(response.data);
        console.log(summonerInfo)
        console.log("icon",response.data.profileIconID)

        var SummonerID = 'https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/'+ response.data.id +'?api_key=' + apiKey
        axios.get(SummonerID).then(function (response1){
            setSummonerRank(response1.data);
        }).catch(function (error) {
          console.log(summonerInfo)
          console.log(error)
        })
  
      }).catch(function (error) {
        console.log(summonerInfo)
        console.log(error)
        
      })
    }
    var [MalevolentTitanInfo, setMalevolentTitanInfo] = useState("");
    var [MalevolentTitanRank, setMalevolentTitanRank] = useState("");
    function MalevolentTitan(){
      var Summoner = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/MalevolentTitan?api_key=' + apiKey
      axios.get(Summoner).then(function (MalevolentTitan){
        setMalevolentTitanInfo(MalevolentTitan.data);
        console.log("info", MalevolentTitanInfo)
        console.log(Summoner)


        var SummonerID = 'https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/v5aT5vTnYKfXZmqU3vg0qjBo259Zfq3L0-koUx334ztW7II?api_key=' + apiKey
        axios.get(SummonerID).then(function (MalevolentTitanRankInfo){
          setMalevolentTitanRank(MalevolentTitanRankInfo.data);
          console.log("rank", MalevolentTitanRank)
          console.log(SummonerID)
        }).catch(function (error) {
          console.log(error)
        })
  
      }).catch(function (error) {
        console.log(error)
      })
      console.log("test", MalevolentTitanRank[0])
    }
    var [Titans003Info, setTitans003Info] = useState("");
    var [Titans003Rank, setTitans003Rank] = useState("");
    function Titans003(){
      var Summoner = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Titans003?api_key=' + apiKey
      axios.get(Summoner).then(function (Titans003){
        setTitans003Info(Titans003.data);
        var SummonerID = 'https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/HCYzeqZA7EJRTy8c4PjJGWTjDuwyxFLnkztUJib4ruyesUg?api_key=' + apiKey
        axios.get(SummonerID).then(function (Titans003RankInfo){
          console.log("rank", Titans003Rank)
          console.log(SummonerID)
          setTitans003Rank(Titans003RankInfo.data);
        }).catch(function (error) {
          console.log(error)
        })
  
      }).catch(function (error) {
        console.log(error)
      })
    }
    var [LexxxInfo, setLexxxInfo] = useState("");
    var [LexxxRank, setLexxxRank] = useState("");
    function Lexxx(){
      var Summoner = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Lexxx?api_key=' + apiKey
      axios.get(Summoner).then(function (Lexxx){
        setLexxxInfo(Lexxx.data);
        var SummonerID = 'https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/w6myW5mefCn4JXvsnFsd4B7LGnj--pF07XtqGEiheumKwHtR?api_key=' + apiKey
        axios.get(SummonerID).then(function (LexxxRankInfo){
          setLexxxRank(LexxxRankInfo.data);
        }).catch(function (error) {
          console.log(error)
        })
  
      }).catch(function (error) {
        console.log(error)
      })
    }
    return(

<body class="body">
<br></br>
  <h1> Riot API Website</h1>
  <div class="tab1cards">
    <div class="card">
    <img src={firePoroIcon} className="photo" alt="Avatar"/>
        <div class="container">
          <h2><b>MalevolentTitan</b></h2>
          <button type="submit" onClick={MalevolentTitan} >Load Stats</button>
          {JSON.stringify(MalevolentTitanInfo.summonerLevel) != undefined?
          <>
            <p> Level:  {MalevolentTitanInfo.summonerLevel}</p>
            {JSON.stringify(MalevolentTitanRank[0]) !== undefined ?
            <>
            <p> Rank:  {MalevolentTitanRank[0].tier} {MalevolentTitanRank[0].rank}</p>
            <p> LP:  {MalevolentTitanRank[0].leaguePoints} </p>
            </>
            : 
            <p></p>
          }  
          </>
          :
          <><p></p></>
        }   
        </div>
    </div>
    <div class="card">
    <img src={helmetIcon} className="photo" alt="Avatar"/>
      <div class="container">
        <h2><b>Titans003</b></h2>
        <button type="submit" onClick={Titans003} >Load Stats</button>
        {JSON.stringify(Titans003Info.summonerLevel) != undefined?
          <>
            <p> Level:  {Titans003Info.summonerLevel}</p>
            {JSON.stringify(Titans003Rank[0]) !== undefined ?
          <>
            <p> Rank:  {Titans003Rank[0].tier} {Titans003Rank[0].rank}</p>
            <p> LP:  {Titans003Rank[0].leaguePoints} </p>
          </>
          : 
          <p></p>

        }  
          </>
          :
          <p></p>
        }    
      </div>
    </div>
    <div class="card">
      <img src={LCSIcon} className="photo" alt="Avatar"/>
      <div class="container">
        <h2><b>Lexxx</b></h2>
        <button type="submit" onClick={Lexxx} >Load Stats</button>
        {JSON.stringify(LexxxInfo.summonerLevel) != undefined?
          <>
            <p> Level:  {LexxxInfo.summonerLevel}</p>
            {JSON.stringify(LexxxRank[0]) !== undefined ?
          <>
            <p> Rank:  {LexxxRank[0].tier} {LexxxRank[0].rank}</p>
            <p> LP:  {LexxxRank[0].leaguePoints} </p>
          </>
          : 
          <p></p>

        }  
          </>
          :
          <p></p>
        }  
      </div>
    </div>
  </div>
  <div className="container1" id = "add">
        <input type="text" style={{ fontSize: "32px" }} placeholder="Search Summoner" onChange={e => setSummonerName(e.target.value)}/>
        <button type="submit" style={{ fontSize: "32px" }} onClick={e => searchPlayer(e)} >Submit</button>
        <br></br>
        </div>
        <div className="container2" id = "add">
        <div class="searchCard">
        {JSON.stringify(summonerInfo.summonerLevel) != undefined?
          <>
            <img width="200" height="200" src={"http://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/" + summonerInfo.profileIconId + ".png"}></img>
            <p> Level:  {summonerInfo.summonerLevel}</p>
            {JSON.stringify(summonerRank[0]) !== undefined ?
          <>
            <p> Rank:  {summonerRank[0].tier} {summonerRank[0].rank}</p>
            <p> LP:  {summonerRank[0].leaguePoints} </p>
          </>
          : 
          <p></p>

        }  
          </>
          :
          <p></p>
        }  
        </div>
  </div>
<br></br>
<br></br>
<br></br>

</body>

    )}

export default App;