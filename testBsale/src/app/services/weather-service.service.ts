import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( public httpClient: HttpClient) {
    console.log('asf');
  }
  getUrl(query?: string) {
    return `http://samples.openweathermap.org/data/2.5/weather?q=${query}`;
    //return this.httpClient.get(url);
  }
  getTime() {
    const data = this.getUrl('London,uk&appid=b6907d289e10d714a6e88b30761fae22');
    console.log(data);
    //data.subscribe(res => console.log(res));
      // .pipe(
      // map(data => data);

  }
}
