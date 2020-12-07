import React, { FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setAlert } from '../store/actions/alertAction'
import { getWeather, setLoading } from '../store/actions/weatherAction'

interface SearchProps {
  title: string
}
const Search: FC<SearchProps> = ({ title }) => {
  const [city, setCity] = useState('')
  const dispatch = useDispatch();

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value)
  }

  const submitHanler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city.trim() === '') {
      return dispatch(setAlert('city is required!'))
    }

    dispatch(setLoading());
    dispatch(getWeather(city));
    setCity('');
  }

  return (
    <div className="hero is-light has-text-centered">
      <div className="her-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          <form className="py-5" onSubmit={submitHanler}>
            <input
              type="text"
              className="input has-text-centere mb2"
              placeholder="Enter city name"
              style={{ maxWidth: 300 }}
              value={city}
              onChange={changeHandler}
            />
            <button className="button is-primary is-fullwidth" style={{ maxWidth: 300, margin: '0 auto' }}>Search</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Search;