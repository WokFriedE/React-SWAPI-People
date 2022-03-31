import React from 'react'
import Card from 'react-bootstrap/Card'

export default function Averages({ averageWeight, averageHeight, loading }) {
    if (loading) {
        return (<></>)
    }

    return (
        <div className='average-contain'>
            <h3>
                Averages
            </h3>
            <h6> Average Weight: {(Math.round(averageWeight * 100) / 100).toFixed(2)} </h6>
            <h6> Average Height: {(Math.round(averageHeight * 100) / 100).toFixed(2)} </h6>
        </div >
    )
}
