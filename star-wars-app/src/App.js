import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Container, Dimmer, Loader } from 'semantic-ui-react';
import Characters from './components/Characters';

function App(){
  const [people, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() =>{
    async function fetchCharacter() {
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setCharacters(data.results);
      setLoading(false);
    }

    fetchCharacter();
  }, []);

  return (
    <>
      <Router>
        <Navbar />
          <Container>

            {loading ? (
              <Dimmer active inverted>
                <Loader>Loading</Loader>
              </Dimmer>
            ) : (
              <Router exact path='/characters'>
                <Characters data={people}/>
              </Router>
            )}
          
          </Container>
      </Router>
    </>
  );
}

export default App;