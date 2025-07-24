import imageRickMorty from './images/rick-morty.png'
import './App.css'

function App() {

    const reqApi = () => {
        console.log("Clicking")
    };

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
