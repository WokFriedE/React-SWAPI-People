import React from 'react'
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoadingSplash({ loading, pagesLoaded, totalPages }) {
    //if loading is true, show loading spinner w/ bootstrap and pages needed to be loaded
    if (loading) {
        return (
            <div>
                <h3 className='center-load'>=== Loading ===</h3>
                <div className='center'>
                    <Spinner animation='border' role="status" className='spinner-border text-info'>
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
                <h3 className='center-load'>=== {pagesLoaded}/{totalPages} Pages ===</h3>
            </div>
        )
    }

    //if loading is not occuring, then show nothing
    return (<></>)
}
