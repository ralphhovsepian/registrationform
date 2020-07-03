import React, { useEffect, useContext } from 'react';
import './TableRow.css';
import Swal from 'sweetalert2';

import { UserContext } from '../UserContext';
export default function TableRow() {
  const { userForm, ChosenCountry, Sort } = useContext(UserContext);
  const [form, setForm] = userForm;
  const [sort, setSort] = Sort;

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        let newUsers = form.filter((item) => item.number !== id);
        setForm(newUsers);

        Swal.fire('Deleted!', 'The user has been deleted.', 'success');
      }
    });
  };

  const youngToOld = (a, b) => {
    return a.age - b.age;
  };

  const oldToYoung = (a, b) => {
    return b.age - a.age;
  };
  const sortBy =
    sort == 'young'
      ? form.sort(youngToOld)
      : sort == ''
      ? form
      : form.sort(oldToYoung);
  return sortBy.map((user, key) => {
    return (
      <tr key={key}>
        <th scope='row'>{user.number}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>+{user.phone}</td>
        <td>{user.age}</td>
        <td>{user.gender}</td>
        <td>
          <button
            type='button'
            className='close'
            aria-label='Close'
            onClick={() => {
              handleDelete(user.number);
            }}
          >
            <span aria-hidden='true'>&times;</span>
          </button>
        </td>
      </tr>
    );
  });
}
