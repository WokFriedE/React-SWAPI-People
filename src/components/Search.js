import React from 'react'

export default function Search({ loading, searchQuery, setSearchQuery, paginate }) {

    if (loading) return (<></>);

    const onChange = (e) => {
        setSearchQuery(e.target.value);
        paginate(1);
    }

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
