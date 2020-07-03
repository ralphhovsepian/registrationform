import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [country, setCountry] = useState([]);
  const [currentCountry, setCurrent] = useState([
    {
      flag: 'https://restcountries.eu/data/arm.svg',
      callingCodes: 374,
    },
  ]);

  const [form, setForm] = useState([
    {
      number: 1,
      name: 'Ralph Hovsepian',
      email: 'ralphhossepian@gmail.com',
      phone: '37444309088',
      age: 19,
      gender: 'male',
    },
  ]);

  const [currentForm, setCurrentForm] = useState({
    name: '',
    last: '',
    email: '',
    phone: '374',
    age: '',
    gender: '',
  });

  const [sort, setSort] = useState('');

  return (
    <UserContext.Provider
      value={{
        Country: [country, setCountry],
        ChosenCountry: [currentCountry, setCurrent],
        userForm: [form, setForm],
        CurrentForm: [currentForm, setCurrentForm],
        Sort: [sort, setSort],
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
