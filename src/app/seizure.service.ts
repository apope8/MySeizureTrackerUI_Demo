import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seizure } from './seizure';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SeizureService {
  private seizuresURL = 'https://mstrest.herokuapp.com/seizures'; //URL to API
  
  constructor(
    private http: HttpClient
  ){}
  
  getSeizures (): Observable<Seizure[]> {
    return this.http.get<Seizure[]>(this.seizuresURL)
  }

  getSeizure(id: number): Observable<Seizure> {
    const url = `${this.seizuresURL}/${id}`;
    return this.http.get<Seizure>(url);
  }

  addSeizure (seizure : Seizure): Observable<Seizure> {
    return this.http.post<Seizure>(this.seizuresURL, seizure, httpOptions);
  }

  deleteSeizure (seizure: Seizure | number): Observable<Seizure> {
    const id = typeof seizure === 'number' ? seizure : seizure.id;
    const url = `${this.seizuresURL}/${id}`;

    return this.http.delete<Seizure>(url, httpOptions);
  }

  updateSeizure (seizure : Seizure): Observable<any> {
    return this.http.put(this.seizuresURL, seizure, httpOptions);
  }



}
