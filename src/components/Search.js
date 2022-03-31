import React from 'react'

export default function Search(loading) {

    if (loading) {
        return (<></>)
    }

    return (
        <div className='center'>
            <input
                className='search-bar'
                type="text"
                placeholder="Search Person..."
            />
        </div>
    )
}
