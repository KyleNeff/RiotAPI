import React from "react";
import "./App.css";
import SearchBar from "../src/Components/SearchBar"

function App(){
    return(

<body class="body">

  <h1> Riot API Website</h1>
  <div class="tab1cards">
    <div class="card">
        <div class="container">
          <h2><b>MalevolentTitan</b></h2>
          <button onclick="window.location='Summoner.html'">
            Search
          </button>
        </div>
    </div>
    <div class="card">
      <div class="container">
        <h2><b>Titans003</b></h2>
        <button onclick="window.location='Summoner.html'">
          Search
        </button>
      </div>
    </div>
    <div class="card">
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