import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { appConstants } from '../app-constants';

@Injectable()
export class ZipCodeService {
  public static APP_ID = "5a4b2d457ecbef9eb2a71e480b947604";
  constructor(private http: HttpClient) {}

  getCurrentWeather(zipCode: string): Observable<any> {
    const url =
      appConstants.OPEN_CURRENT_WEATHER_URL +
      '?zip=' +
      zipCode +
      '&appid=' + ZipCodeService.APP_ID +
      '&units=metric';
    return this.http.get<any>(url);
  }

  get5DaysForecastWeather(zipCode: string): Observable<any> {
    const url =
        appConstants.OPEN_FORECAST_WEATHER_URL +
        '?zip=' +
        zipCode +
        '&appid=' + ZipCodeService.APP_ID +
        '&units=metric' +
        '&cnt=5';
    return this.http.get<any>(url);
  }
}
