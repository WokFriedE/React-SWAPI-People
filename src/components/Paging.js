import React from 'react'
import { Pagination } from 'react-bootstrap';

const PaginationComp = ({ peoplePerPage, totalPeople, paginate, loading, currentPage }) => {
    const paginationItems = [];
    const fromCurrent = 1;
    const maxPages = Math.ceil(totalPeople / peoplePerPage);

    //if loading show nothing
    if (loading) return <></>

    //Function to create pagination items with coorect attributes
    const createPaginationItem = (i) => {
        return (
            <Pagination.Item
                key={i}
                active={currentPage === i}
                onClick={() => paginate(i)}
            >
                {i}
            </Pagination.Item>
        )
    }

    //Adds ellipses to the pagination if center has more than 3 pages
    if (currentPage > fromCurrent + 1) {
        paginationItems.push(createPaginationItem(1));
        paginationItems.push(<Pagination.Ellipsis key={'ellipsis-start'} />);
    }
    for (let i = currentPage - fromCurrent; i <= currentPage + fromCurrent; i++) {
        if (i > 0 && i <= maxPages) {
            paginationItems.push(createPaginationItem(i));
        }
    }
    if (currentPage < maxPages - fromCurrent) {
        paginationItems.push(<Pagination.Ellipsis key={'ellipsis-end'} />);
        paginationItems.push(createPaginationItem(maxPages));
    }


    //Returns the list of pagination items
    return (
        <div>
            <Pagination key={'People'} className="pagination-style">
                <Pagination.First onClick={() => paginate(1)} />
                <Pagination.Prev onClick={() => paginate(currentPage - 1)} />
                {paginationItems}
                <Pagination.Next onClick={() => paginate(currentPage + 1)} />
                <Pagination.Last onClick={() => paginate(maxPages)} />
            </Pagination>
        </div>
    )
}

export default PaginationComp;