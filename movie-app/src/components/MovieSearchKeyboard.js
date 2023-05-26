import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const Search = (props) => {
  const [voiceSearchActive, setVoiceSearchActive] = useState(false);
  
  
  const handleSpeechRecognition = () => {
	try{
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setVoiceSearchActive(true);
    };

    recognition.onend = () => {
      setVoiceSearchActive(false);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      props.setSearchValue(transcript);
    };
	
		recognition.start();
	} catch (error)
	{
		console.error('Voice detection error:', error);
	}

  };

  return (
    <div className='col'>
      <h1>
        <input
          className='form-control'
          value={props.value}
          onChange={(event) => props.setSearchValue(event.target.value)}
          placeholder='search'
        ></input>
        <BiSearch className="searchlogo1" onClick={handleSpeechRecognition} style={{cursor: 'pointer'}} />
        {voiceSearchActive && <span style={{ marginLeft: '0.5rem' }}>Speak now...</span>}
      </h1>
    </div>
  );
};

export default Search;
