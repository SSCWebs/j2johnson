import React from 'react';

const Pagination = ({ guestPerPage, totalGuest, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i < Math.ceil(totalGuest / guestPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination flex-wrap">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href=" " className="page-link">{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Pagination