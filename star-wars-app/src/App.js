//import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';


function App(){
  const [people, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    async function fetchCharacter() {
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = res.json();
      setCharacters(data.results);
    }

    fetchCharacter();
  }, []);
  return (
    <div className='App'>
        Hello
    </div>
  );
}




/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;