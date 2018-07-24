import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {of, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()

export class TypeChartService {

  constructor(private _http: HttpClient) { }

  typeChart() {
    return this._http.get('http://mstrest.herokuapp.com/seizures/type')
    .pipe(
      map(result => result)
    );
  }

  triggerChart() {
    return this._http.get('http://mstrest.herokuapp.com/seizures/trigger')
    .pipe(
      map(result => result)
    );
  }

  timeChart() {
    return this._http.get('http://mstrest.herokuapp.com/seizures/tod')
  }
}
