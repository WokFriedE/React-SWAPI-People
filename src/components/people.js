import React from 'react'
import { Card, Row, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function People({ people, loading }) {

    if (loading) {
        return (
            <div className='center'>
                <Spinner animation='border' role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>

        )
    }
    //send a list of indexes that are part of the first page,
    //use page as index and send list of indexes to PeopleCard

    return (
        <div>
            <Row className='center'>
                {
                    people.map((person, i) => {
                        return (
                            <Card style={{ width: '15rem', backgroundColor: 'rgb(63, 70, 70)', color: '#c5c9c8' }}>
                                <Card.Body>
                                    <Card.Title>{person.name}</Card.Title>
                                    <Card.Text>
                                        <li>gender:     {person.gender} </li>
                                        <li>hair_color: {person.hair_color}</li>
                                        <li>height:     {person.height}</li>
                                        <li>mass:       {person.mass}</li>
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
