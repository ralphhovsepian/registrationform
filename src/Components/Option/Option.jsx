import React, { useEffect, useContext } from 'react';
import { UserContext } from '../UserContext';
import './Option.css';
export default function Option() {
  const { Country, ChosenCountry, CurrentForm } = useContext(UserContext);
  const [country, setCountry] = Country;
  const [currentCountry, setCurrent] = ChosenCountry;
  const [currentForm, setCurrentForm] = CurrentForm;
  useEffect(() => {
    const getCountries = async () => {
      const response = await fetch('https://restcountries.eu/rest/v2/all');
      const data = await response.json();
      setCountry(data);
    };

    getCountries();
  }, []);

  const CountryHandler = (country) => {
    setCurrent([country]);

    setCurrentForm({
      ...currentForm,
      phone: country.callingCodes,
    });
  };

  return (
    <React.Fragment>
      {country.map((count, key) => {
        return (
          <a
            key={key}
            href='#'
            className='dropdown-item'
            onClick={() => {
              CountryHandler(count);
            }}
            value={count.name}
          >
            <img src={count.flag} className='img-responsive' />
            {count.name}
          </a>
        );
      })}
    </React.Fragment>
  );
}
