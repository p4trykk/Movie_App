import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

const MovieListHeadingFav = (props) => {
	return (
		<div className='col'>
			<h1 className='col1'>
				{props.heading}
                <AiFillHeart className="logo1"/>
			</h1>
		</div>
	);
};

export default MovieListHeadingFav;