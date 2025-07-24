import imageRickMorty from './images/rick-morty.png'
import './App.css'
import { useState } from 'react';

function App() {

	const [ characters, setCharacters ] = useState(null);

    const reqApi = async () => {
        const API = await fetch("https://rickandmortyapi.com/api/character");
		const CHARACTER_API = await API.json();
		setCharacters(CHARACTER_API.results);
    };

	console.log(characters);

    return (
		<>
		<div className="App">
			<header className="App-header">
				<h1 className="title">Rick & Morty</h1>
				<img src={imageRickMorty} alt="Rick & Morty" className="img-home" />
				<button onClick={reqApi} className='btn-search'>Buscar personajes</button>
			</header>
		</div>
		</>
  )
}

export default App
