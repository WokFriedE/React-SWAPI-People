import React from 'react'
import { Pagination } from 'react-bootstrap';

const PaginationComp = ({ peoplePerPage, totalPeople, paginate, loading, currentPage }) => {
    const pageNumbers = [];
    const maxPages = Math.ceil(totalPeople / peoplePerPage);

    if (loading) return <></>

    for (let i = 1; i <= maxPages; i++) {
        pageNumbers.push(i);
    }

    const Ellipsis = () => {
        if (currentPage > 3 && currentPage < maxPages - 2) {
            return (
                <Pagination.Ellipsis />
            )
        }
    }

    return (
        <nav className="pagination-style">
            <ul className="pagination">
                <Pagination>
                    <Pagination.First onClick={() => paginate(1)} />
                    <Pagination.Prev onClick={() => paginate(currentPage - 1)} />
                    {
                        pageNumbers.map(number => (
                            <Pagination.Item onClick={() => paginate(number)}>{number}</Pagination.Item>
                        ))
                    }
                    <Pagination.Next onClick={() => paginate(currentPage + 1)} />
                    <Pagination.Last onClick={() => paginate(maxPages)} />
                </Pagination>
            </ul>
        </nav>

    )
}

export default PaginationComp;