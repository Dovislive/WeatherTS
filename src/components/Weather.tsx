import React, { FC } from 'react';
import { WeatherData } from '../store/types'

interface WeatherProps {
  data: WeatherData
}

const Weather: FC<WeatherProps> = ({ data }) => {
  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
  const celsius = (data.main.temp - 273.15).toFixed(2);
  const rtut = (data.main.pressure * 0.75).toFixed(0);

  const sunDate = (unix_timestamp: number) => {
    let date = new Date(unix_timestamp * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    let formattedTime = `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
    return formattedTime;
  }
  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered" style={{ marginBottom: 50 }} >{data.name} - {data.sys.country}</h1>
        <div className="level" style={{ alignItems: 'flex-start' }}>
          <div className="level-item has-text-centered">
            <p className="heading">
              {data.weather[0].description}
            </p>
            <p className="title">
              <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="" />
            </p>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">temp</p>
              <div className="title">
                <p className="mb-2">{data.main.temp}K</p>
                <p className="mb-2">{fahrenheit} <sup>&#8457;</sup></p>
                <p>{celsius} <sup>&#8451;</sup></p>
              </div>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">humidity</p>
              <p className="title">{data.main.humidity} %</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">pressure</p>
              <p className="title">{rtut} мм.рт.ст</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">wind</p>
              <p className="title">{data.wind.speed} м/с</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">sunrise</p>
              <p className="title">{sunDate(data.sys.sunrise)}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">sunset</p>
              <p className="title">{sunDate(data.sys.sunset)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Weather;