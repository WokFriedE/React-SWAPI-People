import React from 'react'

const PaginationComp = ({ peoplePerPage, totalPeople, paginate, loading }) => {
    const pageNumbers = [];

    if (loading) {
        return <h3 className='center-text'>Loading...</h3>
    }

    for (let i = 1; i <= Math.ceil(totalPeople / peoplePerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="center">
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>

    )
}

export default PaginationComp;