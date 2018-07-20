import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {of, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()

export class TypeChartService {

  constructor(private _http: HttpClient) { }

  typeChart() {
    return this._http.get("http://localhost:8080/seizures/type")
    .pipe(
      map(result => result)
    );
  }
}
