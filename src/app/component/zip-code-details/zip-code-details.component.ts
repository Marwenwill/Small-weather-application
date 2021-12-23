import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {LocationWeather} from '../../model/location-weather';

@Component({
  selector: 'app-zip-code-details',
  templateUrl: './zip-code-details.component.html',
  styleUrls: ['./zip-code-details.component.css'],
})
export class ZipCodeDetailsComponent implements OnChanges {

  @Input() locationsWeather: LocationWeather[];
  @Output() toDeleteZipCodeIndex: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.locationsWeather);
  }

  deleteZipCode(zipCodeIndex: number): void {
    console.log(zipCodeIndex);
    this.toDeleteZipCodeIndex.emit(zipCodeIndex);
  }


}
