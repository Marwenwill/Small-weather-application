import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ZipCodeInputComponent} from "./component/zip-code-input/zip-code-input.component";
import {ZipCodeForecastComponent} from "./component/zip-code-forecast/zip-code-forecast.component";
import {APP_BASE_HREF, CommonModule} from "@angular/common";

const routes: Routes = [
  { path: '', component: ZipCodeInputComponent },
  { path: 'forecast/:zipcode', component: ZipCodeForecastComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppRoutingModule { }
