import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router } from 'react-router-dom';
import {Container, Dimmer, Loader } from 'semantic-ui-react';
import Characters from './components/Characters';
import Pagination from './components/Pagination';

const App = (props) => {
  const [people, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [peoplePerPage] = useState(6);

  useEffect(() =>{
    async function fetchCharacter() {
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setCharacters(data.results);
      setLoading(false);  
    }

    fetchCharacter();
    
  }, []);

  const indexOfLastPeople = currentPage * peoplePerPage;
  const indexOfFirstPeople = indexOfLastPeople - peoplePerPage;
  const currentPeople = people.slice(indexOfFirstPeople, indexOfLastPeople);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <Router>
        <Navbar />
          <Container>

            {loading ? (
              <Dimmer active inverted>
                <Loader>Loading</Loader>
              </Dimmer>
            ) : (
              <Router exact path='/characters'>
                <Characters data={currentPeople}/>
                
                <Pagination  
                    peoplePerPage={peoplePerPage}
                    totalPeople={people.length}
                    paginate={paginate}  
                  />  
              </Router>
            )}
          
          </Container>
      </Router>  
    </div>
  );
}

export default App;
