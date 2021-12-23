import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ZipCodeInputComponent } from './component/zip-code-input/zip-code-input.component';
import { ZipCodeDetailsComponent } from './component/zip-code-details/zip-code-details.component';
import { ZipCodeService } from './service/zip-code.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ZipCodeForecastComponent } from './component/zip-code-forecast/zip-code-forecast.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [AppComponent, ZipCodeInputComponent, ZipCodeDetailsComponent, ZipCodeForecastComponent],
  providers: [{ provide: ZipCodeService, useClass: ZipCodeService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
