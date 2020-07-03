import React, { useEffect, useContext } from 'react';
import './Table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../UserContext';
import TableRow from '../TableRow/TableRow';
export default function Table() {
  const { Sort } = useContext(UserContext);
  const [sort, setSort] = Sort;

  const handleSort = () => {
    if (sort == 'young') {
      setSort('old');
    } else if (sort == 'old' || sort == '') {
      setSort('young');
    }
  };

  return (
    <div className='Table'>
      <h2>Table</h2>

      <table className='table'>
        <thead>
          <tr style={{ backgroundColor: '#F5F5F5' }}>
            <th scope='col'></th>
            <th scope='col'>Full Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Phone Number</th>
            <th scope='col'>
              Age &nbsp;
              <span
                onClick={handleSort}
                style={{ color: '#758690', cursor: 'pointer' }}
              >
                {sort == 'old' || sort == '' ? (
                  <FontAwesomeIcon icon={faArrowDown} />
                ) : (
                  <FontAwesomeIcon icon={faArrowUp} />
                )}
              </span>
            </th>
            <th scope='col'>Gender</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          <TableRow />
        </tbody>
      </table>
    </div>
  );
}
