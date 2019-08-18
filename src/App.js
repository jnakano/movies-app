import React, {useEffect, useState} from 'react';
import Tile from './Tile/Tile'
import './App.css';

function App() {

  const API_KEY = '3fd62106f99b88cdd47f21a137f2e2b7';

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('avengers');

  useEffect( ()=>{
    getMovies();
  },[query] );

  const getMovies = async () =>{
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`)
    const data = await response.json();
    setMovies(data.results);
    console.log("Response data", data.results);
  }

  const updateSearch = e =>{
    console.log('inside updateSearch', e.target.value);
    setSearch(e.target.value);
  }

  const getSearch = e =>{
    e.preventDefault();
    console.log("Searching now!!!");
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>

      <div className="card-columns">
        {movies.map(movie => (
          <Tile 
            key={movie.id}
            title={movie.title}
            rating={movie.vote_average}
            poster_img={`http://image.tmdb.org/t/p/w200/` + movie.poster_path}
            description={movie.overview}
          />
        ))}
      </div>


    </div>
  );
}

export default App;
