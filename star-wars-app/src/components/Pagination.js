import React from 'react';
import './Pagination.css';

const Pagination = ({peoplePerPage, totalPeople, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPeople/peoplePerPage); i++){
        pageNumbers.push(i);
    }
    return (
        <nav align='center'>
            <p></p>
            <ul class="pagination pg-blue justify-content-center">
                <li class="page-item disabled">
                <a class="page-link" tabindex="-1">Previous</a>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} class='page-item'>
                        <a onClick={() => paginate(number)} href='!#' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
                <li class="page-item" href='!#'>
                <a class="page-link">2</a>
                </li>
                <li class="page-item" href='!#'>
                <a class="page-link">3</a>
                </li>
                <li class="page-item disabled">
                <a class="page-link">Next</a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;

    
