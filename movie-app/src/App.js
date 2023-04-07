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
		const posterLink = 'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg';
		const response = await fetch(posterLink);
		const responseJSON =await response.json();

		if(responseJSON.Search)
		{
			setMovies(responseJSON.Search);
		}
	};
	useEffect(()=>{
		getAPIrequest();
	},[]);

	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
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
