import React, { useEffect, useContext } from 'react';
import './Form.css';
import Option from '../Option/Option';

import { UserContext } from '../UserContext';
export default function Form() {
  const { ChosenCountry, userForm, CurrentForm } = useContext(UserContext);
  const [currentCountry, setCurrent] = ChosenCountry;

  const [form, setForm] = userForm;
  const [currentForm, setCurrentForm] = CurrentForm;

  const handleChange = (e) => {
    const value = e.target.value;
    const Bdate = document.getElementById('birthdate').value;
    let Bday = +new Date(Bdate);
    let birthday = parseInt((Date.now() - Bday) / 31557600000);

    setCurrentForm({
      ...currentForm,
      [e.target.name]: value,
      number: form.length + 1,
      age: birthday,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentForm('');
    setForm([...form, currentForm]);
  };

  return (
    <div className='Form'>
      <h4 className='text-muted'>Registration Form</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor='Name'>Name</label>
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <input
              type='text'
              className='form-control'
              id='Name'
              name='name'
              placeholder='First'
              name='name'
              value={currentForm.name || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group col-md-6'>
            <input
              type='text'
              id='Last'
              className='form-control'
              placeholder='Last'
              name='last'
              value={currentForm.last || ''}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className='form-group'>
          <label for='Email'>Email</label>
          <input
            type='email'
            className='form-control'
            id='Email'
            name='email'
            value={currentForm.email || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className='input-group'>
          <div className='input-group-prepend'>
            <button
              id='chooseCountry'
              type='button'
              className='btn btn-outline-secondary dropdown-toggle'
              data-toggle='dropdown'
            >
              <img src={currentCountry[0].flag} />
            </button>
            <div className='dropdown-menu'>
              <Option />
            </div>
          </div>
          <input
            type='number'
            className='form-control'
            style={{ borderLeft: 0 }}
            id='Number'
            name='phone'
            value={currentForm.phone || ''}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div className='form-group'>
          <label for='birthdate'>Birth Date</label>
          <input
            type='date'
            className='form-control'
            id='birthdate'
            placeholder='mm / dd / yyyy'
            name='birth'
            required
          />
        </div>

        <label htmlFor='check'>Gender</label>
        <fieldset className='form-group' id='check'>
          <div className='row'>
            <div className='col-sm-10'>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='gender'
                  id='gridRadios1'
                  value='male'
                  checked={currentForm.gender === 'male'}
                  onChange={handleChange}
                  required
                />
                <label className='form-check-label' for='gridRadios1'>
                  Male
                </label>
              </div>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='gender'
                  id='gridRadios2'
                  value='female'
                  checked={currentForm.gender === 'female'}
                  onChange={handleChange}
                />
                <label className='form-check-label' for='gridRadios2'>
                  Female
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <br />
        <button type='submit' className='btn btn-primary btn-sm btn-block'>
          Submit
        </button>
      </form>
    </div>
  );
}
