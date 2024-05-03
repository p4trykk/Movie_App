# Movie App
The Movie App project is a web application designed for searching and exploring movies and TV shows. It allows users to search for specific titles, view details about them, add favorites, and even perform voice searches. This README provides an overview of the project's functionality, technologies used, and installation instructions.

## Overview
The Movie App features a user-friendly interface with a search bar at the top for entering movie or TV show titles. Upon entering a search query, the application fetches relevant data from the OMDb API and updates the list of displayed titles accordingly. Users can then click on a specific title to view more details, including the title, genre, director, release date, country of production, runtime, description, awards, rating, and poster image. Additionally, users can add or remove titles from their favorites list, which is stored locally using the browser's localStorage. The app also supports voice search functionality, enhancing user experience and accessibility.

## Technologies Used
The Movie App is built using the following technologies:
- React: The primary framework for building the user interface and managing application state.
- JavaScript: Used for the application's logic, event handling, and communication with APIs.
- HTML: Provides the structure for the web pages.
- CSS: Styles the user interface, including colors, fonts, backgrounds, and layouts.
- OMDb API: Provides movie and TV show data for search queries and detailed information.

## Installation
To run the Movie App locally, follow these steps:

1. Clone or download the project repository from GitHub:
```bash
git clone https://github.com/your-username/movie-app.git
```
2. Navigate to the project directory in your terminal:
```bash
cd movie-app
```
3. Make sure you have Node.js installed on your system. If not, download and install it from [nodejs.org](https://nodejs.org/en).
4. Install dependencies by running the following command:
```bash
npm install
```

## Usage
Once the installation is complete, you can start the Movie App. Start the application by running:

```bash
npm start
```

The application should open automatically in your default web browser. If not, you can access it by opening a browser window and navigating to http://localhost:3000.


## GUI
Here are some screenshots showcasing different parts of the application's graphical user interface (GUI):

1. Home Page: The main page of the application where users can search for movies and TV shows.
<p align="center"><img src="https://github.com/p4trykk/Movie_App/blob/main/zdj/mainScreen.png"></p>

2. Search Results: After entering a search query, users can see a list of matching titles.
3. Movie Details: Clicking on a specific title opens a page with detailed information about the movie or TV show.
 
<p align="center"><img src="https://github.com/p4trykk/Movie_App/blob/main/zdj/details_screen.png"></p>

4. Favorites List: Users can add or remove titles from their favorites list, which is stored locally.

## Code Review
In order to make the search box work properly, the “useEffect” was used to overwrite the query value to the API every time the user posts, which allows the list of movies to be updated according to the search value:
```python
const Search = (props) => {
  const [voiceSearchActive, setVoiceSearchActive] = useState(false);
  ...
}  
```
The creation of the home page was followed by the realization of the information page for a given movie. To do this, a MovieDetails component was created that renders the details of a movie based on its ID. It uses “useParams” from react-router-dom to retrieve parameters from the URL, and retrieves the movie details from the OMDb API via an HTTP request using the axios library. Displays the movie details based on the received data:

```python
  const getAPIrequest = async (searchValue) => {
    const link = `http://www.omdbapi.com/?s=${searchValue}&apikey=338ff081`;
    const response = await fetch(link);
    const responseJSON = await response.json();

    if (responseJSON.Search) {
      setMovies(responseJSON.Search);
    }
  };
```

An additional feature of the application that sets it apart from other movie services such as IMDB and Filmweb is the ability to perform voice searches. The “speechRecognition” function supports speech recognition. When speech text is recognized, the status of the “SearchValue” field is updated, which also supports a keyboard search field. When the microphone button is pressed, the text “Speak now...” appears, which tells the user when to start giving the title:


```python
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
```

## Conclusion
The Movie App project has successfully implemented all the required features outlined in the project brief. It provides users with a seamless experience for searching, exploring, and managing their favorite movies and TV shows. By leveraging modern web technologies and the OMDb API, the application delivers a dynamic and engaging user interface.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://www.mit.edu/~amini/LICENSE.md).

art. 74 ust. 1 Ustawa o prawie autorskim i prawach pokrewnych, [Zakres ochrony programów komputerowych](https://lexlege.pl/ustawa-o-prawie-autorskim-i-prawach-pokrewnych/art-74/)



















