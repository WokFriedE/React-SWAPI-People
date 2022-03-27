import React from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function People({ pageCompleted, page }) {
    //print pageCompleted
    let people = pageCompleted[page];

    return (
        <div>
            {
                Object.keys(people).map((person, x) => {

                    return (
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{person}</Card.Title>
                                <Card.Text>
                                    <li>gender:     {people[person].gender}, </li>
                                    <li>hair_color: {people[person].hair_color},</li>
                                    <li>height:     {people[person].height},</li>
                                    <li>mass:       {people[person].mass}</li>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    )

                })
            }
        </div>
    )
}
