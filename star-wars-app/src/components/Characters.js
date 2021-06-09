import React, {useState, useEffect} from 'react';
import { Card, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Popup } from 'semantic-ui-react';

export default function Characters({data, loading}) {
    
    const [search, setSearch] = useState('');
    const [filteredPeople, setfilteredPeople] = useState([]);
    
    useEffect( () => {
        setfilteredPeople (
            data.filter( (people) => {
                if (search == null){
                    return people
                }else if (people.name.toLowerCase().includes(search.toLowerCase())){
                    return people
                }
            })
        )

    }, [search, data])

    if (loading) {
        return <p>Loading ...</p>
    }

    return (
        <div align='center'>
            <h3><i> Enter name here to be searched! </i></h3>
            <input
                class='form-control-lg'
                type = 'text'
                placeholder='Search...'
                onChange={ e => setSearch(e.target.value)}
            />
            <p></p>
            <Grid columns={2}>
                {filteredPeople.map((people, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Card >
                                <Card.Content>
                                    <Popup
                                        trigger={<Card.Header align='center'>{people.name}</Card.Header>}
                                        key={i}
                                        position='right center'
                                            
                                    >
                                    <Card.Description>
                                        <strong>Height</strong>
                                        <p>{people.height}</p>
                                        <strong>Mass</strong>
                                        <p>{people.mass}</p>
                                        <strong>Hair-color</strong>
                                        <p>{people.hair_color}</p>
                                        <strong>Gender</strong>
                                        <p>{people.gender}</p>
                                        <strong>Birthday</strong>
                                        <p>{people.birth_year}</p>
                                        </Card.Description> 
                                    </Popup> 
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    )  
                    
                })}
            </Grid>
        </div>
    );
}
