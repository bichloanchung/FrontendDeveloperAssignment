import React, { useState } from 'react';
import { Card, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Popup } from 'semantic-ui-react';

export default function Characters({data, loading}) {
    if (loading) {
        return <h2> Loading ... </h2>
    }
    const [searchTerm, setSearchTerm] = useState('');
    
    return (
        <div align='center'>
            <h1><strong>Star Wars Characters</strong></h1>
            <p><i>Enter name to be searched!</i></p> 
            <input 
                type='text'
                placeholder='Search...'
                onChange={(event) =>{
                    setSearchTerm(event.target.value);
                }}/>
            <p></p>
            <Grid columns={2}>
                {data.filter((people) =>{
                    if(searchTerm == null){
                        return people
                    }
                    else if(people.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return people
                    }
                }).map((people, i) => {
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
