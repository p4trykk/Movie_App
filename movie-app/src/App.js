import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import Search from './components/MovieSearchKeyboard';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const getAPIrequest =async()=>{
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
	},[searchValue]);

	return (
		<div class="container-fluid movie-app">
			<div class="row">
				<MovieListHeading heading='Movie App' />
				<Search searchValue={searchValue} setSearchValue={setSearchValue}/>
			</div>
			<div className='row'>
				<MovieList movies={movies} />
			</div>
		</div>
	);
};

export default App;
