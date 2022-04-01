import React from 'react'
import { Card, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function People({ people, loading }) {

    //if loading show nothing
    if (loading) return <></>

    //creates the cards for each person with relevant information, using bootstrap cards
    return (
        <div>
            <Row className='center'>
                {
                    people.map((person, i) => {
                        return (
                            <Card style={{ width: '16rem', backgroundColor: 'rgb(63, 70, 70)', color: '#c5c9c8', margin: '5px' }} key={person.name}>
                                <Card.Body>
                                    <Card.Title>{person.name}</Card.Title>
                                    <Card.Text>
                                        <li>gender:     {person.gender} </li>
                                        <li>hair color: {person.hair_color}</li>
                                        <li>mass:       {person.mass}</li>
                                        <li>height:     {person.height}</li>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </Row>

        </div>
    )
}
