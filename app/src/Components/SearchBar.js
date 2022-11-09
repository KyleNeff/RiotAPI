import React from "react";
import "./SearchBar.css";


function SearchBar(){
    return(
<div class="container1">
      <form action="/action_page.php" class="searchBar">
        <input type="text"placeholder="Search Summoner" name="search"/>
        <button type="submit">Submit</button>
      </form>
  </div>
  )}

export default SearchBar;