import React from 'react';
import { BiMoviePlay } from 'react-icons/bi';
import { BiSearch } from 'react-icons/bi';

const MovieListHeading = (props) => {
	return (
		<div className='col'>
			<h1>
				{props.heading}
				<BiMoviePlay className="logo1"/>
				<BiSearch className="searchlogo1"/>
			</h1>
			
		</div>
	);
};

export default MovieListHeading;