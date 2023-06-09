import React from 'react';
import { BiMoviePlay } from 'react-icons/bi';


const MovieListHeading = (props) => {
	return (
		<div className='col'>
			<h1 className='col2'>
				<h2 className='col33'>
					{props.heading}
					<BiMoviePlay className="logo1"/>
				</h2>
			</h1>
			
		</div>
	);
};

export default MovieListHeading;