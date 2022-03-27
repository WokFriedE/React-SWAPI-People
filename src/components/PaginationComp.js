import React from 'react'
import { Pagination } from 'react-bootstrap';

export default function PaginationComp(pages) {

    return (
        <div>
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                {(() => {
                    for (let i = 1; i <= pages; i++) {
                        return <Pagination.Item key={i}>{i}</Pagination.Item>
                    }
                })()}

                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </div>
    )
}
