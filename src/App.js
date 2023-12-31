import { useState, useEffect } from 'react';
import MovieCard from './movieCard.jsx';
import './App.css';
import SearchIcon from './search_icon.svg';
// 2553a587

const movie1 = {
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
};

const API_URL =  "http://www.omdbapi.com/?i=tt3896198&apikey=2553a587";

const App = () =>{
    const [ movies, setMovies] = useState([]); 
    const [searchTerm, setsearchTerm] = useState('');

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('Bahubali');
    }, []);
    return(
        <div className="app">
            <h1>Movie API Project</h1>

            <div className="search">
                <input placeholder='Search for movies'
                    value={searchTerm} 
                    onChange={(e) => setsearchTerm(e.target.value)}></input>
                <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)}></img>
            </div>

            {
                movies?.length > 0 
                ? (
                    <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie={movie}></MovieCard>
                        )) }
                    </div>
                ) :
                (
                    <div className='empty'>
                        <h2>No Movies Found</h2>
                    </div>

                )
            }

            
        </div>
    );
}


export default App;