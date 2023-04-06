import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';

const App = () => {
	const [movies, setMovies] = useState([
		{
			Title: 'Game of Thrones',
			Year: '2011–2019',
			imdbID: 'tt0944947',
			Type: 'series',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg',
		},
		{
			Title: 'Rick and Morty',
			Year: '2013–',
			imdbID: 'tt2861424',
			Type: 'series',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg',
		},
    {
			Title: 'BoJack Horseman',
			Year: '2014–2020',
			imdbID: 'tt3398228',
			Type: 'series',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BYWQwMDNkM2MtODU4OS00OTY3LTgwOTItNjE2Yzc0MzRkMDllXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
		},
	]);

	return (
		<div className='container-fluid movie-app'>
			<div className='row'>
				<MovieList movies={movies} />
			</div>
		</div>
	);
};

export default App;
