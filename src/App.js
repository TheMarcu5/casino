
import './App.css';
import {useEffect, useState} from "react";
import Game from "./components/Game";
import Currencies from './components/Currencies';
import Categories from './components/Categories';
import Studios from './components/Studios';

function App() {

  const [games, setGames] = useState([]);
  const [studios, setStudios] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [filteredGames, setFilteredGames] = useState([]);
  // const [currencies, setCurrencies] = useState([]);
  
  const [filteredStudios, setFilteredStudios] = useState([]);
  
  const [activeStudio, setActiveStudio] = useState(86);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    const response = await fetch('https://cubeia-code-tests.s3.eu-west-1.amazonaws.com/lobby.json')
    const casinoData = await response.json();
    
  
    setGames(casinoData.games);
    // setCurrencies(casinoData.currencies);
    setStudios(casinoData.studios);
    setTags(casinoData.tags);
  }


  return (
    <div className="App">
      <div className='casino-currencies'>
        <Currencies
          studios={studios}
          setFilteredStudios={setFilteredStudios}
          setSelectedCurrency={setSelectedCurrency}
          selectedCurrency={selectedCurrency}
        />
      </div>
      <div className='casino-categories'>
        <Categories/>
      </div>
      <div>
        <Studios 
          filteredStudios={filteredStudios}
          games={games}
          setFilteredGames={setFilteredGames}
          activeStudio={activeStudio}
          setActiveStudio={setActiveStudio}
          />
      </div>
      <div className="game-thumbnails">
        {filteredGames.map((game) => {
     
          const studioName = studios.find(element => element.id === game.studioId)

          return <Game key={game.id} game={game} studioName={studioName}/>;
        })}
      </div>

    </div>
  );
}

export default App;

