import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {appConstants} from '../../app-constants';
import {HttpErrorResponse} from "@angular/common/http";
import {ZipCodeService} from "../../service/zip-code.service";
import {LocationWeather} from "../../model/location-weather";
import {WeatherType} from "../../model/enum/weather-type";
import {AppUtils} from "../../app-utils";

@Component({
  selector: 'app-zip-code-input',
  templateUrl: './zip-code-input.component.html',
  styleUrls: ['./zip-code-input.component.css'],
})
export class ZipCodeInputComponent implements OnInit {
  zipCodes: string[] = [];
  zipCodeError: string = '';
  locationsWeather: LocationWeather[] = [];

  @ViewChild('zipCodeForm') zipCodeForm: NgForm;

  constructor(private zipcodeService: ZipCodeService) {}

  ngOnInit() {
    const localStorageZipCodes = localStorage.getItem(appConstants.ZIPCODES);
    if (localStorageZipCodes) {
      const parsedLocalStorageZipCodes: string[] = JSON.parse(localStorageZipCodes);
      parsedLocalStorageZipCodes.forEach(zipCode => {
        this.getZipCodeCurrentWeather(zipCode);
      })
    } else {
      this.zipCodes = [];
      this.locationsWeather = [];
    }
  }

  addLocation(zipCode: string) {
    this.zipCodeError = '';
    if (this.zipCodes.indexOf(zipCode) === -1) {
      this.getZipCodeCurrentWeather(zipCode);
    }
  }

  private getZipCodeCurrentWeather(zipCode: string) {
    this.zipcodeService.getCurrentWeather(zipCode).subscribe({
      next: (locationWeather) => {
        this.locationsWeather.push({
          zipCode: zipCode,
          countryName: locationWeather.name,
          temp: locationWeather.main.temp,
          tempMax: locationWeather.main.temp_max,
          tempMin: locationWeather.main.temp_min,
          weatherType: AppUtils.getWeatherStatus(locationWeather.weather[0].id)
        });
        this.pushZipCodeToLocalStorage(zipCode);
        this.zipCodeForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.zipCodeError = zipCode + ' does not exist ! (404)';
        }
      }
    });
  }

  private pushZipCodeToLocalStorage(zipCode: string): void {
    this.zipCodes.push(zipCode);
    localStorage.setItem(appConstants.ZIPCODES, JSON.stringify(this.zipCodes));
  }

  deleteZipCode(zipCodeToDelete: number) {
    this.zipCodes.splice(zipCodeToDelete, 1);
    localStorage.setItem(appConstants.ZIPCODES, JSON.stringify(this.zipCodes));
    this.locationsWeather.splice(zipCodeToDelete, 1);
  }
}
