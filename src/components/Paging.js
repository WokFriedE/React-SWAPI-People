import React from 'react'

const PaginationComp = ({ peoplePerPage, totalPeople, paginate, loading, currentPage }) => {
    const pageNumbers = [];

    if (loading) {
        return <h3 className='center-text'>Loading...</h3>
    }

    for (let i = 1; i <= Math.ceil(totalPeople / peoplePerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="pagination-style">
            <ul className="pagination">
                <li key="prev">
                    <a onClick={() => paginate(currentPage - 1)} className="page-link">
                        {"<"}
                    </a>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className="page-item" >
                        <a onClick={() => paginate(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
                <li key="next">
                    <a onClick={() => paginate(currentPage + 1)} className="page-link">
                        {">"}
                    </a>
                </li>
            </ul>
        </nav>

    )
}

export default PaginationComp;