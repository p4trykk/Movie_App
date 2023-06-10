import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import Search from './components/MovieSearchKeyboard';
import AddFavourites from './components/AddToFavList';
import RemoveFavourites from './components/DeleteFromFavList';
import MovieListHeadingFav from './components/MovieListFav';
import { Routes, Route, useParams } from 'react-router-dom';
import axios from 'axios';
import { RiArrowGoBackLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import MovingText from 'react-moving-text';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getAPIrequest = async (searchValue) => {
    const link = `http://www.omdbapi.com/?s=${searchValue}&apikey=338ff081`;
    const response = await fetch(link);
    const responseJSON = await response.json();

    if (responseJSON.Search) {
      setMovies(responseJSON.Search);
    }
  };

  useEffect(() => {
    getAPIrequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites'));

    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter((favourite) => favourite.imdbID !== movie.imdbID);

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const MovieDetails = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
      const fetchMovieDetails = async () => {
        try {
          const response = await axios.get(`https://www.omdbapi.com/?apikey=338ff081&i=${id}`);
          const movieData = response.data;
          setMovieDetails(movieData);
        } catch (error) {
          console.error('Wystąpił błąd podczas pobierania danych filmu:', error);
        }
      };

      fetchMovieDetails();
    }, [id]);

    if (!movieDetails) {
      return null; 
    }

    return (
      <div className='details-conteinerr'>
        <div className='row d-flex align-items-center mt-4 mb-4'>
          <MovieListHeading heading='Movies App' />
        </div>
        <div >
          <div className="movie-details-info">
          <div className='conteiner-big'>
            <div className='poster-details-border'>
              <img src={movieDetails.Poster} alt='movie' className='poster-details' />
            </div>
          </div>

            <div className='row-row'>
              <h1 className="movie-details-title">{movieDetails.Title}</h1>
              <h1 className="movie-rating">{movieDetails.imdbRating}</h1>
            </div>
            <p>
              <b>Genre:</b> {movieDetails.Genre}
            </p>
            <p>
              <b>Director:</b> {movieDetails.Director}
            </p>
            <p>
              <b>Launch:</b> {movieDetails.Released}
            </p>
            <p>
              <b>Country:</b> {movieDetails.Country}
            </p>
            <p>
              <b>Time:</b> {movieDetails.Runtime}
            </p>
            <p>
              <b>Plot:</b> {movieDetails.Plot}
            </p>
            <p>
              <b>Awards:</b> {movieDetails.Awards}
            </p>
          </div>
        </div>
        <Link to={`/pazig_app`} className='back-to-home-pg'>
          <MovingText
            type="pulse"
            duration="2500ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="infinite"
            fillMode="none">
            <RiArrowGoBackLine className="logo-back"/>
            Back to home page
          </MovingText> 
				</Link>
      </div>
    );
    
  };

  return (
    <div className='container-fluid movie-app'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <div className='row d-flex align-items-center mt-4 mb-4'>
                <MovieListHeading heading='Movies App' />
                <Search searchValue={searchValue} setSearchValue={setSearchValue} />
              </div>
              <div className='row'>
                <MovieList
                  movies={movies}
                  handleFavouritesClick={addFavouriteMovie}
                  favouriteComponent={AddFavourites}
                />
              </div>
              <div className='row d-flex align-items-center mt-4 mb-4'>
                <MovieListHeadingFav heading='Favorites' />
              </div>
              <div className='row'>
                <MovieList
                  movies={favourites}
                  handleFavouritesClick={removeFavouriteMovie}
                  favouriteComponent={RemoveFavourites}
                />
              </div>
            </>
          }
        />
        <Route
          path='/pazig_app'
          element={
            <>
              <div className='row d-flex align-items-center mt-4 mb-4'>
                <MovieListHeading heading='Movies App' />
                <Search searchValue={searchValue} setSearchValue={setSearchValue} />
              </div>
              <div className='row'>
                <MovieList
                  movies={movies}
                  handleFavouritesClick={addFavouriteMovie}
                  favouriteComponent={AddFavourites}
                />
              </div>
              <div className='row d-flex align-items-center mt-4 mb-4'>
                <MovieListHeadingFav heading='Favorites' />
              </div>
              <div className='row'>
                <MovieList
                  movies={favourites}
                  handleFavouritesClick={removeFavouriteMovie}
                  favouriteComponent={RemoveFavourites}
                />
              </div>
            </>
          }
        />
        <Route path='/details/:id' element={<MovieDetails />} />
      </Routes>
    </div>
  );
};

export default App;