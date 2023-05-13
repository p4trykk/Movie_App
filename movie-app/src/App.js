import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import Search from './components/MovieSearchKeyboard';
import AddFavourites from './components/AddToFavList';
import RemoveFavourites from './components/DeleteFromFavList';
import MovieListHeadingFav from './components/MovieListFav';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getAPIrequest =async(searchValue)=>{
		const link = `http://www.omdbapi.com/?s=${searchValue}&apikey=338ff081`;
		const response = await fetch(link);
		const responseJSON =await response.json();

		if(responseJSON.Search)
		{
			setMovies(responseJSON.Search);
		}
	};
	useEffect(()=>{
		getAPIrequest(searchValue);
	}, [searchValue]);

	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

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
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movies App' />
				<Search searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<MovieList movies={movies} handleFavouritesClick={addFavouriteMovie}
					favouriteComponent={AddFavourites}/>
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
		</div>
	);
};

export default App;
