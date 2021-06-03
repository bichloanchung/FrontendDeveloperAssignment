import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

export default function Characters({data, loading}) {
    if (loading) {
        return <h2>Loading ...</h2>;
    }
    return (
        <div>
            <h1 align='center'>Star Wars Characters</h1>
            <Grid columns={2}>
                {data.map((people, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{people.name}</Card.Header>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    )
                })}

            </Grid>
        </div>

    );
}
