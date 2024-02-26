import SearchIcon from "./SearchIcon.svg";
import "./App.css";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard.jsx";

// f3f5cc76     //Api Key
const API_URL = "https://omdbapi.com?apikey=f3f5cc76";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const movieNames = ["Bat Man","Eternals","Spider Man","Ant Man","Iron Man","The Lion King","Raya","Toy Story","The Incredible","Deadpool"];
  console.log(movieNames.length);
  const searchName = async (name) => {
    const response = await fetch(`${API_URL}&s=${name}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    const randomNumber = Math.floor(Math.random()*10);
    searchName(movieNames[randomNumber]);
    
  }, []);


  return (
    
    <div className="app">
      <h1 id="homelogo" onClick={()=>{
        const randomNumber = Math.floor(Math.random()*10);
    searchName(movieNames[randomNumber]);
      }}>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search Movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img src={SearchIcon} alt="SearchIcon" onClick={() => {
          searchName(searchTerm);
        }} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
}
