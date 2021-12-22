import React, { useState } from 'react';
import styled from 'styled-components';
import ForecastCard from './ForecastCard';
import { BsSearch } from 'react-icons/bs';

import { useGlobalContext } from '../Weather/context';
const SearchBar = () => {
  const { setCity } = useGlobalContext();
  const [value, setValue] = useState('');
  // const fetch = async (name) => {
  //   try {
  //     const response = await fetch(
  //       `api.openweathermap.org/data/2.5/forecast?q=${name}&appid=026ec3cd1bbbfc617c8edd7311d23e78`
  //     );
  //     const res = await response.json();
  //     const data = await res;
  //     console.log(data);
  //     return data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(value);
  };

  return (
    <>
      <form>
        <Search
          type="text"
          placeholder="Search for City"
          value={value}
          onChange={handleChange}
        />
        <Button type="submit" onClick={handleSubmit}>
          <BsSearch />
        </Button>
      </form>
      <ForecastCard />
    </>
  );
};

const Search = styled.input`
  background-color: white;
  padding: 0.5rem;
  border-radius: 1rem;
  width: 50%;
  border: none;
  outline: none;
  font-style: italic;
`;
const Button = styled.button`
  background-color: #18f1f1;
  margin-left: -1.5rem;
  margin-top: 0.1rem;
  height: 1.938rem;
  width: 5rem;
  border: none;
  border-top-right-radius: 5em;
  border-bottom-right-radius: 5em;
  outline: none;
`;
export default SearchBar;
