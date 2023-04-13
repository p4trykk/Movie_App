import React from 'react';
import { BiSearch } from 'react-icons/bi';

const Search = (props) => {
	return (
		<div className='col'>
			<h1>
				<input
					className='form-control'
					value={props.value}
					onChange={(event) => props.setSearchValue(event.target.value)}
					placeholder='search'
				></input>
				<BiSearch className="searchlogo1"/>
			</h1>
		</div>
	);
};

export default Search;