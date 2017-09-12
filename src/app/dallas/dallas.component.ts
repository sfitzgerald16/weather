import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  city = 'dallas,us';
  forecast;
  promise;
  humidity;
  temp;
  high;
  low;
  status;
  constructor(private _weatherservice: WeatherService) { }
  getWeather(city){
    this.promise = this._weatherservice.retrieveWeather(city)
    if (this.promise){
      this.promise
      .then((forecast) => {
        this.forecast = forecast;
        console.log(forecast);
        this.humidity = forecast.main.humidity;
        this.temp = Math.round(forecast.main.temp);
        this.high = Math.round(forecast.main.temp_max);
        this.low = Math.round(forecast.main.temp_min);
        this.status = forecast.weather[0].description;
      })
      .catch(err => console.log(err))
    }
  }

  ngOnInit() {
    this.getWeather(this.city);
  }
}
