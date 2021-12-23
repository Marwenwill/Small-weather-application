import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {ZipCodeService} from "../../service/zip-code.service";
import {LocationWeather} from "../../model/location-weather";
import {AppUtils} from "../../app-utils";

@Component({
  selector: 'app-zip-code-forecast',
  templateUrl: './zip-code-forecast.component.html',
  styleUrls: ['./zip-code-forecast.component.css']
})
export class ZipCodeForecastComponent implements OnInit {

  list5DaysForecast: LocationWeather[] = [];
  private routeSub: Subscription;

  constructor(private route: ActivatedRoute, private zipcodeService: ZipCodeService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      const zipCode = params['zipcode'];
      this.zipcodeService.get5DaysForecastWeather(zipCode).subscribe({
        next: data => {
          const list5DaysForecast: any[] = data.list;
          list5DaysForecast.forEach(dayForecast => {
            this.list5DaysForecast.push({
              zipCode: zipCode,
              countryName: data.city.name,
              temp: dayForecast.temp.day,
              tempMax: dayForecast.temp.max,
              tempMin: dayForecast.temp.min,
              weatherType: AppUtils.getWeatherStatus(dayForecast.weather[0].id),
              day: AppUtils.getDayNameFromDt(dayForecast.dt)
            });
          })
        }
      })
    });
  }

}
