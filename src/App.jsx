import SearchIcon from "./SearchIcon.svg";
import "./App.css";
import { useEffect } from "react";
import MovieCard from "./MovieCard.jsx";


// f3f5cc76     //Api Key
const API_URL = "https://omdbapi.com?apikey=f3f5cc76";

export default function App() {
  const searchName = async (name) => {
    const response = await fetch(`${API_URL}&s=${name}`);
    const data = await response.json();
    console.log(data.Search);
  };

  useEffect(() => {
    //  searchName("Spider Man")
  }, []);

  const Movie1 = {
    "Title": "Spider-Man",
    "Year": "2002",
    "imdbID": "tt0145487",
    "Type": "movie",
    "Poster": 
    "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
}
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input placeholder="Search Movies" value={"Spider Man"} onChange={()=>{}}/>
        <img src={SearchIcon} alt="SearchIcon" onClick={()=>{}}/>
      </div>
      <MovieCard Movie1={Movie1}/>
    </div>
  );
}
