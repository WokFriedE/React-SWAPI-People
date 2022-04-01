import React from 'react'

export default function Search({ loading, searchQuery, setSearchQuery, paginate }) {

    //if loading show nothing
    if (loading) return (<></>);

    //sends search query to the page and reset page location
    const onChange = (e) => {
        setSearchQuery(e.target.value);
        paginate(1);
    }

    //offers user to search for a person
    return (
        <div className='center'>
            <input
                onSubmit={e => { e.preventDefault(); }}
                value={searchQuery}
                onInput={(e) => onChange(e)}
                name="s"
                id="person-search"
                type="text"
                placeholder="Search Person..."
                className='input-style'
                autoComplete='off'
            />
        </div>
    )
}
