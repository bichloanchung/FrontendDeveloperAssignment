import React from 'react'

const Pagination = ({peoplePerPage, totalPeople, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPeople/peoplePerPage); i++){
        pageNumbers.push(i);
    }
    return (
        <div className='container'>
            <div className='row'>
                <ul className='pagination'>
                    {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href='!#' className='page-link'>
                            {number}
                        </a>
                    </li>
                    ))}
                </ul>

            </div>

        </div>
    );
};

export default Pagination;

    
