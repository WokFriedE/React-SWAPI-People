import React from 'react'

export default function Search({ loading, searchQuery, setSearchQuery }) {

    if (loading === true) {
        return (<></>)
    }

    return (
        <form className='center'>
            <input
                onSubmit={e => { e.preventDefault(); }}
                value={searchQuery}
                onInput={(e) => setSearchQuery(e.target.value)}
                name="s"
                id="person-search"
                type="text"
                placeholder="Search Person..."
                className='input-style'
            />
        </form>
    )
}
