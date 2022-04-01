import React from 'react'

export default function Averages({ averageWeight, averageHeight, loading }) {

    //if loading show nothing
    if (loading) return (<></>);

    //sends calculated weights with rounding to the page
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
