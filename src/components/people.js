import React from 'react'
// import { Button, Card } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function People({ people, sortedNames }) {

    return (
        <>
            {(() => {
                for (let i = 0; i < sortedNames.length; i++) {
                    return (
                        <li>{people[sortedNames[i]].name}</li>
                    )
                }
            })()}
        </>
    )
}
