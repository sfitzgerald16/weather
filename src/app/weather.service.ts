import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }
    retrieveWeather(city){
      console.log('service was called');
      return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial' + '&APPID=3c68524c59f73ca2bea119d8316888e6')
      .map(data => data.json())
      .toPromise();
    }
}
