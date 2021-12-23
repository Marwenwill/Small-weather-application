import { WeatherType } from './enum/weather-type';

export interface LocationWeather {
  zipCode: string,
  countryName: string,
  temp: number,
  tempMax: number,
  tempMin: number,
  weatherType: WeatherType,
  day?: string
}
